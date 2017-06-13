# message-board
#### Web app, 02.06.2017
#### By Anna Horodetska

Chérie is an application which allows to ask questions and post answers.

## Planning
1. Configuration/dependencies
  * Ember
  * Bootstrap

2. Specs
* Questions will include the content of the question itself, an author, date posted.
* Answers will include the content of the answer and the author, date.
* The website will include a header and/or navbar that appears on all pages.
* All questions will be on the homepage, displaying only the question and the name of the author, date.
* Users will be able to click a question,and will be routed to another page containing additional information and question details.
* Users will be able to add and edit questions.
* Users will be able to add answers to a question. Answers will be added and viewed on the same page as the question they respond to.
* Users will be able to edit and delete answers.


3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Question/html page for displaying specific question.
  * New-question component to add new question.
  * Edit-question component to edit and delete question
  * New-answer component to add new answer.
  * Edit-answer component to edit and delte answer.
  * About/html page for displaying info about application.

4. UX/UI
  * Include and modify Bootstrap v4.0.0-alpha.6
  * Add custom style

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
