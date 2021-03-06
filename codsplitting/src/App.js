import React from 'react';
import {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

//import Slogan from './components/Slogan';
//import Copyright from './components/Copyright';

const Slogan = lazy(() => import('./components/Slogan'));
const Conteudo = lazy(() => import('./components/Conteudo'));
const Copyright = lazy(() => import('./components/Copyright'));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <Suspense fallback={ <p>Carregando...</p> }>
                    <Slogan/>
                </Suspense>
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Conteudo/>
                </Suspense> 
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Copyright ano="2021"/>
                </Suspense> 
            </header>  
        </div>      
    );
}

export default App;
