var list=document.getElementById("list");


function addTodo(){
    var todo_item=document.getElementById("todo-item");
//li
    var li = document.createElement("li");
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);
    var br = document.createElement("br");
    li.appendChild(br);


//delete button
    var delbtn=document.createElement("button");
    var delicon=document.createElement("i");
    delicon.setAttribute("class","fa fa-trash-o");
    delicon.setAttribute("aria-hidden","true");
    delbtn.setAttribute("onclick","deleteItem(this)");
    delbtn.setAttribute("class","btn btn-outline-danger btn-sm m-1");
    delbtn.appendChild(delicon);
    li.appendChild(delbtn);



//edit button
    var editbtn=document.createElement("button");
    var editicon=document.createElement("i");
    editicon.setAttribute("class","fa fa-pencil");
    editicon.setAttribute("aria-hidden","true");
    editbtn.setAttribute("onclick","editItem(this)");
    editbtn.setAttribute("class","btn btn-outline-info btn-sm m-1");
    editbtn.appendChild(editicon);
    li.appendChild(editbtn);



//check button
    var chbtn=document.createElement("button");
    var chicon=document.createElement("i");
    chicon.setAttribute("class","fa fa-check");
    chicon.setAttribute("aria-hidden","true");
    chbtn.setAttribute("onclick","checked(this)");
    chbtn.setAttribute("class","btn btn-outline-success btn-sm m-1");
    chbtn.appendChild(chicon);
    li.appendChild(chbtn);




    list.appendChild(li);
    todo_item.value="";
}
function deleteItem(d){
    d.parentNode.remove();
}
function delAll(){
    list.innerHTML="";
}
function editItem(e){
    var editval=prompt("Enter edit value:",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=editval;
}
function checked(c){
    c.parentNode.setAttribute("class","done");
}
