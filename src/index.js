import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import _ from 'lodash';
import printMe from './print.js';

const container = document.getElementById('main')

function getComponent() {
  return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {    
    const row = document.createElement('div');
    row.classList.add('row');
  
    const leftEl = document.createElement('div');
    leftEl.classList.add('col-3');
    leftEl.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    const rightEl = document.createElement('div');
    rightEl.classList.add('col-3');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    row.appendChild(leftEl);
    rightEl.appendChild(btn);
    row.appendChild(rightEl);
  
    return row;
  }).catch(error => 'An error occurred while loading the component.');
}

getComponent().then(component => {
  let row = component();
  container.appendChild(row); // Store the element to re-render on print.js changes
})

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    container.removeChild(row);
    row = component();  // Re-render the "component" to update the click handler
    container.appendChild(row);
  })
}

// PROJECT CODE BELOW -- DO NOT DELETE

// const REQS_URL = "http://localhost:3000/api/v1/requests"
// const MODULES = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

// document.addEventListener('DOMContentLoaded', () => {
//   console.log("loaded")
//   fetchRequests()
// });

// function fetchRequests() {
//   fetch(REQS_URL)
//     .then(resp => resp.json())
//     .then(requests => console.log("fetchRequests -> requests", requests))
// }