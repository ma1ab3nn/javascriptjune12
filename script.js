/** We are going to be creating a page that showcases some of our favourite animals. The page must contain some filters that will show/ hide the animals based on which filters are clicked. For example if you have images of pandas, tigers, lions and giraffes, when the giraffe filter is clicked the other animals get hidden.

We will also have a text input that can be used to filter the images based on their descriptions. For example if you have an image called “tiger jumping” and an image called “lion jumping” then typing “jump” into the search box should hide the other posts and show just these 2.

We need both of these things to work together so if the word “jump” is searched and the lion filter is clicked, only the lion post will show.*/

//Variable to track which filters have been selected and remember them across functions
let selectedFilter = 'all';


//Task 2
//Add a second class to each container that is called “imageFilter”.
//Add an attribute to each button animal =”tiger” (Show all, animal =”all”)


const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".animal-container");
const allButtons = document.getElementsByClassName('button');
const allImages = document.getElementsByClassName('images');

//Task 3
//Loop through each button in the button array.
//Add an event listener for each button that looks for a click event
//Grab the animal attribute with animal = this.getAttribute("animal");


for (button of allButtons) {
form.addEventListener('onClick', function (event){
    event.preventDefault();
});
}


//Task 4
//Loop through each item in the images array
//If animal = all change all of the containers to display:block
//If animal = “tiger” then if the container contains the class tiger display:block otherwise display:none

function filterAnimals(animal) {
    selectedFilter = animal;
    var containers = document.getElementsByClassName('animal-container');
    for (var i = 0; i < containers.length; i++) {
        if (animal === 'all') {
            containers[i].style.display = 'block';
            updateSelectedButton();
        } else {
            if (containers[i].classList.contains(animal)) {
                containers[i].style.display = 'block';
                updateSelectedButton();
            } else {
                containers[i].style.display = 'none';
            }
        }
    }
}

//Task 5
//Add a keyup event to the search box
//The text entered should be used to filter based on the image alt attribute (or use the src attribute if you have no alts)
//The selected filter button should also be taken into account

function filterBySearch(event){

const inputValue = event.target.value;
var containers = document.getElementsByClassName('animal-container');
const helperText = document.getElementById('helperText');

//loop through all the alts and compare the text entered into the search with the alts
//if they match the display them
for (var i = 0; i < containers.length; i++){
    var search = document.getElementById("animal " +i);
    var searchAlt = search.getAttribute('alt');

    //line below determines if the search input matches any part of the alt attribute of an image 
    const matchesSearch = searchAlt.toUpperCase().includes(inputValue.toUpperCase());
    //line below returns a boolean determined whether a given container element matches the currently selected filter (set by the buttons).
    const matchesFilter = selectedFilter === 'all' || containers[i].classList.contains(selectedFilter);

    if (matchesFilter && matchesSearch){
        search.style.display = 'block';
    }         
    else {
        search.style.display = 'none';
    }
}
//Add some helper text above the images that says something like “showing animals that match the search “{searchString}” and the filter {filter}
helperText.innerHTML = `Showing animals that match the search "${inputValue}" and the filter "${selectedFilter}"`;
}


document.getElementById("searchInput").addEventListener('input', filterBySearch);

//Task 6
//Add CSS classes that show which filter is currently selected by adding a border to the 
//clickable element.

function updateSelectedButton() {
    const buttons = document.getElementsByClassName('buttonFilter');
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if (button.getAttribute('animal') === selectedFilter) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    }
}
