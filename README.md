### Capstone Front-End README
---

App Screenshot:
![Alt text](/assets/styles/images/screenshot_app.png?raw=true "App Screenshot")
---

### Technologies Used:
- HTML5
- CSS3
- JavaScript
- Ruby
- Rails
- JQuery
- Bootstrap
- Heroku
- SQL / PSQL

---

### General Approach
This application was built over a one-week period. I started with brainstorming and writing user stories, moved on to building out wireframes for different app features, and planned out daily approach given the seven-day time constraint. I then built out ERD models and began building out Rails back-end. I used curl requests to test back-end CRUD functionality on both resources -- users and products -- before moving on to front-end feature implementation. Once all back-end functionality was complete I began with front-end authentication, then built CRUD buttons for products resources. Once this was functioning on front-end I tweaked color scheme and overall UI.

---
### Installation Instructions
Front-End Dependencies: npm install
Back-End Dependencies: bundle install

---
### User Stories
As a user, I want to be able to see pictures of project examples.
As a user, I want to be able to see pictures of current projects.
As a user, I want to be able to contact the owner (via e-mail / phone).
As an admin, I want to be able to add a new project to the list of work.
As an admin, I want to eb able to update a project in the database.
As an admin, I want to be able to delete a project from the database.
As an admin, I want to be able to edit the bio on the site.
As an admin, I want to be able to edit the photo gallery on landing page.

---
### ERD
[DalyRestoration ERD](https://editor.ponyorm.com/user/jdaly04/DalyRestoration)

---
### Wireframes
[Front-End Wireframe](http://i.imgur.com/zKT2SuA.jpg)

---
### Unsolved Problems
Future feature implementation would be to render photos in view-all modal rather than url to images.
Another future feature implementation is for admin user to be able to edit bio and photo gallery. This would mean adding another resource on back-end for "page layout".
