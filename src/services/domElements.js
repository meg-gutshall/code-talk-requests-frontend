class DOMElements {
  constructor() {
    DOMElements.newElement = undefined;
  }
  
  // const MODS = ["Git & GitHub", "Intro to Ruby", "HTML & CSS", "Procedural Ruby", "Object-Oriented Ruby", "SQL", "ORMs & ActiveRecord", "Rack", "Sinatra", "Rails", "JavaScript", "React", "Redux", "Other"]

  static get navMenu() { return document.getElementById('navbarToggler') }
  static get mainBody() { return document.getElementById('main-container') }
  static get footerBody() { return document.getElementById('footer-body') }

  static createLoginFormContainer() {
    this.mainBody.innerHTML += `<div class="row"><div class="col" id="login-form-container"></div></div>`;
  }

  static get loginFormContainer() {
    this.createLoginFormContainer();
    return document.getElementById('login-form-container');
  }

  static createLoginForm() {
    const loginForm = 
      `<form class="mt-5">
        <div class="form-row justify-content-center">
          <div class="col-9 text-center mb-2">
            <h1>Welcome back to Flatiron School's online learning platform!</h1>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-9 text-center mb-4">
            <p>Please sign into your account to continue learning.</p>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-6">
            <label for="user-email">Email Address</label>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="form-group col-6 mb-2">
            <input type="email" class="form-control" name="email" id="user-email" required="required" aria-describedby="emailHelp">
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-4 order-last">
            <small id="emailHelp" class="form-text text-muted text-right">Forgot password?</small>
          </div>
          <div class="col-2 order first">
            <label for="user-password">Password</label>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-6">
            <input type="password" class="form-control" name="user-password" id="password" required="required">
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-6">
            <button type="submit" class="btn btn-primary btn-block mt-5" name="commit">Sign in</button>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-6">
            <a class="btn btn-outline-primary btn-block mt-2" role="button" href="https://github.com/">Sign in with Github</a>
          </div>
        </div>
      </form>`;
    this.loginFormContainer.innerHTML = loginForm;
  }

  static get loginForm() {
    return this.createLoginForm();
  }

  static createTopicRequestIndexContainer() {
    this.mainBody.innerHTML += `<div class="row row-cols-1 row-cols-lg-3" id="topic-request-index"></div>`;
  }
  
  static get topicRequestIndexContainer() {
    this.createTopicRequestIndexContainer();
    return document.getElementById('topic-request-index');
  }

}

export { DOMElements };