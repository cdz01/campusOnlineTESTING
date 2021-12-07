import React from 'react'

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
                </a>
                <span className="text-muted">2021 Campus Virtual</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{marginRight: 20}}>
                <li className="ms-3"><a className="text-muted" href="#"><img src="../assets/imgs/001-instagram.png" alt={24} width={24} height={24} /></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><img src="../assets/imgs/telegram.png" alt={24} width={24} height={24} /></a></li>
            </ul>
        </footer>
    )
}
