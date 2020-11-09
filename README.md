# Code Talks Topic Request Platform

## Description

### The What

Back in the fall of 2018, one of my Flatiron School classmates, [Sherry Martin](https://www.linkedin.com/in/fullstackdevelopercville/), and I started hosting study sessions which we called Code Talks. We asked students to present code that they had worked on, like a project or a lab, or we would help our classmates troubleshoot an issue they were facing. We also invited guests to speak on various tech-related topics and hosted sessions in which we broke into small groups to solve code challenges. The ultimate purpose of these talks was to help ourselves and our classmates become more comfortable speaking in technical terms about their code—especially since many of us were at the very beginning of our code journeys.

Being the hard worker that Sherry is, she was hired and left the program. I had a lot of help from my other Flatiron classmates but as the curriculum became more difficult, it became too much for me to keep hosting the Code Talks and I took a step back. I always wanted to start them up again and plan on doing so after I graduate from the software engineering program so I thought this would be an appropriate topic for my project! :D

### The Why

Like many developers, I have a love of learning and am intrigued by several tech-related topics (in fact, I have a list of topics just waiting until I finish the curriculum for me to start in on). When I resurrect the Code Talks, I'd like to know what kind of sessions and topics the attendees are interested in learning about. I have many plans for this platform in the future, but for right now it has the following capabilities:

1. It opens on a login screen in which you enter your credentials: email and password.
2. You're then redirected to the main page of this SPA which displays your topic requests in one section, followed by all other users' topic requests in the section below. You'll also notice "New Topic Request" and "Log Out" buttons in the navbar.
3. Each topic request is displayed in a card inside either the current user's (your) section at the top or all other users' section at the bottom.
4. Simply select the "New Topic Request" button, complete the "Topic Request Idea" and "Topic Request Description" fields, and click "Create" to see a new topic request card added to your list of requests.
5. Select "Log Out" when finished.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

<!-- What things you need to install the software and how to install them

#### Software Name

Links to resources and installation instructions

```
Give examples
```

##### For Mac Users

Break instructions down by operating system if necessary

##### For Windows Users

Break instructions down by operating system if necessary

##### For Linux Users

Break instructions down by operating system if necessary -->

#### Ruby

Code Talks uses Ruby version 2.7.0. In my opinion, the best way to install Ruby is by using a Ruby version management system. The two most popular tools for this are [RVM](https://rvm.io/) and [rbenv](https://github.com/rbenv/rbenv). I've used both and have found rbenv to be more well-documented and easier to navigate than RVM but the ultimate choice is yours.

Since I use rbenv, I'm going to walk you through that installation. (_**NOTE:** If you decide to install rbenv and you used to use RVM, you must remove all RVM files or rbenv will **not** work!_)

##### For Mac Users

If you haven't done so already, download **[Homebrew](https://brew.sh/)**. It's an amazing macOS package manager that's built with Ruby. Just paste the following script in a new terminal window:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will run through the installation, and explain the steps the script is taking along the way.

Once Homebrew is installed (or if you already had it installed, you smarty pants!), it's time to install rbenv. Open a new terminal window running `bash` or `zsh` and `cd` into your home path (i.e. `Users/yourname/`). Now type `brew install rbenv` _*Note: This command also installs `ruby-build`, so you'll be ready to install other Ruby versions out of the box._ Once rbenv is done installing, type `rbenv init` to begin the shell integration setup.

##### For Windows and Linux Users

To install rbenv on your system, open up a new window in your terminal and run the `rbenv-installer` script below which can also be found at [this link](https://github.com/rbenv/rbenv-installer#rbenv-installer):

```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash
```

It will either install rbenv on your system or update your pre-existing version of rbenv, located under `~/.rbenv`. Additionally, [ruby-build](https://github.com/rbenv/ruby-build) is also installed if rbenv install is not already available.

##### For All Users

Restart your terminal for the installation changes to take effect. Make sure your setup is correct by running the `rbenv-doctor` script below which can also be found at [this link](https://github.com/rbenv/rbenv-installer#rbenv-installer):

```bash
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

**NOW we install RUBY!**
In your terminal, type `rbenv install 2.7.0` to download the version of Ruby you'll need to run Code Talks.

Once it's done installing, navigate to the Code Talks directory and type `rbenv local 2.7.0` to set your local environment's Ruby version. Then type `rbenv rehash`.

#### PostgreSQL

The database for Code Talks is PostgreSQL version 12.3. [Click this link](https://www.postgresql.org/download/) to visit PostgreSQL's official site and select your operating system in order to download the right package. There's one option available for Windows users. As a Mac user, I originally used Homebrew as my download option, but after trying Postgres.app, I found it to be much more simple and user-friendly. There are plenty of options for other server types, but I have no experience using any of them.

#### Bundler

Code Talks uses [Bundler](https://bundler.io/) to manage the Ruby Gems packaged in the app. Installing Bundler is as simple as opening a new terminal window and typing `gem install bundler` and you're ready to go!

### Installation

<!-- A step by step series of examples that tell you how to get a development env running -->

Fork [this repository](<!-- link to repo -->) from GitHub and clone your forked copy down to your computer. Open a new terminal window and `cd` into the <!-- `repo name` --> root directory.

List any other actions needed to be taken before starting up the server.

<!-- **Steps for a Ruby on Rails app with PostgreSQL**
Create a new file by typing `touch .env` and input the following text into this file:

```
POSTGRES_USER=YOUR_USERNAME
POSTGRES_PASSWORD=YOUR_PASSWORD
POSTGRES_HOST='localhost'
POSTGRES_DB='[repo-name]'
POSTGRES_TEST_DB='[repo-name]_test'
```

Replace `YOUR_USERNAME` with your computer's username—the name used in your terminal's root path (`$PATH`), or what you see when you type `PWD` in your terminal (i.e. `Users/yourname/`)—in single quotes and `YOUR_PASSWORD` with whatever you want it to be, again in single quotes.

Type `bundle install` into the terminal to load all of the Ruby Gems and dependencies into your app. Start up the PostgreSQL server and type `rails db:setup` into the terminal. This allows PostgreSQL to create two new databases (development and test) using the `.env` file you just created in the [App Name] app (in addition to pre-existing configurations). Next, type `rails db:migrate`. This step runs the table migrations in the app, which gives the database instructions on what kind of data it should look to receive and to which models and attributes the data corresponds.

To start up the Rails server, which is in charge of rendering your app on the web, therefore allowing users to interact with it, type `rails s` in the terminal. You should now be able to open up a new browser window and navigate to [http://localhost:3000/](http://localhost:3000/) and see the [App Name] homepage displayed. From there, either log in or sign up and have fun!

When you're done, just type `Ctrl + C` in the terminal to stop your Rails session and remember to also shut down your PostgreSQL server. If you'd like to reset the database to delete any objects you've created and start over fresh, type `rails db:reset` into the terminal. -->

## Usage

<!-- End with an example of getting some data out of the system or using it for a little demo -->

<!-- **If I have a demo video**
I recorded a quick demo video (below) on how to use [App Name].

[![[App Name] demo video](https://img.youtube.com/vi/[link to YouTube video]/0.jpg)](https://youtu.be/[link to YouTube video]) -->

<!-- **Steps for a Ruby on Rails app with PostgreSQL**
I also created a seed file which holds randomized data to use specifically for app development and testing purposes. If you'd like to explore [App Name] with data preloaded into the database, type `rails db:seed` in the terminal and log in using the following credentials:

```
[credentials here]
``` -->

## Tests

<!-- Explain how to run the automated tests for this system -->

### End to End Tests

<!-- Explain what these tests test and why

```
Give an example
``` -->

### Coding Style Tests

<!-- Explain what these tests test and why

```
Give an example
``` -->

## Deployment

<!-- Add additional notes about how to deploy this on a live system -->

## Built With

<!-- * [Ruby](https://www.ruby-lang.org/en/) - The programming language used
* [Rails](https://rubyonrails.org/) and [ActiveRecord](https://apidock.com/rails/ActiveRecord/Base) - The Ruby frameworks used
* [PostgreSQL](https://www.postgresql.org/) - The relational database used
* [Devise](http://devise.plataformatec.com.br/) - The user authentication system
* [Bootstrap 4](https://getbootstrap.com/) and [GoogleFonts](https://fonts.google.com/) - The styling tools used
* And don't forget good old HTML5 and CSS3! <3 -->

## Contributing

Issues and pull requests are welcome at [<!-- link to repo -->](<!-- link to repo -->). This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration. Users are expected to adhere to the [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct) and those that do not will be reported and blocked. I got no time for that nonsense.

## Authors

**[Meg Gutshall](https://github.com/meg-gutshall/)**

<!-- See also the list of [contributors]([link to repo/contributors]) who participated in this project. -->

## Acknowledgments

<!-- * Hat tip to anyone whose code was used
* Inspiration
* Anything else that seems useful -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
