import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement('div', {id:"parent"} ,[
//     React.createElement('div', {id:"child1"}, [
//         React.createElement('h1', {}, 'This 1 child h1'), 
//         React.createElement('h2', {}, 'This 1 child h2')
//     ]),
//     React.createElement('div', {id:"child2"}, [
//         React.createElement('h1', {}, 'This 2 child h1'),
//         React.createElement('h2', {}, 'This 2 child h2')
//     ])
// ]);
// const parent = (<h1 id='heading'>
//     This is parent
//         </h1>);
const TitleComponent = () => {
    return <h1>This is Title</h1>;
}

const HeadingComponet = () => (<div id="container">
    <TitleComponent />
    <div className="heading">This is Heading compnent</div>
    </div>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponet />);