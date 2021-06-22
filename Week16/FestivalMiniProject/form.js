var festivalObject = new Festival();

var createMovieBtnElement = document.getElementById('create-movie-btn');
var createProgramBtnElement = document.getElementById('create-program-btn');
var addMovieBtnElement = document.getElementById('addmovie-btn');
var createdMovieElementUl = document.getElementById('created-movie-here')
var uListOfCreatedPrograms = document.getElementById('programs-list');
var selectProgramList = document.getElementById('program-dropdown-list');
var selectMovieList = document.getElementById('movie-dropdown-list');
var removeMovieFromProgramBtnElement = document.getElementById('remove-movie-btn');
var deleteMovieBtnElement = document.getElementById('delete-movie-btn');
var deleteProgramBtnElement = document.getElementById('remove-movie-btn');
var displayInputError = document.getElementById('input-error');
var displayMovieCreated = document.getElementById('movie-created');
var userName = document.getElementById('user-name');
var userPassword = document.getElementById('password');
var signInBtn = document.getElementById('sign-in-btn');
var signOutBtn = document.getElementById('sign-out-btn');
var divMovie = document.getElementById('divMovie');
var divProgram = document.getElementById('divProgram');
var signInOutSwitch = false;
//console.log(signInOutSwitch)



// sign In function
function signIn (){
	if (userName.value === 'mirko' && userPassword.value === 'bit') {
	signInOutSwitch = true;
	alert('Welcome');
    divMovie.classList.toggle('disabled-div');
    divProgram.classList.toggle('disabled-div');
	}
	else {
		alert('Wrong User name or Password');
	} 
}
// sign Out function
function signOut (){
    if (signInOutSwitch) {
    divMovie.classList.toggle('disabled-div');
    divProgram.classList.toggle('disabled-div');
	signInOutSwitch = false;
	alert('You loged out')
    }
}

// function for creating a new movie
function createMovie () {	
	
    var movieTitle = document.getElementById('movie-title').value;
    var movieLength = document.getElementById('movie-length').value;
    var movieGenre = document.getElementById('genre').value;
	
	// checking input
	if (!movieTitle || !movieLength || movieGenre === '-') {
		console.log("error")
		displayInputError.classList.toggle('showInputError');
		setTimeout(function(){displayInputError.classList.toggle('showInputError');}, 1000);
	}
	else {		
		displayMovieCreated.classList.toggle('showMovieCreated');
		setTimeout(function(){displayMovieCreated.classList.toggle('showMovieCreated');}, 1000);
		
    var movieObject = new Movie(movieTitle, movieGenre, movieLength);
    //console.log(movieObject);

    //listOfCreatedMovies.push(movieObject);

    var indexM = festivalObject.addMovie(movieObject) + 1;
    console.log(indexM)

    // creating new li (movie) and adding it to the ul below the button
    var createdMovieLi = document.createElement('li');
    createdMovieLi.className = 'createdMovie';
    var removeMovieBtn = document.createElement('button');
    removeMovieBtn.className = 'removeMovieBtn';
    createdMovieLi.textContent = movieObject.getData();
    createdMovieLi.appendChild(removeMovieBtn);
    createdMovieElementUl.appendChild(createdMovieLi);
    // adding new movie to movie dropdown
    var movieOption = document.createElement('option');
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute('value', indexM);
    selectMovieList.appendChild(movieOption);
    // reseting inputs
    document.getElementById('movie-title').value = '';
    document.getElementById('movie-length').value = '';
    document.getElementById('genre').value = '-'
	}
}

// function for deleting a movie

function deleteMovie () {

    var listOfMovies = document.querySelectorAll('.createdMovie');
    for (var i = 0; i < listOfMovies.length; i++) {
        listOfMovies[i].querySelector('button').classList.toggle('on-off');
        listOfMovies[i].querySelector('button').addEventListener('click', function() {
            this.closest('.createdMovie').remove();
        })
    }
};

// function for creating a new program
function createProgram () {
    var programDate = document.getElementById('program-date').value;
    var programObject = new Program(programDate);



    var indexP = festivalObject.addProgram(programObject) + 1;
    //listOfCreatedPrograms.push(programObject);
    console.log(indexP)

    //adding to list of programs in html
    var liProgram = document.createElement('li');
    liProgram.textContent = programObject.getData();    
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program select option in html 
    var programOption = document.createElement('option');
    programOption.textContent = programObject.getData();
    programOption.setAttribute('value', indexP);
    selectProgramList.appendChild(programOption);
};

// function for deleting a program ***WORK IN PROGRESS***

function deleteProgram () {
    var listOfPrograms = document.querySelectorAll('.createdProgram');
    for (var i = 0; i < listOfPrograms.length; i++) {
        listOfPrograms[i].querySelector('button').classList.toggle('on-off');
        listOfPrograms[i].querySelector('button').addEventListener('click', function() {
            this.closest('.createdProgram').remove();
        })
    }

}



// function for adding a movie to program
function addMovieToProgram () {  
    var selectedMovieIndex = document.getElementById('movie-dropdown-list').value;
    console.log(selectedMovieIndex)
    var movieObjectToAdd = festivalObject.listOfAllMovies[selectedMovieIndex - 1];
    console.log(movieObjectToAdd)
    
    //var movieToAdd = document.getElementById('movie-dropdown-list').value;
    var selectedProgramIndex = document.getElementById('program-dropdown-list').value;
    var programObjectToReceive = festivalObject.listOfAllPrograms[selectedProgramIndex - 1];

    programObjectToReceive.addMovie(movieObjectToAdd);

    searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
    searchForLi[selectedProgramIndex - 1].innerHTML = programObjectToReceive.getData();    

    searchForOption = selectProgramList.getElementsByTagName('option');
    searchForOption[selectedProgramIndex].textContent = programObjectToReceive.getData();

   
};

// function for removing a movie from program

function removeMovieFromProgram () {    
    var movieToRemove = document.getElementById('movie-dropdown-list').value;
    var fromWhichProgram = document.getElementById('program-dropdown-list').value;
    
    listOfCreatedMovies.forEach(function (movieObjectElement) {
        
        if (movieObjectElement.getData() === movieToRemove) {
            var deleteIndex = listOfCreatedMovies.indexOf(movieObjectElement);
            
            listOfCreatedPrograms.forEach(function (programObjectElement) {
                
                if (programObjectElement.getDate() === fromWhichProgram) {
                programObjectElement.removeMovie(deleteIndex);
				
                    // update program list info
                    searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
                    
                    searchItem = fromWhichProgram;
                    
                    for (i = 0; i < searchForLi.length; i++) {
                    var currentLi = searchForLi[i].textContent.slice(0,15)
                    
                        if (searchItem === currentLi) {						
                        searchForLi[i].innerHTML = programObjectElement.getData()
                        }
                    }
				}
            })
        }
    })    
    console.log(listOfCreatedPrograms);    
}

// event listeners
signInBtn.addEventListener('click', signIn)
signOutBtn.addEventListener('click', signOut)

if (signInOutSwitch = true) {
createMovieBtnElement.addEventListener('click', createMovie);
createProgramBtnElement.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click',addMovieToProgram);

removeMovieFromProgramBtnElement.addEventListener('click', removeMovieFromProgram);
deleteMovieBtnElement.addEventListener('click', deleteMovie);
deleteProgramBtnElement.addEventListener('click', deleteProgram);
}





createProgram
<ul>
<li>programObject1.getData</li>
<li>programObject2.getData</li>
</ul>


new programObject1
new programObject2

listOfPrograms = [programObject1, programObject2]

indexForValue = 0 
indexForValue = 1

option 0
optin 1

listOfPrograms[dropdown.value]


var arrayOfLiiis = ul.getElementsByTagName('li') = [<li>programObject1.getData</li>, <li>programObject2.getData</li>]


pregazi stari LI arrayOfLiiis[dropdown.value] = listOfPrograms[dropdown.value].getData()

pregazi stari OPTION arrayOfLiiis[dropdown.value] = listOfPrograms[dropdown.value].getData()


