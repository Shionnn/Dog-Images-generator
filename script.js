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
document.getElementById('search').addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("submitbtn").click();
  }
});
//function happens when submit button clicked
document.getElementById('submitbtn').addEventListener('click', function thisfunction(){
if ( document.getElementById('dogs1') != null){
  document.getElementById('dogs1').remove();
  document.getElementById('dogs2').remove();
  document.getElementById('dogs3').remove();
  
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
      var breed = document.getElementById("search").value;
      fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
      .then(response=>{
        if (response.ok) {
        return response.json();
      }
      else {

        throw new Error('Something went wrong');
        
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


});


// show the given page, hide the rest
function show(elementID) {
  // try to find the requested page and alert if it's not found
  var ele = document.getElementById(elementID);
  if (!ele) {
      alert("no such element");
      return;
  }

  // get all pages, loop through them and hide them
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
  }

  // then show the requested page
  ele.style.display = 'block';
}

// fetch('https://dog.ceo/api/breeds/list/all')
// .then(response=>response.json())
// .then(data=>{
//   let results = data.message;
//   return [results].map(function(results){

//   })
// })
