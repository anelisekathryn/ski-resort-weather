Ski Resort Weather
Pseudocode

- get a working fetch request to weather API
    - deserialize the sequence
    - store the json in a variable
    - test the fetch with inputted latitude and longitude and a     console log (comment out)

- create a drop down menu/button
    - let user choose from a dropdown menu of resorts
    - add that resort to the fetch request by getting latitude and longitude from a set of data - object-ception??

- get button and dropdown selection connected to the fetch request
    - querySelector for dropdown menu input (??)
    - event listener for button
    - create arrays or objects (??) to match up ski resorts to their corresponding latitude and longitude
    - do i need an object for each ski resort to hold all the data (like the movie example??) - object-ception??
    - add image link to the object?
    - fetch the data using the latitude and longitude
    - extract specific weather data needed:
        - temp
        - weather (ie clear sky)
        - snow
        - wind direction (full)
        - wind speed

- display data on page
    - add resort name and location below the dropdown menu (header)
    - create a section of html to hold weather data
    - create a section of html to hold resort stats data
    - create new elements in js to hold data for each
    - add data to that element
    - append element to html container

- styling / additional elements
    - add corresponding image to the page (and logo?)
    - add resort name and location below the dropdown menu (header)
    - style data in two boxes side by side
    - create three external button links below
    - media query for screen size


