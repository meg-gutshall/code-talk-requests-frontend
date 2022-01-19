# Code Talks Topic Request Platform

This web app is designed to be used within a community of developers to create study group topic requests. Each topic request consists of a brief idea (similar to a git commit message) and an optional longer description that elaborates on that idea. Once submitted, the request is then rendered as a card on a dashboard available for other developers in the community to view and upvote. As the topic requests' upvote count increases, it rises in the ranks of popularity and becomes a more likely candidate to be converted into a study session.

1. [Demo](#demo)
2. [Web App Installation](#web-app-installation)
    1. [Create a `.env` file](#step-1-create-a-env-file)
    2. [Run `bundle install`](#step-2-run-bundle-install)
    3. [Set up the database](#step-3-set-up-the-database)
    4. [Start up the app](#step-4-start-up-the-app)
3. [Usage](#usage)
4. [Built With](#built-with)
5. [The Story](#the-story)
6. [Contributing](#contributing)
7. [Author](#author)
8. [Acknowledgments](#acknowledgments)
9. [License](#license)

This repository is the companion to [the backend repo][Code Talk Requests Backend]. If you're not familiar with Ruby on Rails, I highly recommend that you go check out that `README` as well for technology installation instructions.

## Demo

[![Demo video](https://img.youtube.com/vi/z1_PU_QzOJI/0.jpg)](https://youtu.be/z1_PU_QzOJI)

## Web App Installation

If you have all the requisite technologies for the [backend][Code Talk Requests Backend -- Built With] already installed, you can follow the directions below. If not, you may want to skip down to the [Technology Prerequisites][Code Talk Requests Backend -- Technology Prerequisites] section of the backend repo and then come back.

**The following includes installation and usage instructions for both frontend and backend repos.**

Fork [this repository][Code Talk Requests Frontend] as well as [the backend repository][Code Talk Requests Backend] from GitHub and clone your forked copies down to your computer. Open two new terminal windows and `cd` into the root of each directory.

### Step 1: Create a `.env` file

From your backend's terminal type `touch .env` and input the following text into the newly created file:

```bash
POSTGRES_USER=[YOUR_USERNAME]
POSTGRES_PASSWORD=[YOUR_PASSWORD]
POSTGRES_HOST='localhost'
POSTGRES_DB='code-talk-requests-backend'
POSTGRES_TEST_DB='code-talk-requests-backend_test'
```

`[YOUR_USERNAME]` and `[YOUR_PASSWORD]` in the above code block are the credentials you set when you installed PostgreSQL.

### Step 2: Run `bundle install`

Run `bundle install` in your backend's terminal. This command uses Bundler to install the gems listed `Gemfile`.

If you've install `rbenv`, you don't need to worry about Ruby versioning. `rbenv` reads the `.ruby-version` file and automatically sets the local environment to the correct Ruby version.

If you don't have `rbenv` installed, just open the `.ruby-version` file to read which version you need.

### Step 3: Set up the database

Start up the PostgreSQL server and, again from the backend's terminal, type `rails db:setup`. This allows PostgreSQL to create two new databases (development and test) using the `.env` file you just created and other coded configurations. Next, type `rails db:migrate`. This step runs the table migrations in the app, which gives the database instructions on what kind of data it should look to receive and to which models and attributes the data corresponds.

### Step 4: Start up the app

#### Backend

To start up the Rails server, which is in charge of sending your data to the web, type `rails s` in the backend's terminal.

#### Frontend

Now in the frontend's terminal, type `npm install`. You may see some warnings display in your frontend's terminal requiring package fixes or updates. Follow the instructions given to fix any issues before moving forward.

To render the frontend code, enter `npm start` into the frontend's terminal. You should now be able to open up a new browser window and navigate to [http://localhost:8080/](http://localhost:8080/) to see the Code Talks login page displayed. From there, log in using the seed data provided and have fun!

<details>
  <summary><strong>Seed Data</strong></summary>

  If you'd like to explore Code Talks with data preloaded into the database, type `rails db:seed` in the backend's terminal and log in using the following credentials:

  ```bash
  email_address: "steven@e.com"
  password: 123

  email_address: "ashley@e.com"
  password: 123
  ```

</details>

When you're done, just type `Ctrl + C` in the terminal to stop your Rails session and remember to also shut down your PostgreSQL server. If you'd like to reset the database to delete any objects you've created and start over fresh, type `rails db:reset` into the terminal.

## Usage

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

## The Story

Back in the fall of 2018, one of my Flatiron School classmates, [Sherry Martin], and I started hosting study sessions which we called Code Talks. We asked students to present code that they had worked on, like a project or a lab, or we would help our classmates troubleshoot an issue they were facing. We also invited guests to speak on various tech-related topics and hosted sessions in which we broke into small groups to solve code challenges. The ultimate purpose of these talks was to help ourselves and our classmates become more comfortable speaking in technical terms about their code—especially since many of us were at the very beginning of our code journeys.

Being the hard worker that Sherry is, she was hired and left the program. I had a lot of help from my other Flatiron classmates but as the curriculum became more difficult, it became too much for me to keep hosting the Code Talks and I took a step back. I always wanted to start them up again and plan on doing so after I graduate from the software engineering program so I thought this would be an appropriate topic for my project! :D

## Contributing

Issues and pull requests are welcome at [this repository][Code Talk Requests Frontend]. This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration. Users are expected to adhere to the [Contributor Covenant code of conduct] and those that do not will be reported and blocked. I got no time for that nonsense.

## Author

**[Meg Gutshall]**

Connect with me on... [GitHub], [LinkedIn], [Twitter], and [DEV]!

## Acknowledgments

- A **HUGE** thank you goes out to [David Liang] who helped me debug a very mysterious JavaScript error
- Another mention for [Sushi Chanrai] for writing an excellent blog post titled ["Self-referential Class Variables in OOJS Applications"], which I used in my `DOMElements` class

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[Code Talk Requests Frontend]: https://github.com/meg-gutshall/code-talk-requests-frontend
[Code Talk Requests Backend]: https://github.com/meg-gutshall/code-talk-requests-backend
[Code Talk Requests Backend -- Built With]: https://github.com/meg-gutshall/code-talk-requests-backend#built-with
[Code Talk Requests Backend -- Technology Prerequisites]: https://github.com/meg-gutshall/code-talk-requests-backend#technology-prerequisites

[JavaScript]: https://javascript.info/
[Webpack]: https://webpack.js.org/
[npm]: https://www.npmjs.com/
[Bootstrap 4]: https://getbootstrap.com/
[Font Awesome]: https://fontawesome.com/
[Sass]: https://sass-lang.com/

[Contributor Covenant code of conduct]: https://www.contributor-covenant.org/version/2/0/code_of_conduct/ "Contributor Covenant code of conduct version 2.0"
["Self-referential Class Variables in OOJS Applications"]: https://schanrai.github.io/self-referential_class_variables_in_oojs_applications "Self-referential Class Variables in OOJS Applications"

[Meg Gutshall]: https://meghangutshall.com/ "Meg Gutshall's website"
[GitHub]: https://github.com/meg-gutshall "Meg Gutshall's GitHub profile"
[LinkedIn]: https://www.linkedin.com/in/meghan-gutshall/ "Meg Gutshall's LinkedIn profile"
[Twitter]: https://twitter.com/meg_gutshall "Meg Gutshall's Twitter profile"
[DEV]: https://dev.to/meg_gutshall "Meg Gutshall's DEV profile"
[Sherry Martin]: https://www.linkedin.com/in/fullstackdevelopercville/ "Sherry Martin's LinkedIn profile"
[David Liang]: https://github.com/JizongL "David Liang's GitHub profile"
[Sushi Chanrai]: https://github.com/schanrai "Sushi Chanrai's GitHub profile"
