import React from 'react'

export default function TableCourses(props) {
    return (
        <div className="mt-5 text-center">
                <div className="mt-5">
                    <h5>Asignaturas Universidad Alejandro de Humboldt</h5>
                </div>
                
                <table className="table table-hover table-striped table-bordered border-primary">
                    <thead>
                        <th scope="col">Semestre</th>
                        <th scope="col">Asignatura</th>
                    </thead>

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
                    
                </table>

            </div>
    )
}
