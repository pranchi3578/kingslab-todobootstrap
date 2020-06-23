const list = document.getElementById("list");
const add = document.getElementById("adds");

list.addEventListener("click", function (event) {
  if (event.target.attributes.id.value == "add")
    addToDo(document.getElementById("task").value, event.target);
  else if (event.target.attributes.id.value == "remove")
    removeToDo(event.target);
});

function addToDo(taskPassed, event) {
  const container = event.parentNode;
  var date = new Date();
  const newele = `<div class="flex-container">
    
    <table class="table table-bordered table-dark">
  <thead>
    <tr>
    
      <th scope="col">TASK</th>
      <th scope="col">${date} </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${taskPassed}</td>
      <td><button  class="btn btn-light" type="button " id="remove" onclick="removeToDo()">
          remove
        </button></td>
    </tr>
  
  </tbody>
</table>
       
     
    
        
     
    
  </div>`;
  const position = "beforebegin";

  container.insertAdjacentHTML(position, newele);
}

function removeToDo(element) {
  element.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    element.parentNode.parentNode.parentNode.parentNode
  );
}
