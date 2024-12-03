//import axios from "axios";

function displayPoem(response){
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});
 
}




function generatePoem(event){
    event.preventDefault();

    //build api url
    //make a call to the api 
    //display the generated poem


    let instructionsInput = document.querySelector("user-instructions");
    let apiKey="bf5oac1604d9d228143bbe638f30t8d8";
    let context="You are a romantic expert. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow user instructions"; 
    let prompt =`user instruction: Genereate a zulu poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    
    console.log ("Generating poem");
    console.log(`context: ${context}`);
    console.log(`prompt: ${prompt}`);
    
    
    axios.get(apiUrl).then(displayPoem);



  
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);