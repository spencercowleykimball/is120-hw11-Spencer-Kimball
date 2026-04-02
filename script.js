// Set a container equal to the div container for the new DBZ Cards
let dbz_container = document.querySelector("#DBZ_card_container")

// Set variables for the favorite button and the heart image
let fav_button;
let heart_img;

// Define variables to be used in function for loop so we don't have
// to define the variable every iteration of the loop
let curr_dbz_character;
let element;
let curr_image;
let dbz_name_header;
let dbz_stats;

//// Set the variables equal to the api request string for each character
let goku_api = "https://dragonball-api.com/api/characters/1";
let vegeta_api = "https://dragonball-api.com/api/characters/2"
let piccolo_api = "https://dragonball-api.com/api/characters/3"
let jiren_api = "https://dragonball-api.com/api/characters/38"

api_calls_list = [goku_api, vegeta_api, piccolo_api, jiren_api]

// Get API Data
async function request_api_data(api_fetch) {
    let response = await fetch(api_fetch);
    let data = await response.json();
    return data;
}

// Declare favorites list
let fav_list = [];

// Add to favorites function
function add_to_favs(new_name_to_add) {
    fav_list = fav_list.push(new_name_to_add);
    localStorage.setItem(curr_dbz_character.id, curr_dbz_character.name);
    // console.log(fav_list);
    console.log(localStorage);
}

// Store all of the buttons
let allButtons = [];
let allCards = [];

// Iterates through the api calls list to append the created div cards
// to the div container
async function get_api_data(api_calls_list) {
    for(let api_call of api_calls_list) {
        // Create a card element for each of the characters received
        // from the API
        element = document.createElement("div");

        // Wait for the request to complete to get the information
        // from the API
        curr_dbz_character = await request_api_data(api_call);
        
        // Create elements to put the information into the element
        dbz_name_header = document.createElement("h2");
        dbz_stats = document.createElement("h3");

        // Set some basic css styling via js code
        element.style.backgroundColor = "rgb(173, 172, 172)";
        element.style.borderRadius = "12px";
        element.style.fontSize = "20px";
        element.style.margin = "10px";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.padding = "10px";
        element.style.fontFamily = "mulish";
        element.style.display = "flex";
        element.style.flexDirection = "column";

        // Changing the header to have a font paired style
        dbz_name_header.style.fontFamily = "Ovo";

        // Like Button creation with its image
        fav_button = document.createElement("button");
        heart_img = document.createElement("img");
        heart_img.src = "heart.png";
        heart_img.style.height = "30px";
        heart_img.style.width = "30px";
        
        // Append the Favorite Button to the current card
        fav_button.appendChild(heart_img);

        // Add the current button to a list of all of the favorite buttons
        allButtons.push(fav_button);

        // Add the favorite button to the element card div
        element.appendChild(fav_button);

        // Character Name 
        dbz_name_header.innerText = curr_dbz_character.name + ":";
        
        // Append the heading to the current card
        element.appendChild(dbz_name_header);
        
        // Changing the stats font to have a paired style
        dbz_stats.style.fontFamily = "mulish";
        
        // Giving the stats on the DBZ Character to the DOM
        dbz_stats.innerText =  "ki = " + curr_dbz_character.ki + ", \n" + "maxKi = " + curr_dbz_character.maxKi + "\n"
        element.appendChild(dbz_stats);

        // Setting the curr image variable to an image object
        curr_image = document.createElement("img");
        curr_image.src = curr_dbz_character.image;
        curr_image.style.height = "200px";
        curr_image.style.width = "100px";
        curr_image.style.hover 
        
        // Append the image to the current card
        element.appendChild(curr_image);

        // Add the card to the allCards list for later access
        allCards.push(element);

        // Append the updated card to the container
        dbz_container.appendChild(element);

    }
}

let counter = 0;

//// Call the function with a button click
populate_dbz_cards.addEventListener("click", function() {
    counter += 1;
    if (counter === 1) {
        get_api_data(api_calls_list);
    }
});

// Display what is in local storage right at the beginning
console.log(localStorage);

// Create an event listener to clear the local storage when this button is clicked
clear_storage_button.addEventListener("click", function() {
    localStorage.clear();
    console.log(localStorage);
})


