class DOMElements {
  constructor() {
    DOMElements.newElement = undefined;
  }
  
  // const MODS = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

  static get navMenu() { return document.getElementById('navbarToggler') }
  static get mainBody() { return document.getElementById('container') }
  static get footerBody() { return document.getElementById('footer-body') }

  static createLoginFormContainer() {
    this.mainBody.innerHTML += `<div class="row row-cols-1" id="login-form-container"></div>`;
  }

  static get loginFormContainer() {
    this.createLoginFormContainer();
    return document.getElementById('login-form-container');
  }

  static createLoginForm() {
    const loginForm = `<form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`;
    this.loginFormContainer.innerHTML = loginForm;
  }

  static get loginForm() {
    return this.createLoginForm();
  }

  static createTopicRequestIndex() {
    this.mainBody.innerHTML += `<div class="row row-cols-1 row-cols-lg-3" id="topic-request-index"></div>`;
  }
  
  static get topicRequestIndexContainer() {
    this.createTopicRequestIndexContainer();
    return document.getElementById('topic-request-index');
  }

}

export { DOMElements };