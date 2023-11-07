import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import { element } from 'prop-types';

export default function App() {
    return (
        // <div>React Router 라이브러리 사용해 보기</div>
        // Route는 하나만 있어야함
        /*
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/gallery'} element={<Gallery />} />
                <Route path={'/guestbook'} element={<Guestbook />} />
            </Routes>
        </HashRouter>
         */   
        
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/gallery'} element={<Gallery />} />
                <Route path={'/guestbook'} element={<Guestbook />} />
            </Routes>
        </BrowserRouter>


    );
}