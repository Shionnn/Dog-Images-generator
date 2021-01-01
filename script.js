//creating a tag element
function createNode(element) {
  return document.createElement(element);
}
//append function
function append(parent, el) {
return parent.appendChild(el);
}
//function to make sure search isnt null
function validateForm() {
  var x = document.getElementById('search').value;
  console.log(x)
  if (x == "" || x == null) {
    alert("Search bar cannot be empty!");
    return false;
  }
}
//enter key for search to work
document.getElementById('search').addEventListener("keyup", function(e) {
  if (e.keyCode == 13) {
   document.getElementById("submitbtn").click();
  }
});

//function happens when submit button clicked and api fetching
document.getElementById('submitbtn').addEventListener('click', function thisfunction(){
if ( document.getElementById('dogs1') != null){
  document.getElementById('dogs1').remove();
  document.getElementById('dogs2').remove();
  document.getElementById('dogs3').remove();
  document.getElementsByTagName('iframe').remove();
}


if (validateForm() != false){
  for (var j = 1; j < 4; j++){
    var newdiv = createNode('div');
    newdiv.id = "dogs"+j
    var container = document.getElementById("Page"+j);
    append(container,newdiv);
    console.log(container)
    console.log("page added")

    
    //fetching api
    for (var i = 0; i < 6; i++){
      
      let div = document.getElementById("dogs"+j)
      const breed = document.getElementById("search").value;
      newbreed = breed.replace(/\s/g,'/')
      fetch('https://dog.ceo/api/breed/'+newbreed+'/images/random')
      .then(response=>{
        if (response.ok) {
        return response.json();
      }
      else {

        alert("The breed you searched for is not available! Try again!")
        
      }
      })
      .then(data=>{
        let results = data.message;
        let img = createNode('img');
        img.src = results;
        append(div, img);
        console.log("img added")
      })
      .catch((error)=>{
        console.log(error)
        window.stop();
      })
    
      
    }
    
  }
  
}
const breed = document.getElementById("search").value;
    forwiki = breed.replace(/\s/g,'_')
    let iframe = createNode('iframe');
    iframe.src = 'https://en.wikipedia.org/wiki/'+forwiki
    append(container,iframe)

});

document.getElementById('Span1').style.textDecoration = "underline";
// show the given page, hide the rest
function show(elementID,spanID) {
  // try to find the requested page and alert if it's not found
  var ele = document.getElementById(elementID);
  var span = document.getElementById(spanID)
  if (!ele) {
      alert("no such element");
      return;
  }
  

  // get all pages, loop through them and hide them
  var pages = document.getElementsByClassName('page');
  var spans = document.getElementsByClassName('span');
  for(var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
      spans[i].style.textDecoration = 'none';
  }

  // then show the requested page
  ele.style.display = 'block';
  span.style.textDecoration = "underline";

}

//retrieve api data and put into array for autocomplete function
var array = []
var i = 0;


fetch('https://dog.ceo/api/breeds/list/all')
.then(response=>response.json())
.then(data=>{
  let results = data.message
  for (var key in results) {
    if (results.hasOwnProperty(key)) {
        while (results[key][i] != undefined){
          array.push(key + " " + results[key][i])
          i++;
        }
        i = 0;
        array.push(key)
    }
}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function() {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          x[currentFocus].click();

        }
        
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("search"), array);
  })


