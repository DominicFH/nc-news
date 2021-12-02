# NC-News

https://dominic-news-app.netlify.app/

This project builds the frontend for a news website consisting of a
collection of articles which can be divided into different topics.

Each article can be up or downvoted and also has its own comments as well as a new
comment form

The above link will take you to the hosted version of this website to see
a user's perspective.

This web app has been built with the backend which can be
found at the following page:

https://github.com/DominicFH/dominic-news-project

## Run Locally

First you will need to clone the project into your chosen folder

```bash
  git clone https://github.com/DominicFH/nc-news
```

Go to the project directory

```bash
  cd nc-news
```

Install dependencies

```bash
  npm install
```

Run the app in development mode

```bash
  npm start
```

## Minimum Requirements

To run this project you will require the following minimum versions:

Node.js: `14.17.6`

## Future Additions

Due to the backend not being fully finalised, there are some
features which I will still be looking to implement in the future
as well as some refinements:

- Design

  Refine CSS for buttons and overall design

- User Feature

  A page where a new user can be created.

  Sign in as a user

  Amending the new comment form to account for a user
  being logged in as opposed to entering a name

- Comments

  Add functionality for comments to be up or downvoted

- Articles

  Add a form to create a new article which will require a
  user to be logged in

  Add functionality for an article to be deleted

- Topics

  Add a form to add a new topic
