# Restaurant Reviewer

An application for reviewing restaurants with a focus on
accessibility. Built for Udacity's Senior Web Developer Nanodegree.


## Features

This is a
[Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app)
and comes with many of the things you would expect to see from a PWA.

Here are some of the features in this app:

- managed focus inputs and tab order for keyboard only users (accessibility)
- WAI-ARIA and semantic attributes for DOM elements (accessibility)
- proper color formatting for visual impairment (accessibility)
- landmark HTML tags for screen readers (accessibility)
- and all the other PWA features like service workers, offline use,
  responsive design, etc.


## Try It Out

The live version is [hosted here](https://greenyouse.github.io/restaurant-reviewer).

To run the app locally, first make sure you have
[polymer-cli](https://github.com/Polymer/polymer-cli):
```sh
npm install -g polymer-cli
```

Then clone and build the app:
```sh
git clone https://github.com/greenyouse/restaurant-reviewer
cd restaurant-reviewer
polymer build
```

Finally, serve up the app and view it at [localhost:8080](http://localhost:8080):
```sh
cd build/bundled
polymer serve
```
