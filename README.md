# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

The DOM (or rather Document Object Model) is an api that is used by web browsers and programming languages to represent HTML elements as objects within a node tree. JavaScript utilizes the DOM api to modify html elements within the browser as a means to render new functionality according to user input. 

2. What is an event?

Events are things that happen within a webpage through user or browser interaction. Programmers are able to create functionality with these events through declaring an event listener (.addEventListener), specifying type of event within the command (.addEventListener('click')), and lastly assigning a callback function that you want executed when said event is fired (.addEventListener('click', element => console.log(element))).

Some of the user events that you can use with an event listener are: click, hover, scroll, hover, focus, blur, mouseover, mouseleave, etc.

3. What is an event listener?

An event listener is the dom element method that is used to catch specified user or browser events in order to create new functionality for a webpage. An illustration of an event handler is:
```
const navBarElements = document.querySelectorAll('.navigation-element');

navBarElements.forEach(navBarElement =>navBarElement.addEventListener('click', navBarElement.style.color = 'red'));
```
The following lines of code created an event listener on each of the anchor tabs in the navigation bar. When a user clicks on one of the anchor elements the letter's color will change to red.

4. Why would we convert a NodeList into an Array?

It would be advantageous to convert a NodeList to an Array if you wanted more functionality that an array can provide; namely the methods .map(), .filter(), .reduce(), etc. With that said though, NodeLists do have the .forEach() and this is usually good enough for most tasks (as illustrated by the code above). 

5. What is a component?

A component is a reusable block of code (much like a large function) that you can reuse for multiple parts of a website or application. Thoeretically the component programming paradigm promises faster development for user interfaces and better code readability.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled it. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
