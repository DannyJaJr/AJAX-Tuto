
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

//Part3
var btn = document.getElementById("btn")
var animalContainer = document.getElementById("animal-info")

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData)
    };
    ourRequest.send();
})
// to add html json data on the page
function renderHTML(data){
// (method) Element.insertAdjacentHTML(position: InsertPosition, text: string): void
 animalContainer.insertAdjacentHTML('beforeend','testin ABC' )
}
