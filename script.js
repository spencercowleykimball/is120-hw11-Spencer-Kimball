// Set a container equal to the div container for the new DBZ Cards
let dbz_container = document.querySelector("#DBZ_card_container")

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
    // console.log(data);
}

// Iterates through the api calls list to append the created div cards
// to the div container
async function get_api_data(api_calls_list) {
    for(let api_call of api_calls_list) {
        element = document.createElement("div");

        // console.log(api_call);
        curr_dbz_character = await request_api_data(api_call);
        // console.log(curr_dbz_character);
        
        dbz_name_header = document.createElement("h2");
        dbz_stats = document.createElement("h3");

        // Set some basic css styling via js code
        element.style.backgroundColor = "rgb(173, 172, 172)";
        element.style.borderRadius = "12px";
        element.style.width = "260px";
        element.style.height = "400px";
        element.style.fontSize = "20px";
        // element.style.marginTop = "10px";
        element.style.margin = "10px";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.padding = "10px";
        element.style.fontFamily = "mulish";
        element.style.display = "flex";
        element.style.flexDirection = "column";

        // Changing the header to have a font paired style
        dbz_name_header.style.fontFamily = "Ovo";
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



        // Append the updated card to the container
        dbz_container.appendChild(element);

    }
}


//// Call the API to request the json data
// goku_data = request_api_data(goku_api);
// vegeta_data = request_api_data(vegeta_api);
// piccolo_data = request_api_data(piccolo_api);
// jiren_data = request_api_data(jiren_api);

populate_dbz_cards.addEventListener("click", function() {
    get_api_data(api_calls_list);
});

