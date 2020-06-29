const main = document.getElementById('main');

class DOMElement {
  constructor(that) {
    this.that = that;
  }

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

export { DOMElement };