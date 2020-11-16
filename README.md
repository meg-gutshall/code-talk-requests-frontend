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

## Table of Contents

>Depending on how long the `README` is, add in a ToC or even abstract some sections away to different markdown files (i.e. `CONTRIBUTING.md`, `USAGE.md`, etc.).

## Screenshots/Demo

>Include logo, demo, screenshot etc.

## Built With

>List of tech languages, frameworks/libraries, and tools used

- [Language](link to language documentation)
- [Framework](link to framework documentation)
- [Database](link to database documentation)

## Features

>What makes your project stand out? What pain points does it solve for the prospective user? Compare it to competitor apps/tools to show how it is different/better.

## Example Code

>Show what your code does as concisely as possible. Users should be able to figure out **how** your project solves their problem by looking at the example.
>Also include the example code as a file in your repo (named `example.js` or in an `example` directory) so that users can run the code if they clone down the repository.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

>List which technologies the user needs to install the software and how to install these dependencies.

#### <Software Name>

>Links to resources and installation instructions. Include code examples. Break instructions down by operating system if necessary.

<!-- ##### For Mac Users -->

<!-- ##### For Windows Users -->

<!-- ##### For Linux Users -->

### Installation

>This section tells the user how to get a local environment running. Be sure to include specific step-by-step instructions for the installation process to accommodate coders of all levels.
>This section will vary greatly depending on the type of code the repository contains. For example, a Node package is usually installed by typing `npm install <package-name>` in the terminal, whereas other projects you may have to fork and clone down the repository. In both cases the user needs to have the requisite technology installed to run to code. Even with a Docker image, the user still needs to be able to run Docker on their machine.
>Keep this in mind when writing out the "Prerequisites" and "Installation" sections.

## API Reference/Documentation

>Depending on the size of the project, if it is small and simple enough the reference docs can be added to the `README`. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

>Explain how to run the automated tests for this system.

### End to End Tests

>Explain what these tests test and why. Include code examples.

### Coding Style Tests

>Explain what these tests test and why. Include code examples.

## Deployment

>Add additional notes about how to deploy this on a live system.

## Usage

>End with an example of getting some seed data out of the system or using it for a demo. Add screenshots, video links, and/or GIFs in this section to make your usage instructions as clear as possible to the user.

## Contributing

>Add more detailed instructions for open-source projects. It's a good idea to include a code of conduct as well as resource links as to where absolute beginners can go to learn how to contribute to open source. [Here's a great place to start.][Open Source Guides]
>I personally like the Contributor Covenant and use the below statement as my default. I intend to expand on it once I create an open-source project truly worthy of others' contributions.

Issues and pull requests are welcome at [<!-- repo title -->](<!-- link to repo -->). This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration. Users are expected to adhere to the [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct) and those that do not will be reported and blocked. I got no time for that nonsense.

## Authors

>Include your name and any links to your social media, contact info, or websites that you'd like. Don't forget to s/o your contributors here too!

**[Meg Gutshall](https://github.com/meg-gutshall/)**

See also the list of [contributors](#contributors) who participated in this project.

## Contributors

>Add a list of contributors here. You may want to feature some who have really stood out.

## Acknowledgments

>- Hat tip to anyone whose code was used
>- Inspiration
>- Anything else that seems useful

## License

>Include your license here. This is an absolute **must** as some users require that all services they include in their project have a license that matches their own. The MIT License is GitHub's recommendation and probably the most common one you'll see in repos, but there are [other options available][Choose an Open Source License]—copy*left*, anybody?—and that's not even an exhaustive list, just the most popular licenses on GitHub.

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Template Resources

### Articles About Writing READMEs

- [A Beginner's Guide to Writing a Kickass README][A Beginner's Guide to Writing a Kickass README]: A short and sweet summary with many examples at the end.
- [Art of README][Art of README]: An informational repo on the what and why behind `README`s.

[A Beginner's Guide to Writing a Kickass README]: https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3
[Art of README]: https://github.com/noffle/art-of-readme

### README Templates that Won the Meg Stamp of Approval

- [Standard README][Standard README]: I like the simplicity with the extensive use of links.
- [Open-Source Template][Open-Source Template]: Figured I'd throw this in here in case it comes in handy for anyone.
- [Awesome README][Awesome README]: Another Awesome List—`README` Edition.

[Standard README]: https://github.com/richardlitt/standard-readme
[Open-Source Template]: https://github.com/davidbgk/open-source-template/
[Awesome README]: https://github.com/matiassingers/awesome-readme

### Repository Licenses

- [Choose an Open Source License][Choose an Open Source License]: A non-exhaustive list of licenses curated by GitHub.
- [Searching GitHub by License Type][Searching GitHub by License Type]: You can filter repositories based on their license or license family using the `license` qualifier and the exact license keyword
- [The Legal Side of Open Source][The Legal Side of Open Source]: Everything you've ever wondered about the legal side of open source, and a few things you didn't.

[Choose an Open Source License]: https://choosealicense.com/
[Searching GitHub by License Type]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository#searching-github-by-license-type
[The Legal Side of Open Source]: https://opensource.guide/legal/

### Open Source

- [Open Source Guides][Open Source Guides]: Open source software is made by people just like you. Learn how to launch and grow your project.

[Open Source Guides]: https://opensource.guide/
