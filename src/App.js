import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import { Courses } from './components/Courses';
import Footer from './components/Footer';

import { Header } from './components/Header';
import Index from './components/Index';
import InscribeMateria from './components/InscribeMateria';
import { MyCourse } from './components/MyCourse';

export default function App() {
    
    return (
        <>
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={Index} />
                <Route path="/myCourse" exact component={MyCourse} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/inscribe" exact component={InscribeMateria} />
            </BrowserRouter>
            {/* <Footer /> */}
        </>
    );
}
