class DOMElements {
  constructor() {
    DOMElements.newElement = undefined;
  }

  static get navMenu() { return document.getElementById('navbarToggler') }
  static get mainBody() { return document.getElementById('main-container') }
  static get footerBody() { return document.getElementById('footer-body') }


  // ---------> Begin login elements

  static createLoginFormContainer() {
    this.mainBody.innerHTML = `<div class="row"><div class="col" id="login-form-container"></div></div>`;
  }

  static get loginFormContainer() {
    this.createLoginFormContainer();
    return document.getElementById('login-form-container');
  }

  static createLoginForm() {
    const loginForm = 
      `<form class="mt-5" id="login-form">
        <div class="form-row justify-content-center">
          <div class="col-9 text-center mb-2">
            <h1>Welcome to the Code Talk online learning platform!</h1>
          </div>
        </div>
        <div class="form-row justify-content-center">
          <div class="col-9 text-center mb-4">
            <p>Please sign in to continue your learning journey!</p>
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
            <input type="password" class="form-control" name="password" id="user-password" required="required">
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

  // ---------> End login elements


  // ---------> Start topic request elements

  static createUserRow() {
    this.mainBody.innerHTML += `<div class="row row-cols-3 py-5 my-4 bg-primary" id="user-row"></div>`;
  }
  
  static get userRow() {
    this.createUserRow();
    const userRow = document.getElementById('user-row');
    return userRow;
  }
  
  static createUserCol() {
    this.userRow.innerHTML += `<div class="col px-4 mx-4 bg-dark" id="user-col"></div>`;
  }
  
  static get userCol() {
    this.createUserCol();
    const userCol = document.getElementById('user-col');
    return userCol;
  }

  static createAllOtherRow() {
    this.mainBody.innerHTML += `<div class="row row-cols-3 py-5 my-4 bg-primary" id="all-other-row"></div>`;
  }
  
  static get allOtherRow() {
    this.createAllOtherRow();
    const allOtherRow = document.getElementById('all-other-row');
    return allOtherRow;
  }
  
  static createAllOtherCol() {
    this.allOtherRow.innerHTML += `<div class="col px-4 mx-4 bg-secondary" id="all-other-col"></div>`;
  }
  
  static get allOtherCol() {
    this.createAllOtherCol();
    const allOtherCol = document.getElementById('all-other-col');
    return allOtherCol;
  }

  // ---------> End topic request elements

}

export { DOMElements };