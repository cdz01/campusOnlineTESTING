import React from 'react'
import TableCourse from './TableCourse';

import logo from '../assets/HIU.png'

export default function TblCourse(props) {

    const [courseSelected, setCourseSelected] = React.useState("");
    const [myCourses, setMyCourses] = React.useState("");

    var current_course = [];
    
    try {
        props.courses.map(c => {current_course.push(c)});
            
    } catch (error) {  }

    // HANDLE'S //
    const handleSelect = ({ name, semester }) => {
        
        localStorage.setItem("course_selected", name);
        setCourseSelected(name);
        setMyCourses(JSON.parse(localStorage.getItem("mycourse")));
    }

    const handleAddCourse = (course) => {
        var courses = JSON.parse(localStorage.getItem("mycourse"));
        
        const found = courses[props.semester].find(_course => _course === course);

        if (found === undefined) {
            courses[props.semester].push(course);
            localStorage.setItem("mycourse", JSON.stringify(courses));
            setMyCourses(JSON.parse(localStorage.getItem("mycourse")));
            setTimeout(() => {
                alert(course + ", se ha inscrito correctamente!");
            }, 250);
        }

        if (found !== undefined) {
            alert(courseSelected + ', ya asignada');
        }
        
        // const found = courses.find(_course => _course === course);
        
        // /* SI NO HAY CONINCIDENCIA HACE UN PUSH Y GUARDA EN LOCALSTORAGE (MIS MATERIAS) */
        // if (found === undefined) {
        //     courses.push(course);
        //     localStorage.setItem("mycourse", JSON.stringify(courses));
        //     setMyCourses(JSON.parse(localStorage.getItem("mycourse")));
        // }

        // if (found !== undefined) {
        //     alert(courseSelected + ', ya asignada');
        // }
        
    }

    return (
        <div className="mt-5 text-center">
            <div className="mt-5 mb-5 row justify-content-center">
                <div className="col-sm-1">
                    <img src={logo} width="120" height="60" />
                </div>
                <div className="col-sm-6">
                    <h5>Asignaturas Humboldt International University</h5>
                </div>
            </div>
            
            <table className="table table-hover table-striped table-bordered border-primary">
                <thead>
                    <th scope="col">Semestre</th>
                    <th scope="col">Asignatura</th>
                    {/* <th scope="col">Semestre</th> */}
                </thead>
                <tbody>
                    {
                        current_course.map(c => {
                            return (
                                <tr data-bs-toggle="modal" data-bs-target="#mymodal" onClick={() => handleSelect({name: c, semester: props.semester})}>
                                    <td>Nº {props.semester}</td>
                                    <td>{c}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>

            <div className="modal fade" id="mymodal" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar Nueva materia</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        
                        <div class="modal-body bg-mdl-posts">
                            <div class="container">
                                <main>
                                    <div class="row">
                                        <div class="list-group col">
                                            <div class="list-group-item">
                                                <h2>{courseSelected}</h2>
                                                <button className="btn btn-secondary" onClick={() => handleAddCourse(courseSelected)}>Agregar</button>
                                            </div>
                                            
                                            <div className="text-center mt-5">
                                                <img src={logo} width="160" height="120" />
                                            </div>
                                            
                                        </div>
                                        
                                        <div class="list-group col">
                                            <div class="list-group-item">
                                                <TableCourse title={"Mis Materias"} semester={1} courses={myCourses} />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

