# Simplified Hacker News App

The aim of this project is to build an app searching hacker stories through [HN Search API](https://hn.algolia.com/api).

This project is deployed [here](https://www.dennisxiao.com/).

## Functionality
This is a web application that contains the following main features:
- Users can search Hacker News stories by keywords
- Users can navigate search results via pagination
- Users can use hot searches feature to quickly perform a search

## Technology
- Code: `React (16.7.0), Redux (4.0.1), date-fns, axios`
- Styling: `styled-components`
- Linting: `Eslint`
- Testing: `Jest`
- Build: `Create-React-App (Webpack)`
- Deployment: `Heroku CLI`

## Development
This project is using `yarn` for dependency management.  Make sure `yarn` is installed on your machine.

- `yarn install` 

Install project dependencies.

- `yarn start`

Run the app in development mode on `http://localhost:3000/`.

- `yarn lint`

Run linting on the project using ESlint.

- `yarn test`

Launch test runner and run all the tests.

- `yarn build`

Build the app for production.

## APIs
This project is based on HN Search public API available at https://hn.algolia.com/api. This API is a completely open API. No authentication is required to query and retrieve data.

A mock API is also used to demonstrate hot searches feature. The API is situated in the `public/mockAPI` folder in the project.

## Assumptions
I have assumed that all data provided by HN Search API is sanitised. As the app relies on data provided by the above-mentioned API to achieve search result highlighting.

## Considerations
I deliberately remove the search button from the app, instead, I use instant search feature to provide a smoother experience. The API call is debounced in order to reduce burden on the backend.

The API would come back with no search result for certain keywords, which need to be handled properly. 

Some website URLs coming back from API might be extremely long, which would cause a UI/UX problem without tidying up first. For now, a simple slice rule is applied for long URL.

## Future Improvement
- Sorting by all the criteria (type, order, date range) could be provided

- Stronger typing could be provided by using Flow/Typescript. Currently `PropTypes` is used due to time limitation.

- Display comment page when users click on the comment tag associated with the article.

- Search history feature could be provided.

- Routing could be handled better (like 404 page). There is no safeguard on routing at the moment.

- Error occurred during data fetching could be handled more elegantly. Currently the app only provides limited error handling (showing a simple error message)

- Mobile UI design could be improved. Currently some features are not allowed on mobile view due to time limitation on designing the app.
