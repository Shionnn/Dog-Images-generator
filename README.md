# ID_S10204765_Chow_Keng_Shion_ASSG2_Website
## Assignment 2
### The Dog Generator
Have you ever wanted to get a pet dog? or are you feeling down and want to look at pictures of dogs to cheer you up? because I do and that is why i decided to make a website to view pictures of dogs by their breeds. The website fetches pictures of dogs from the dog api according to what the user input is.

## Design Process
This website is intended for everyone who wants to look at cute dogs. The user can look at different dog breeds and decide what breed of dog they want as a pet. 
As a user i would already have an idea of what dog breeds i am looking for hence i will use this website to view pictures of the respective dog breeds. The dog pictures are styled to look like polaroids so as to make the dog pictures look cuter.

## Features
The website uses a Dog API to retrieve images of dogs searched by the user.
The search bar has a auto-complete function so if the user forgets how to spell a certain dog breed he/she is still able to get the photots
There's a iframe of wikipedia at the end of the page so as to provide more information on the dog breed.
## Existing Features
Feature 1 - Auto-complete searh form helps user to search dog breeds easier when they enter a alphabet into the search bar.
There is error checking and will alert the user when a wrong input or a dog breed that is not in the API is entered into the search bar
There are currently 3 pages to the website but they are on one index file, this is acheived by hiding and unhiding the html code. More pages can be added in the future.
There are numbers that can be clicked to change the page of the website. In the future i would like to add a next or previous button to change the between the pages
The screen will auto scroll up whenever the page changes

## Features Left to Implement
I wish to add more information for the dogs because all the images in the API are submitted by real people. The creator of the API says he is still working on implement data such as height/weight/name into the API hence until then i wont be able add more imformatrion on the dogs. Once the APi is fully complete i would like to make it so that whenever the user of my website clicks on a photo it will show specific information on the specific dog.

## Javascipt 
The project uses javascript to fetch the data from the dog API. The javascript also helps with hiding/unhiding the pages and auto-complete function.
## Testing
Search Bar:
Go to top of page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid dog breed and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.

The website is responsive, on a mobile screen everything is resized smaller and aliigned properly

### Known Issues
The wikipedia iframe does not work 100% of the time if i were to input Havanese that referes to the Havenese dog breed the wikipedia will search for 'Havama' instead of the dog



## Credits
Dog paw icon - https://www.hiclipart.com/free-transparent-background-png-clipart-mckox/download
Background Image - https://wallpapersafari.com/w/znCgtm
Favicon - https://stackoverflow.com/questions/11488960/how-do-i-put-my-websites-logo-to-be-the-icon-image-in-browser-tabs
Multi-page on single html - https://stackoverflow.com/questions/19289105/multiple-pages-in-one-html-page
Auto-Scrolling - https://stackoverflow.com/questions/3163615/how-to-scroll-html-page-to-given-anchor
Auto-complete function - https://www.w3schools.com/howto/howto_js_autocomplete.asp
Styling on website such as search bar - https://getbootstrap.com/

## Demo video
https://youtu.be/x_ZUa2_0HDM