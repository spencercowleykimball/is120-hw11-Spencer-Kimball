// Set a container equal to the div container for the new DBZ Cards and 
// favorite container
let dbz_container = document.querySelector("#DBZ_card_container")
let js_fav_container = document.querySelector("#fav_container");

// Get API Data
async function request_api_data(api_fetch) {
    let response = await fetch(api_fetch);
    let data = await response.json();
    return data;
}

// Store all of the buttons
let allButtons = [];
let allCards = [];

// Iterates through the api calls list to append the created div cards
// to the div container
async function get_api_data() {
    // Only one api call
    let one_api_call = "https://dragonball-api.com/api/characters"
    let all_api_data = await request_api_data(one_api_call);

    for (let curr_dbz_character of all_api_data.items) {
        // Create a card element for each of the characters received
        // from the API
        let element = document.createElement("div");

        // Create elements to put the information into the element
        let dbz_name_header = document.createElement("h2");
        let dbz_stats = document.createElement("h3");

        // Set variables for the favorite button and the heart image
        let fav_button = document.createElement("button");
        let heart_img = document.createElement("img");

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
        heart_img.src = "heart.png";
        heart_img.style.height = "30px";
        heart_img.style.width = "30px";
        
        // Append the Favorite Button to the current card
        fav_button.appendChild(heart_img);

        // Capture the current character info
        let charId = curr_dbz_character.id;


        // Set these names to variables in the function so they can be
        //  stored and be different per for loop iteration
        let charName = curr_dbz_character.name;
        let jsonFull = JSON.stringify(curr_dbz_character);

        // ************************************************
        // Working on the array of favorites, to add a card to favorites
        // and local storage 
        // ************************************************
        fav_button.addEventListener("click", function() {
            // If the DBZ id is in local storage, then remove it
            //   and change the heart img to be empty
            if(localStorage.getItem(charId) !== null) {
                localStorage.removeItem(charId);
                heart_img.src = "heart.png";

                // Append the updated card to the container
                dbz_container.appendChild(element);
                
            } else {
                // If the DBZ id is not in local storage, then add it
                //  and change the heart img to be filled in
                localStorage.setItem(charId,jsonFull);
                heart_img.src = "heart2.png";

                js_fav_container.appendChild(element);
            }
            
            console.log(localStorage);
        })

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
        let curr_image = document.createElement("img");
        curr_image.src = curr_dbz_character.image;
        curr_image.style.height = "200px";
        curr_image.style.width = "100px";
        
        // Append the image to the current card
        element.appendChild(curr_image);


        // Add the card to the allCards list for later access
        allCards.push(element);

        // Append the updated card to the correct container
        // depending on if they are found in local storage or not
        if(localStorage.getItem(charId) !== null) {
            heart_img.src = "heart2.png";
            js_fav_container.appendChild(element);
        } else {
            dbz_container.appendChild(element);
        }

    }
}

// Setting a counter variable
let counter = 0;

//// Call the function with a button click to populate all of the cards
populate_dbz_cards.addEventListener("click", function() {
    counter += 1;
    if (counter === 1) {
        get_api_data();
    }
});


