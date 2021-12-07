import React from 'react'

import { courses, Semesters } from './Courses'
import TableCourse from './TableCourse';
import TableCourseSelect from './TableCourseSelect';


export default function InscribeMateria() {

    const [Semester, setSemester] = React.useState("");
    const [ShowSemesterSelect, setShowSemesterSelect] = React.useState({display: 'none'});
    const [ myCourse, setMyCourse ] = React.useState(JSON.parse(localStorage.getItem("mycourse")));
    const [ MsgHelp, setMsgHelp ] = React.useState("Selecciona el Semestre");

    const handle_semesterI = () => {
        setSemester({show: "Semestre I", semester: 1});
        setShowSemesterSelect({display: 'block'})
        setMsgHelp("Selecciona la materia a inscribir")
    }
    const handle_semesterII = () => {
        setSemester({show: "Semestre II", semester: 2});
        setShowSemesterSelect({display: 'block'})
        setMsgHelp("Selecciona la materia a inscribir")
    }
    const handle_semesterIII = () => {
        setSemester({show: "Semestre III", semester: 3});
        setShowSemesterSelect({display: 'block'})
        setMsgHelp("Selecciona la materia a inscribir")
    }
    const handle_semesterIV = () => {
        setSemester({show: "Semestre IV", semester: 4});
        setShowSemesterSelect({display: 'block'})
        setMsgHelp("Selecciona la materia a inscribir")
    }
    
    return (
        <main>
            <header>
                <div className="d-flex justify-content-end p-2" style={{background: "#ec3337"}}>
                <div className="dropdown">
                        <button onClick={() => setMyCourse(JSON.parse(localStorage.getItem("mycourse")))} className="btn-borless btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            Acceso Rapido
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button data-bs-toggle="modal" data-bs-target="#modal_mycourses" className="dropdown-item" type="button">Mis Materias</button></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className="container border mt-5">
                <div className="list-group">
                    <div className="list-group-item d-flex row">
                        <div className="col">
                            <div className="dropdown">
                                <button className="btn-borless bg-secondary text-white p-2 dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Semestre
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button className="dropdown-item" type="button" onClick={handle_semesterI}>I</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handle_semesterII}>II</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handle_semesterIII}>III</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={handle_semesterIV}>IV</button></li>
                                </ul>
                            </div>

                        </div>
                        
                        <div className="col">
                            <h5 className="border p-2 text-white text-center bg-success" style={ShowSemesterSelect}>{Semester.show}</h5>
                        </div>



                    </div>
                        <div className="text-center bg-secondary text-white mt-3 p-2">
                            <h5><strong>{MsgHelp}</strong></h5>
                        </div>
                </div>
                    <TableCourseSelect semester={Semester.semester} courses={courses[Semester.semester]} />
            </div>

            <div className="modal fade" id="modal_mycourses" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Acceso Rapido - Mis Materias</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        
                        <div className="modal-body bg-mdl-posts">
                            <div className="container">
                                <TableCourse  title="Mis Materias" courses={myCourse} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
