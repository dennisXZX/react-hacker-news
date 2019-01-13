# Simplified Hacker News App

The aim of this project is to build an app searching hacker stories through [HN Search API](https://hn.algolia.com/api).

This project is deployed [here](https://www.dennisxiao.com/).

## Functionality
This is a web application that contains the following main features:
- Users can search Hacker News stories by keyword
- Users can navigate search results via pagination
- Users can use hot searches feature to quickly perform a search

## Technology
- Code: `React, Redux, axios`
- Styling: `styled-components`
- Linting: `Eslint`
- Testing: `Jest`
- Build: `Create-React-App`
- Deployment: `Heroku CLI`

## Development
This project is using `yarn` for dependency management.  Make sure `yarn` is installed on your machine.

- `yarn install` 

Install project dependencies.

- `yarn start`

Run the app in the development mode on `http://localhost:3000/`.

- `yarn lint`

Run the linting on the project using ESlint.

- `yarn test`

Launch test runner and run all the tests.

- `yarn build`

Build the app for production.

## APIs
This project is based on HN Search public API available at https://hn.algolia.com/api. This API is a completely open API. No authentication is required to query and retrieve data.

A mock API is also used to demonstrate hot searches feature. The API is situated in the `public/mockAPI` folder.

## Assumptions
I have assumed that all data provided by HN Search API is sanitised. As the app relies on data provided by the above-mentioned API to achieve search highlighting.

## Considerations
I deliberately remove the search button from the app, instead, I use instant search feature to provide a smoother experience. The API call is debounced in order to reduce burden on the backend.

## Future Improvement
- Sorting by all the criteria (type, order, date range) could be provided

- Stronger typing could be provided by using Flow/Typescript. Currently `PropTypes` is used due to time limitation.

- Display article detail page when users click on any of the news result.

- Search history feature could be provided.

- Routing could be handled better (like 404 page). There is no safeguard on routing at the moment.

- Error occurred during data fetching could be handled more elegantly. Currently the app only provides limited error handling (showing a simple error message)

- Mobile UI design could be improved. Currently some features are not allowed on mobile view due to time limitation on designing the app.

- UI could be definitely improved! (I'm not very satisfied with it to be honest)

## FAQs
- Why some of the features are not shown on mobile (like hot searches)?  
Answer: Although I followed mobile-first design concept, I designed the app as I coded along due to time limitation and open-ended requirements. It's a bit of a struggle for me to come up with a decent mobile and desktop design in such a short time, so some of the features I could not make them right on all devices.
