## Zip Search API

http://ctp-zip-api.herokuapp.com/

For this project we will be developing two simple applications, (1) the first app allows us to search for City names and details for a given zip code, and (2) the second app allows us to find all of Zip codes associated with a given City name.

Below is a description of the relevant API endpoints for the projects:

### `/zip/:zipcode` - find Cities associated with a zipcode

`http://ctp-zip-api.herokuapp.com/zip/:zipcode`

provide the zipcode in the url and you will receive a JSON response with an array containing an object for each city found. 


http://ctp-zip-api.herokuapp.com/zip/10016

### `/city/:cityname` - find Zip Codes associated with a city name

`http://ctp-zip-api.herokuapp.com/city/:cityname`

`:cityname` must be in all caps

provide the city name in the url and you will receive a JSON response with an array containing a list of all zip codes for that city:

http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD


## Project 1: Zip Code Search app

In this project you will build a simple Zip Code search app. We will need an input field where the user can enter a zip code, like in the following image:

#### [Before Search](https://github.com/CUNYTechPrep/week-03-projects/blob/master/zip-search-1.png)

We will use the user input to search the ctp-zip-api. If the zip code is valid the API will respond with an object for each city. Use that response to display each city in a separate div like in the following image: 

#### [After Search](https://github.com/CUNYTechPrep/week-03-projects/blob/master/zip-search-2.png)

### Getting started

To get started run the following commands

- `create-react-app zip-search`
- `cd city-search`
- `npm start`

At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Now open this folder (`zip-search`) in your text editor. You will see all of the code the create-react-app setup for us. Since this is the stock project we can begin editing the files as we see fit. You can start at `App.js` and you can also edit `public/index.html` (to add Bootstrap for example).
