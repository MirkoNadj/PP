/* input variables
var subjectInput = document.getElementById('subjectInput').value;
var nameInput = document.getElementById('nameInput').value;
var surnameInput = document.getElementById('surnameInput').value;
var gradeInput = document.getElementById('gradeInput').value;*/


// btn variables

var addBtn = document.querySelector('.add-btn');

// function for 'ADD' event

function mainAdd () {
	console.log('main');
	collectData();	
	//validateData();
	updateList();
	updateStatistics();
}

// event listeners

addBtn.addEventListener('click', mainAdd)

