# Article Evaluator using Natural Language Processing

## Project Details

This is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. Using MeaningCloud Sentiment Analysis API, a simple web interface was built to interact with their NLP system. This tool gives us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express are used for the webserver and routing, and webpack is the build tool used. Using webpack, the app is set up to have development and production environments, each with their own set of tools and commands.

Jest to test the route and other JavaScript functions of the application.

## Built with:

- HTML
- SASS
- JavaScript
- Node Js
- Webpack
- Service workers
- MeaningCloud Sentiment Analysis API

## Getting started
Fork this repo and clone to your local machine.

`cd` into your new folder and run:
- `npm install`

## Setting up the API

### Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. 

### Environment Variables

- Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow you to use environment variables set in a new file.
- Create a new ```.env``` file in the root of the project.
- Fill the .env file with your API keys like this:
```
API_KEY=**************************
```

### Running the project
Run the project using `npm start build-dev` for development mode and `npm run build-prod` for the production mode.
