
// Part 1
// var ourRequest = new XMLHttpRequest();

// // to downlad data from server
// ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
// // to create what needs  happen we use onload method
// ourRequest.onload = function(){
//     // to log the result on the console, check inspect to verify
//     // console.log(ourRequest.responseText)


//     // to store  json data into variable and parse "ourRequest.responseText"
//     //into a JSOn object
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData[0])
// }
// // to send the request
// ourRequest.send();

// Part 2
// var btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         console.log(ourData[0])
//     };
//     ourRequest.send();

// })

// //Part3
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     ourRequest.send();
// })
// // to add html json data on the page
// function renderHTML(data){
// // (method) Element.insertAdjacentHTML(position: InsertPosition, text: string): void
//  animalContainer.insertAdjacentHTML('beforeend','testin ABC' )
// }

// //Part4
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     ourRequest.send();
// })
// function renderHTML(data){
// // var htmlString = " this is mr"
// //animalContainer.insertAdjacentHTML('beforeend', htmlString )
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }


// //Part 5
// //to add more urls data
// var pageCounter = 1;
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     //turn url dynamic
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     // increament oage counter value for data
//     ourRequest.send();
//     pageCounter++;
// })
// function renderHTML(data){
// // var htmlString = " this is mr"
// //animalContainer.insertAdjacentHTML('beforeend', htmlString )
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }


// //Part 5
// //to remove button after couples click
// var pageCounter = 1;
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     ourRequest.send();
//     pageCounter++;
//     if (pageCounter > 3){
//         btn.classList.add("hide-me");
//     }
// })
// function renderHTML(data){
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }



// //Part 6
// //add aditional data from the JSON
// var pageCounter = 1;
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     ourRequest.send();
//     pageCounter++;
//     if (pageCounter > 3){
//         btn.classList.add("hide-me");
//     }
// })
// function renderHTML(data){
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
//     for (ii = 0; ii < data[i].foods.likes.length; ii++){
//         // now concates the resultes of the food array with htmlString
//         htmlString += data[i].foods.likes[ii];
//     }
//      htmlString += ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }





// //Part 6
// //add aditional  "and space" data from the JSON
// var pageCounter = 1;
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };
//     ourRequest.send();
//     pageCounter++;
//     if (pageCounter > 3){
//         btn.classList.add("hide-me");
//     }
// })
// function renderHTML(data){
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
//     for (ii = 0; ii < data[i].foods.likes.length; ii++){
//         if (ii == 0){
//             htmlString += data[i].foods.likes[ii];
//         }else {
//             htmlString += " and " + data[i].foods.likes[ii];
//         }
//     }
//      htmlString += ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }



// //Part 7
// //add aditional  and spacedata + dislikes from the JSON
// var pageCounter = 1;
// var btn = document.getElementById("btn")
// var animalContainer = document.getElementById("animal-info")

// btn.addEventListener("click", function () {
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData)
//     };

//     ourRequest.send();
//     pageCounter++;
//     if (pageCounter > 3){
//         btn.classList.add("hide-me");
//     }
// })
// function renderHTML(data){
// var htmlString = ""
// for(i = 0; i < data.length; i++){
//     htmlString += "<h1>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
//     for (ii = 0; ii < data[i].foods.likes.length; ii++){
//         if (ii == 0){
//             htmlString += data[i].foods.likes[ii];
//         }else {
//             htmlString += " and " + data[i].foods.likes[ii];
//         }
//     }
//     //add dislikes
//     htmlString += ' and dislikes '
//     for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
//         if (ii == 0){
//             htmlString += data[i].foods.dislikes[ii];
//         }else {
//             htmlString += " and " + data[i].foods.dislikes[ii];
//         }
//     }
//      htmlString += ".</h1>";
// }
//  animalContainer.insertAdjacentHTML('beforeend', htmlString )
// }



//Part 8
//Error handling
var pageCounter = 1;
var btn = document.getElementById("btn")
var animalContainer = document.getElementById("animal-info")

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
    ourRequest.onload = function () {
        // to deal with connection errors
        if (ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData)
        } else {
            console.log("connected but server error")
        }
       
    };

    // for internet down or connection connection error
    ourRequest.onerror = function(){
        console.log("Data is down, try again later")
    }



    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
})
function renderHTML(data){
var htmlString = ""
for(i = 0; i < data.length; i++){
    htmlString += "<h1>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    for (ii = 0; ii < data[i].foods.likes.length; ii++){
        if (ii == 0){
            htmlString += data[i].foods.likes[ii];
        }else {
            htmlString += " and " + data[i].foods.likes[ii];
        }
    }
    //add dislikes
    htmlString += ' and dislikes '
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
        if (ii == 0){
            htmlString += data[i].foods.dislikes[ii];
        }else {
            htmlString += " and " + data[i].foods.dislikes[ii];
        }
    }
     htmlString += ".</h1>";
}
 animalContainer.insertAdjacentHTML('beforeend', htmlString )
}



