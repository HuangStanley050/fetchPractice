/*global fetch*/
var dog_url = "https://dog.ceo/api/breeds/image/random";
var test_dog = "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350";

function renderdog() {
    //alert("clicked");
    var doggie;
    
    fetch(dog_url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson.message);
            var picture = document.createElement("IMG");
            picture.setAttribute("src", myJson.message);
            picture.setAttribute("width", "304");
            picture.setAttribute("height", "228");
            var element = document.getElementById("header");
            element.appendChild(picture)
            
        });
    
    /*var picture = document.createElement("IMG");
    picture.setAttribute("src", test_dog);
    picture.setAttribute("width", "304");
    picture.setAttribute("height", "228");
    //var node = document.createTextNode("This is new.");
    //para.appendChild(node);

    var element = document.getElementById("header");
    element.appendChild(picture);*/
}