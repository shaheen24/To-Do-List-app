// ============Bismillahir Rahmanir Rahim==============
var From = document.querySelector("#addform");
var ulterget = document.querySelector("#items");
// add Item
From.addEventListener('submit',addItem);
// remove Item
ulterget.addEventListener('click',removeItem)
// add item
function addItem(e){
   e.preventDefault();
   // Get Input
   var getInput = document.getElementById('itemInput').value;
   // create li
   var li = document.createElement('li');
   // add class
   li.className='list-group-item list-group-item-action mb-2';
   li.appendChild(document.createTextNode(' > '+getInput));
   ulterget.appendChild(li);
   // Create Del Button
   var createDelBtn = document.createElement('button');
   // add class to Del Button
   createDelBtn.className='btn btn-danger btn-sm float-right delete';
   // Add Text Node To Del Buton
   createDelBtn.appendChild(document.createTextNode('X'));
   // add Del Button to Li
   li.appendChild(createDelBtn);
   // console.log(li);
}
// Remove Item
function removeItem(e){
   if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
         var li = e.target.parentElement;
         ulterget.removeChild(li);
      }
   };
};


