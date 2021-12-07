import react from "react";
import logo from '../assets/HIU.png'

export function Header() {
    return (
        <header>
            <nav className="d-flex navbar  navbar-expand-sm navbar-dark p-2 bg-dark" style={{background: '#50CA28'}}>
                <div>
                    <a href="./" style={{borderBottom: "none"}}><img src={logo} alt={80} width={140} height={60} /></a>
                </div>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="justify-content-end collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item active">
                            <a className="nav-link" href="/myCourse">Mis Materias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/courses">Asignaturas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inscribe">Inscribir Materias</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/inscribe">Evaluaciones</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profesores</a>
                        </li>
                    </ul>
                    
                </div>
                <div className="d-flex my-2 my-lg-0">
                    <button className="btn btn-outline btn-secondary">Cerrar Sesion</button>
                </div>
            </nav>
        </header>
    );
}