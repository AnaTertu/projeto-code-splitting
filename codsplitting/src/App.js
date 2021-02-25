import React from 'react';
import {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

//import Slogan from './components/Slogan';
//import Rodape from './components/Rodape';

const Slogan = React.lazy(() => import('./components/Slogan'));
const Rodape = React.lazy(() => import('./components/Rodape'));

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <Suspense fallback={ <p>Carregando...</p> }>
                    <Slogan/>
                </Suspense>
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Rodape/>
                </Suspense> 
            </header>  
        </div>      
    );
}

export default App;
