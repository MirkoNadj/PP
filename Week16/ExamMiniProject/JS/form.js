// input variables

// objects
	
var examArray = [];
var studentsArray = [];
var countPassed = 0;
var countFailed = 0;

function collectData () {
	var subjectInput = document.getElementById('subjectInput').value;
	var nameInput = document.getElementById('nameInput').value;
	var surnameInput = document.getElementById('surnameInput').value;
	var gradeInput = document.getElementById('gradeInput').value;
	var subjectObject = new Subject (subjectInput);
	var studentObject = new Student (nameInput, surnameInput);
	var examObject = new Exam (subjectObject.getSubjectName(), studentObject.getStudentData(), gradeInput);
	
	studentsArray.push(studentObject);
	examArray.push(examObject);
	
	// reset inputs
	document.getElementById('subjectInput').value = '';
	document.getElementById('nameInput').value = '';
	document.getElementById('surnameInput').value = '';
	document.getElementById('gradeInput').value = '';
}

function validateData () {
	
}

function updateList () {
	console.log('update')
	console.log(examArray[examArray.length-1]);

	var passedList = document.getElementById('passedUL');
	var failedList = document.getElementById('failedUl');
	if (examArray[examArray.length-1].hasPassed()) {
		countPassed++;
		var passedStudentP = document.createElement('p');
		passedStudentP.className = 'exam-info-passed';
		passedStudentP.textContent = examArray[examArray.length-1].getExamInfo();
		var passedGradeP = document.createElement('p');
		passedStudentP.className = 'exam-info-passed'
		passedGradeP.textContent = examArray[examArray.length-1].grade;
		
		var passedDataLi = document.createElement("li");
		passedDataLi.appendChild(passedStudentP);
		passedDataLi.appendChild(passedGradeP);
		
		passedList.appendChild(passedDataLi);
		
	}
	else {
		countFailed++;
		var failedStudentP = document.createElement('p');
		failedStudentP.className = 'exam-info-failed';
		failedStudentP.textContent = examArray[examArray.length-1].getExamInfo();		
		var failedGradeP = document.createElement('p');
		failedStudentP.className = 'grade-of-student-failed'
		failedGradeP.textContent = examArray[examArray.length-1].grade;
		
		var failedDataLi = document.createElement("li");
		failedDataLi.appendChild(failedStudentP);
		failedDataLi.appendChild(failedGradeP);
		
		failedList.appendChild(failedDataLi);
	}
	
}

function updateStatistics () {
	var totalNumber = document.getElementById('total-students')
	totalNumber.textContent = (countPassed + countFailed);
	// passed stat
	var passedNumber = document.querySelector('.num-that-passed');
	passedNumber.textContent = countPassed;
	var passedPercent = document.querySelector('.percent-passed');
	passedPercent.textContent = ((countPassed*100)/(countPassed + countFailed));
	//failed stat
	var failedNumber = document.querySelector('.num-that-failed');
	failedNumber.textContent = countFailed;
	var failedPercent = document.querySelector('.percent-failed');
	failedPercent.textContent = ((countFailed*100)/(countPassed + countFailed));
	
	
}

