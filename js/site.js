//Submit using enter key.
const input = document.getElementById("userString");
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getValue()
  }
});


//Get the string from the page
//controller function
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById('userString').value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string 
//logic function
function reverseString (userString) {
        let revString = [];
    
        //reverse a string using a for loop
        for (let index = userString.length-1; index >= 0; index--) {
        
            revString += userString[index];
        }

        return revString;
}


//Display the reversed string to the user
//View Function 
function displayString(revString) {

    //write to page
    document.getElementById('msg').innerHTML = revString;

    // `Your string reversed is: ${revString}`;

    
    //show alert box;
    document.getElementById('alert').classList.remove("invisible");
}