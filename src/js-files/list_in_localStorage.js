//window.onload = init();

function init(){
    loadAllStudentsIntoDOM();
}

function addStudent() {
  var fname = document.getElementById("fname ").value;
  var group - document.getElementById("groupselect").value;
  console.log("inside the addStudent"+fname+" Group "+groupselect);
  var liText = document.createTextNode(fname);
  li.appendChild(liText);
  document.getElementById(group).appendChild(li);
  saveToLocalStorage(fname,group);
}

function addStudentToDOM(fname, group){
    var li = document.createElement("li");
    li.setAttribute("id", fname);
    document.getElementById(group).appendChild(li);
}

function removeStudent() {
	var fname = document.getElementById("fname ").value;
	var group - document.getElementById("groupselect").value;
 	console.log("inside the removeStudent"+fname+" Group "+groupselect);
 	var listItem = document.getElementById(fname);
 	document.getElementById(group).removeChild(li);

 	remove from local storage(fname, group);

}

function removeStudentFromLocalStorage(student, listId) {
	var studentArray = getStudentArray(listId);
	var indexOfStudent = studentArray.indexOf(student);
	localStorage.setItem(listId, JSON.stringify(

		studentArray.slice(0,indexOfStudent)
		.concat(
			studentArray.slice(indexOfStudent+1,studentArray.length)
		)
		));
}

function saveToLocalStorage(student, listId){
	var studentArray = getStudentArray(listId);
	studentArray.push(student);
	localStorage.setItem(listId, JSON.stringify(studentArray));
}

function getStudentArray(key){
	var storedStudentList = localStorage.getItem(key);
	if ((storedStudentList === null) || (storedStudentList ==="")){
		storedStudentList = [];
	}
	else{
		storedStudentList = JSON.parse(storedStudentList);

	}
	 return storedStudentList;
}

function loadAllStudentsIntoDOM(){
    var groupID = "owllist";
    var studentArray = getStudentArray(groupID);
    console.log(studentArray);
    for(var i=0;i<studentArray.length;i++){
        addStudentToDOM(studentArray[i], groupID);
    }
    
}


