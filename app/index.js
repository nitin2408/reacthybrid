
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App.js'
import AppSample from './components/AppSample.js'


render(
      (
         <div>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	<AppSample></AppSample>
         	<App></App>
         	
         </div>
      ),
      document.getElementById('app')
);



// class Parent extends React.Component {
//    render() {
//       return <Child quality="eye balls" />;
//    }
// }


// class Child extends React.Component {
//     render() {
//       return <p> I am a true son. I have my father's "{ this.props.quality }" . </p>;
//     }
// }


// class Experiment extends Component {
//   componentWillMount() {
//     console.log("This will mount");
//   }

//   componentDidMount() {
//     console.log("This did mount");
//   }

//   componentWillUnmount() {
//     console.log("This will unmount");
//   }

//   render() {
//     console.log("I am just rendering like a boss");
//     return <div>I got rendered!</div>;
//   }

// }

