import React from 'react'

export default function TableCourse(props) {

    var current_course = [];

    const [ HasCourses, setHasCourses ] = React.useState(false);
    
    try {
        props.courses.map(c => {current_course.push(c)});
            
    } catch (error) {  }

    console.log(current_course.length);

    var hasTest = false;

    const hasCourses = () => {
        Object.values(props.courses).forEach(semester => {
            if (semester.length > 0) {
                hasTest = true;
                return;
            }
        })
    }
    hasCourses();
    
    return (
        <div className="mt-5 text-center">
            <div className="mt-5">
                <h5>{props.title != null ? props.title : "Asignaturas Universidad Alejandro de Humboldt" }</h5>
            </div>
            
            <table className="table table-hover table-striped table-bordered border-primary">
                {
                    hasTest === true?
                    <thead>
                        <th scope="col">Semestre</th>
                        <th scope="col">Asignatura</th>
                    </thead>
                    :
                    <div><strong className="bg-warning p-2">Ninguna Asignatura Agregada</strong></div>
                }

                {
                    
                    Object.values(props.courses).map((c, i) => {
                        return (
                            <tbody>
                                {
                                    c.map(k => {
                                        return (
                                            <tr>
                                                <td>Nº {i+1}</td>
                                                <td>{k}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        )
                    })
                }

                {/* <tbody>
                    {
                        current_course.map(c => {
                            return (
                                <tr>
                                    <td>{props.semester}</td>
                                    <td>{c}</td>
                                </tr>
                            )
                        })
                    }
                </tbody> */}
            </table>
        </div>
    )
}
