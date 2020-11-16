# Code Talks Topic Request Platform

This web app is designed to be used within a community of learning developers to create study group topic requests. Each topic request consists of a brief idea (similar to a git commit message) and an optional longer description that elaborates on that idea. Once submitted, the request is then rendered as a card on a dashboard available for other learners in the community to view and upvote. As the topic requests' upvote count increases, it rises in the ranks of popularity and becomes a more likely candidate to be converted into a study session by the community's instructors.

## The Why

Back in the fall of 2018, one of my Flatiron School classmates, [Sherry Martin](https://www.linkedin.com/in/fullstackdevelopercville/), and I started hosting study sessions which we called Code Talks. We asked students to present code that they had worked on, like a project or a lab, or we would help our classmates troubleshoot an issue they were facing. We also invited guests to speak on various tech-related topics and hosted sessions in which we broke into small groups to solve code challenges. The ultimate purpose of these talks was to help ourselves and our classmates become more comfortable speaking in technical terms about their code—especially since many of us were at the very beginning of our code journeys.

Being the hard worker that Sherry is, she was hired and left the program. I had a lot of help from my other Flatiron classmates but as the curriculum became more difficult, it became too much for me to keep hosting the Code Talks and I took a step back. I always wanted to start them up again and plan on doing so after I graduate from the software engineering program so I thought this would be an appropriate topic for my project! :D

Like many developers, I have a love of learning and am intrigued by several tech-related topics (in fact, I have a list of topics just waiting until I finish the curriculum for me to start in on). When I resurrect the Code Talks, I'd like to know what kind of sessions and topics the attendees are interested in learning about. I have many plans for this platform in the future, but for right now it has the following capabilities:

1. It opens on a login screen in which you enter your credentials: email and password.
2. You're then redirected to the main page of this SPA which displays your topic requests in one section, followed by all other users' topic requests in the section below. You'll also notice "New Topic Request" and "Log Out" buttons in the navbar.
3. Each topic request is displayed in a card inside either the current user's (your) section at the top or all other users' section at the bottom.
4. Simply select the "New Topic Request" button, complete the "Topic Request Idea" and "Topic Request Description" fields, and click "Create" to see a new topic request card added to your list of requests.
5. Select "Log Out" when finished.

## Demo

[![Demo video](https://img.youtube.com/vi/xRKItzdbQwk/0.jpg)](https://youtu.be/xRKItzdbQwk)

## Built With

- [JavaScript](https://javascript.info/) - The programming language used
- [Webpack](https://webpack.js.org/) - The static module bundle used for the JavaScript code
- [npm](https://www.npmjs.com/) - The package management system used
- [Bootstrap 4](https://getbootstrap.com/), [FontAwesome](https://fontawesome.com/), and [Sass](https://sass-lang.com/) - The styling tools used
- And don't forget good old HTML5 and CSS3! <3

## Features

What makes your project stand out? What pain points does it solve for the prospective user? Compare it to competitor apps/tools to show how it is different/better.

## Example Code

Show what your code does as concisely as possible. Users should be able to figure out **how** your project solves their problem by looking at the example.
Also include the example code as a file in your repo (named `example.js` or in an `example` directory) so that users can run the code if they clone down the repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

List which technologies the user needs to install the software and how to install these dependencies.

#### <Software Name>

Links to resources and installation instructions. Include code examples. Break instructions down by operating system if necessary.

<!-- ##### For Mac Users -->

<!-- ##### For Windows Users -->

<!-- ##### For Linux Users -->

### Installation

This section tells the user how to get a local environment running. Be sure to include specific step-by-step instructions for the installation process to accommodate coders of all levels.
This section will vary greatly depending on the type of code the repository contains. For example, a Node package is usually installed by typing `npm install <package-name>` in the terminal, whereas other projects you may have to fork and clone down the repository. In both cases the user needs to have the requisite technology installed to run to code. Even with a Docker image, the user still needs to be able to run Docker on their machine.
Keep this in mind when writing out the "Prerequisites" and "Installation" sections.

## Usage

End with an example of getting some seed data out of the system or using it for a demo. Add screenshots, video links, and/or GIFs in this section to make your usage instructions as clear as possible to the user.

## Contributing

Issues and pull requests are welcome at [this repository](https://github.com/meg-gutshall/code-talk-requests-frontend). This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration. Users are expected to adhere to the [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) and those that do not will be reported and blocked. I got no time for that nonsense.

## Authors

**[Meg Gutshall](https://github.com/meg-gutshall/)**

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- Anything else that seems useful

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
