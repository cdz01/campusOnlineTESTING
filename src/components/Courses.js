import React from 'react'
import TableCourses from './TableCourses';

export const courses = {
    "1": ["Matematica I", "Ingles I", "Logica"],
    "2": ["Matematica II", "Ingles II", "Computacion I"],
    "3": ["Matematica III", "Ingles III", "Computacion II"],
    "4": ["Matematica IV", "Fisica I", "Matematica Discreta"],
}

export const Semesters = {I: "1", II: "2", III: "3", IV: "4"};

export function Courses() {

    return (
        <main>
            <div className="container">

                <TableCourses courses={courses} />
                
            </div>
        </main>
    )
}
