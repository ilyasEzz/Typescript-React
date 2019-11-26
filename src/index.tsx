import * as React from  'react';
import * as ReactDOM from  'react-dom';
import Header from './components/Header';

ReactDOM.render(
    <div className="container">
        <Header text="Bitch "/>
        <Header text="Front end Master"/>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci quod repellat quam non mollitia reprehenderit aut facilis delectus unde!</p>
        <a href="#">Click</a>

    </div>,
    document.querySelector("#root")
);