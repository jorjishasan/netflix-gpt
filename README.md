# NetflixGPT

- Create React App
- Configured TailwindCSS
- Header
- Routing App
- Login Form
- SignUp Form
- Form Validation
- useRef() Hooks
- FireBase Setup
- Deploying our app to production(locally) using firebase
- Create Sign Up user account in Firebase
- Implement Sign In user API
- Created a redux store using redux store with userSlice
- Implemented Sign Out
- Update Profile API

# Features

- Login/Sign Up
  - Sign In / Sign Up form
  - redirect to Browse Page
- Browse

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieList \* Netflix

- Netflix GPT
  - Search Bar
  - Movie Suggestions

Suppose I have three components <Header/>, <Browse/>, <Login/>

I want <Header/> to be stick on each navigation. Navigations are like:

- if path is "/" it will render 'Login' component
- if path is "/Browse" it will render 'Browse' component

Tools i've used here 'react-router-dom', Now configure the routing In top level Component 'App.js'
