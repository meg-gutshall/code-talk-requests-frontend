import _ from 'lodash';
import './style.css';
import bizCat from './icon.jpg';
import Books from './books.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = bizCat;

  element.appendChild(myIcon);

  console.log("component -> Books", Books)

  return element;
}

document.body.appendChild(component());

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