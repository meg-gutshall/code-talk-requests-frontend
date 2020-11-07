class DOMElements {
  constructor() {
    DOMElements.newElement = undefined;
  }

  static get navMenu() { return document.getElementById('navbar') }
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


  // ---------> Start topic request row elements

  static createUserRow() {
    this.mainBody.innerHTML += `<div class="row row-cols-3 py-5 my-5 px-5" id="user-row"></div>`;
  }
  
  static get userRow() {
    this.createUserRow();
    return document.getElementById('user-row');
  }

  static createAllOtherRow() {
    this.mainBody.innerHTML += `<div class="row row-cols-3 py-5 my-5 px-5" id="all-other-row"></div>`;
  }
  
  static get allOtherRow() {
    this.createAllOtherRow();
    return document.getElementById('all-other-row');
  }

  // ---------> End topic request row elements


  // ---------> Start new topic request button

  static createModalButton() {
    this.navMenu.innerHTML += 
      `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#newTopicRequestModal" id="modalButton">New Topic Request</button>`;
  }

  static get modalButton() {
    this.createModalButton();
    return document.getElementById('modalButton');
  }

  // ---------> End new topic request button


  // ---------> Start new topic request modal and form

  static createTopicRequestModal() {
    this.navMenu.innerHTML += `
      <div class="modal fade" id="newTopicRequestModal" tabindex="-1" role="dialog" aria-labelledby="newTopicRequestModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <form id="newTopicRequestForm">
              <div class="modal-header">
                <h5 class="modal-title" id="newTopicRequestModalLabel">Create a New Topic Request</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="newTopicRequestIdea">Topic Request Idea</label>
                  <input type="text" class="form-control" id="newTopicRequestIdea" required>
                </div>
                <div class="form-group">
                  <label for="newTopicRequestDescription">Topic Request Description</label>
                  <textarea class="form-control" id="newTopicRequestDescription" rows="7"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" id="createNewTopicRequest">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `
  }

  static get topicRequestModal() {
    this.createTopicRequestModal();
    return document.getElementById('newTopicRequestModal');
  }

  // ---------> End new topic request modal and form

}

export default DOMElements;