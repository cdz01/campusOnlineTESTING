import React from 'react'
import TableCourse from './TableCourse';

export var get_myCourse = () => {
    const mycourse = JSON.parse(localStorage.getItem("mycourse"));
    return mycourse;
}

export function MyCourse() {
    
    
    return (
        <main>
            <div className="container">
                <TableCourse title="Mis Materias" courses={JSON.parse(localStorage.getItem("mycourse"))} />
            </div>
        </main>
    )
}
