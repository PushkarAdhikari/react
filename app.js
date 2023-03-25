//***** Javascript code to generate element and content *****//

// const heading = document.createElement('h1');
// heading.textContent = "Hello World from Javascript!"
// const root = document.getElementById('root');
// root.appendChild(heading) 



//***** React code to generate element and content *****//

// const heading = React.createElement('h1', {}, 'Hello world!!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)

import React from "react";
import  ReactDOM  from "react-dom/client";

// with nested/ multiple child element
const parent = React.createElement(
    'div',
    { id: 'parent' },
    [
        'parent',
        React.createElement(
            'div',
            { id: 'child1', className: 'class-child1' },
            [
                'child1',
                React.createElement('h1', { id: 'child-heading1', className: 'heading1' }, '>> Hello world first child!'),
                React.createElement('h1', { id: 'child-heading2', className: 'heading1' }, 'Hello world second child!')
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2', className: 'class-child2' },
            [
                'child2',
                React.createElement('h1', { id: 'child2-heading1', className: 'heading1' }, 'Hello world first child!'),
                React.createElement('h1', { id: 'child2-heading2', className: 'heading1' }, 'Hello world second child!')
            ]
        )
    ]
)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
