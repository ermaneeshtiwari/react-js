// const heading = document.createElement('h1');
// heading.innerHTML = "Hello Word form javascript";
// const root = document.getElementById('root');
// root.appendChild(heading);

// How to add h1 in react 

// const heading = React.createElement('h1',{id:"heading", className:"heading"},'Hello I am here on React');
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// How to add nested div in react 

{/* <div id="parent">
    <div id="child 1">
        <h1>This 1 child h1</h1>
        <h2>This 1 child h2</h2>
    </div>
    <div id="child 2">
        <h1>This 2 child h1</h1>
        <h2>This 2 child h2</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement('div', {id:"parent"} ,[
    React.createElement('div', {id:"child1"}, [
        React.createElement('h1', {}, 'This 1 child h1'), 
        React.createElement('h2', {}, 'This 1 child h2')
    ]),
    React.createElement('div', {id:"child2"}, [
        React.createElement('h1', {}, 'This 2 child h1'),
        React.createElement('h2', {}, 'This 2 child h2')
    ])
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);