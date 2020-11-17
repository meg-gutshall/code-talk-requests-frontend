# Code Talks Topic Request Platform

This web app is designed to be used within a community of learning developers to create study group topic requests. Each topic request consists of a brief idea (similar to a git commit message) and an optional longer description that elaborates on that idea. Once submitted, the request is then rendered as a card on a dashboard available for other learners in the community to view and upvote. As the topic requests' upvote count increases, it rises in the ranks of popularity and becomes a more likely candidate to be converted into a study session by the community's instructors.

This repository is the companion to [the backend repo][Code Talk Requests Backend]. If you're not familiar with Ruby on Rails, I highly recommend that you go check out that `README` as well for usage and installation instructions.

## Demo

[![Demo video](https://img.youtube.com/vi/z1_PU_QzOJI/0.jpg)](https://youtu.be/z1_PU_QzOJI)

## Web App Installation

If you have all the requisite technologies for the [frontend](#built-with) and [backend][Code Talk Requests Backend -- Built With] already installed, you can follow the directions below. If not, you may want to skip down to the [Technology Installation](#technology-installation) section of each repo and then come back.

**This following includes installation and usage instructions for both frontend and backend repos.**

Fork [this repository][Code Talk Requests Frontend] as well as [the backend repository][Code Talk Requests Backend] from GitHub and clone your forked copies down to your computer. Open two new terminal windows and `cd` into the root of each directory.

- Run `bundle install`
  - `rbenv` automatically know which ruby version because of the `.ruby-version` file
- Create `.env` file --> see other `README`
- Configure Postgres --> see other `README` for approximate steps
- Create database, run migrations, and seed database
- Start rails server
- Run `npm install`
- Run `npm start`
- Navigate to `http://localhost:8080`

### Usage

Like many developers, I have a love of learning and am intrigued by several tech-related topics (in fact, I have a list of topics just waiting until I finish the curriculum for me to start in on). When I resurrect the Code Talks, I'd like to know what kind of sessions and topics the attendees are interested in learning about. I have many plans for this platform in the future, but for right now it has the following capabilities:

1. It opens on a login screen in which you enter your credentials: email and password.
2. You're then redirected to the main page of this SPA which displays your topic requests in one section, followed by all other users' topic requests in the section below. You'll also notice "New Topic Request" and "Log Out" buttons in the navbar.
3. Each topic request is displayed in a card inside either the current user's (your) section at the top or all other users' section at the bottom.
4. Simply select the "New Topic Request" button, complete the "Topic Request Idea" and "Topic Request Description" fields, and click "Create" to see a new topic request card added to your list of requests.
5. Select "Log Out" when finished.

## Built With

- Language: [JavaScript]
- Build Tool: [Webpack] - More specifically, a static module bundler
- Package Management System: [npm]
- Precompiler: [Sass]
- CSS Framework: [Bootstrap 4]
- And don't forget good old HTML5 and CSS3! <3

### Technology Installation

List which technologies the user needs to install the software and how to install these dependencies.

#### <Software Name>

Links to resources and installation instructions. Include code examples. Break instructions down by operating system if necessary.

<!-- ##### For Mac Users -->

<!-- ##### For Windows Users -->

<!-- ##### For Linux Users -->

## The Why

Back in the fall of 2018, one of my Flatiron School classmates, [Sherry Martin], and I started hosting study sessions which we called Code Talks. We asked students to present code that they had worked on, like a project or a lab, or we would help our classmates troubleshoot an issue they were facing. We also invited guests to speak on various tech-related topics and hosted sessions in which we broke into small groups to solve code challenges. The ultimate purpose of these talks was to help ourselves and our classmates become more comfortable speaking in technical terms about their code—especially since many of us were at the very beginning of our code journeys.

Being the hard worker that Sherry is, she was hired and left the program. I had a lot of help from my other Flatiron classmates but as the curriculum became more difficult, it became too much for me to keep hosting the Code Talks and I took a step back. I always wanted to start them up again and plan on doing so after I graduate from the software engineering program so I thought this would be an appropriate topic for my project! :D

## Contributing

Issues and pull requests are welcome at [this repository][Code Talk Requests Frontend]. This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration. Users are expected to adhere to the [Contributor Covenant code of conduct] and those that do not will be reported and blocked. I got no time for that nonsense.

## Authors

**[Meg Gutshall]**

## Acknowledgments

- A **HUGE** thank you goes out to [David Liang] who helped me debug a very mysterious JavaScript error
- Another mention for [Sushi Chanrai] for writing an excellent blog post titled ["Self-referential Class Variables in OOJS Applications"], which I used in my DOMElements class

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[Code Talk Requests Frontend]: https://github.com/meg-gutshall/code-talk-requests-frontend
[Code Talk Requests Backend]: https://github.com/meg-gutshall/code-talk-requests-backend
[Code Talk Requests Backend -- Built With]: https://github.com/meg-gutshall/code-talk-requests-backend#built-with

[JavaScript]: https://javascript.info/
[Webpack]: https://webpack.js.org/
[npm]: https://www.npmjs.com/
[Bootstrap 4]: https://getbootstrap.com/
[Font Awesome]: https://fontawesome.com/
[Sass]: https://sass-lang.com/

[Contributor Covenant code of conduct]: https://www.contributor-covenant.org/version/2/0/code_of_conduct/ "Contributor Covenant code of conduct version 2.0"
["Self-referential Class Variables in OOJS Applications"]: https://schanrai.github.io/self-referential_class_variables_in_oojs_applications "Self-referential Class Variables in OOJS Applications"

[Meg Gutshall]: https://meghangutshall.com/ "Meg Gutshall's website"
[Sherry Martin]: https://www.linkedin.com/in/fullstackdevelopercville/ "Sherry Martin's LinkedIn profile"
[David Liang]: https://github.com/JizongL "David Liang's GitHub profile"
[Sushi Chanrai]: https://github.com/schanrai "Sushi Chanrai's GitHub profile"
