import React from 'react'

import img_build from '../assets/build_uah.jpg'


export default function Index() {

    // INICIALIZA DATA MY_COURSE
    if (JSON.parse(localStorage.getItem("mycourse")) == null) {
        localStorage.setItem("mycourse", JSON.stringify({"1": [],"2": [],"3": [],"4": []}));
    }
    
    return (
        <main className="container mb-5">
            <div className="mt-5 text-center bg-container border p-5">
                <h5>Welcome to Humboldt International University</h5>
                <img src={img_build} style={{width: '80%'}} />
            </div>
        </main>
    )
}
