class DOMElements {
  constructor() {
    DOMElements.newElement = undefined;
  }
  
  // const MODS = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

  static get navMenu() { return document.getElementById('navbarToggler') }
  static get mainBody() { return document.getElementById('container') }
  static get footerBody() { return document.getElementById('footer-body') }

  static createTopicRequestIndex() {
    this.mainBody.innerHTML += `<div class="row row-cols-1 row-cols-lg-3" id="index"></div>`;
  }

  static get topicIndex() {
    this.createTopicRequestIndex();
    return document.getElementById('index');
  }

}

export { DOMElements };