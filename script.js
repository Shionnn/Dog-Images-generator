function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

function validateForm() {
  var x = document.getElementById('search').value;
  console.log(x)
  if (x == "" || x == null) {
    alert("search must be filled out");
    return false;
  }
}

document.getElementById('submitbtn').addEventListener('click', function thisfunction(){
// if ( document.getElementById('dogs') != null){
//   document.getElementById('dogs').remove();
// }


if (validateForm() != false){
  for (var j = 1; j < 4; j++){
    var newdiv = createNode('div');
    newdiv.id = "dogs"+j
    var container = document.getElementById("Page"+j);
    append(container,newdiv);
    console.log(container)
    console.log("page added")
  
    for (var i = 0; i < 6; i++){
      let div = document.getElementById("dogs"+j)
      var breed = document.getElementById("search").value;
      fetch('https://dog.ceo/api/breed/'+breed+'/images/random')
      .then(response=>response.json())
      .then(data=>{
        let results = data.message;
        let img = createNode('img');
        img.src = results;
        append(div, img);
        console.log("img added")
      });

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
