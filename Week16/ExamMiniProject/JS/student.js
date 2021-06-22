function Student (nameOfStudent, surnameOfStudent) {
	this.nameOfStudent = nameOfStudent;
	this.surnameOfStudent = surnameOfStudent;
}

Student.prototype.getStudentData = function () {
	return this.nameOfStudent + ' ' + this.surnameOfStudent;
}


