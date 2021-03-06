import React from 'react';

const Copyright = function (props) {
    return (
        <a
          className="App-link"
          href="https://github.com/AnaTertu"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          &copy; Github Ana Tertu {props.ano}
        </a>
    );
}

export default Copyright;
