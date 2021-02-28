<h1 align="center">
   🛸 <a href="#">Star Wars Characters</a>
</h1>

<h3 align="center">
    A list of all Star Wars characters
</h3>

---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about">About</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#considerations">Considerations</a></li>
    <li><a href="#how-to-start-the-project">How to start the Project</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

---


## About

🛸 Star Wars Characters - is an application for displaying characters from the Star Wars API (https://swapi.dev/). <br />
[React assigment for OutboundHQ](https://gist.github.com/theill/8513e6cfce2e7b04cf7af80c8c6bdd8b)

---

## Features

- [x] List all characters (people) sorted by name;
- [x] Show a spinner while data is being loaded;
- [x] Paginated list of characters;
- [x] Display "name" and actual name of "homeworld" for each character in list;
- [x] Go to a character details screen when tapping a single character;
- [x] Show "name" of character together with an avatar based on "gender", "hair_color", "eye_color" and "skin_color"

---
## Considerations

* <h4>What would you test in the app and how?</h4>
  <p>I would test each component using Jest and React Testing Library to make sure everything works and not breaks with future changes in the code.
  I also could use Cypress to do an integration test, to make sure that every user flow work as expected.
  </p>
* <h4>What feature(s) would you consider adding as next step?</h4>
  <ol>
    <li>Search button to find any character or planet.</li>
    <li>More details about the planet, including the images, population, climate, gravity, diameter, orbital period  and so on.</li>
    <li>Register/Login page for an user to create an account and mark as favorite your planet or character.</li>
    <li>A live chat to fans of Star Wars interact to each other and talk about the movies, favorite characters and planets.</li>
  </ol>
* <h4>Why did you choose to use React-Query?</h4>
  <p>To handle the API calls. This library gives to the app a cache control that optimizes and avoid excessive/unnecessary API calls.
  It's super simple and familiar, based on React-Hooks, where you can avoid writing a lot of code and implementing a lot of complex logics. You can use it with GraphQL or REST APIs.</p>
  <p>
  The application doesn't have a lot of loading states between pages, because after you fetched some data it would be in cache, so if the user come back to a page that was already been loaded, there is no loading screen.
  Also it improves the User Experience, that is the main focus to use it.
  </p>
* <h4>How did you handle the Character Avatars?</h4>
  <p>I used the "avataaars" package, which creates an SVG image with the parameters you need.
  Some of the parameters requested in the challenge, such as "gender" and "eye color", were not available for use on the packaging.</p>
  <p>So, what did I do to deal with this?
  I put a long hair for the female gender, a short hair for the male and no hair for robots or no genders.
  For eye colors, I used React's "useRef" to interact with the "DOM" elements, I selected the circle in the svg that rendered the avatar's eyes and managed to change the eye color.
  </p>

---

## How to start the project

### - Pre-requisites:

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)


### Running the web application (React)

```bash

# Clone this repository
$ git clone https://github.com/henriquealbert/outboundhq-star-wars-react.git

# Access the project folder in your terminal
$ cd outboundhq-star-wars-react

# Install the dependencies
$ npm install
# or with yarn
$ yarn install

# Run the application in development mode
$ npm run start
# or with yarn
$ yarn start

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Technologies

The following tools were used in the construction of the project:

-   **[React.js](https://github.com/facebook/create-react-app)**
-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React-Query](https://github.com/tannerlinsley/react-query)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Avataaars](https://github.com/fangpenlin/avataaars)**

> See the file  [package.json](https://github.com/henriquealbert/outboundhq-star-wars-react/blob/main/package.json)


---

## Author

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/59376543?s=460&u=137df36a904881072eb6480658fbaa70c8971b7c&v=4" width="100px;" alt="Henrique Albert Schmaiske"/>
 <br />
 <sub><b>Henrique Albert Schmaiske</b></sub>
 <br />
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@hschmaiske-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/hschmaiske)](https://twitter.com/tgmarinho) [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-albert-schmaiske/)](https://www.linkedin.com/in/henrique-albert-schmaiske/)
[![Gmail Badge](https://img.shields.io/badge/-ishenriquealbert@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ishenriquealbert@gmail.com)](mailto:ishenriquealbert@gmail.com)

---

## 📝 License

This project is under the license [MIT](./LICENSE).

Made with love by Henrique Albert Schmaiske 👋🏻 [Get in Touch!](https://www.linkedin.com/in/henrique-albert-schmaiske/)

