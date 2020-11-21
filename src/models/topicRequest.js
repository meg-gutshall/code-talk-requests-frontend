class TopicRequest {
  constructor(data) {
    this.id = data.id;
    this.idea = data.attributes.idea;
    this.description = data.attributes.description;
    this.upvotes = data.attributes.upvotes;
    this.codepanionId = data.attributes.codepanion_id;
    TopicRequest.all.push(this);
  }

  createTopicRequestCard() {
    return `
      <div class="col my-3">
        <div class="card h-100" data-id=${this.id}>
          <div class="card-body">
            <h3 class="card-title">${this.idea}</h3>
            <p class="card-text">${this.description}</p>
          </div>
          <div class="upvote card-footer clearfix">
            <p class="card-text float-left upvote-count">${this.upvotes} Upvotes</p>
            <button type="submit" class="btn btn-primary float-right upvote-button">+1</button>
          </div>
        </div>
      </div>
    `
  }

  renderTopicRequests(elementId) {
    let row = document.getElementById(elementId);
    let col = this.createTopicRequestCard();
    row.innerHTML += col;
  }

  static findTopicRequest(id) {
    return this.all.find((topicRequest) => topicRequest.id === id)
  }

  static updateTopicRequest(updatedAttr) {
    const topicRequest = this.findTopicRequest(updatedAttr.id);
    topicRequest.idea = updatedAttr.idea;
    topicRequest.description = updatedAttr.description;
    topicRequest.upvotes = updatedAttr.upvotes;
    topicRequest.codepanionId = updatedAttr.codepanion_id;
    return topicRequest;
  }

}

TopicRequest.all = [];

export default TopicRequest;