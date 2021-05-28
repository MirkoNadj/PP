'use strict';

(function (){
	console.log('Hi');
	
	// Constructor Genre //

	function Genre (name) {
		this.name = name;
		this.getData = function () {
			var genreShort = this.name.charAt(0).toUpperCase() + this.name.charAt(name.length-1).toUpperCase();
			return genreShort;
		};
	}
	
	// Constructor Movie //
	
	function Movie (title, genreObject, length) {
		this.title = title;
		this.genre = genreObject;
		this.length = length;
		this.getData = function () {
			return this.title + ', ' + this.length + ' min, ' + this.genre;
		}
	}
	
	// Constructor Program //
	
	function Program (date) {
		this.date = new Date(date);
		this.listOfMovies = [];
		this.numberOfMovies = function () {
            return this.listOfMovies.length;
        };
		this.addMovie = function (movieObject) {
			return this.listOfMovies.push(movieObject);
		};
        this.getData = function () {
            var allMoviesLength = 0;
            var allMoviesData = '';
            this.listOfMovies.forEach(function (movieElement) {
                allMoviesLength += movieElement.length;
                allMoviesData += movieElement.getData() + '\n\t\t';
            });
            return this.date.toDateString() + ', program duration ' + allMoviesLength + ' min \n\t\t' + allMoviesData;
            };
        };	
	
	// Constructor Festival //
	
	function Festival (name) {
		this.name = name;
		this.listOfPrograms = [];
		this.numberOfMoviesInAll = function () {
            var sumNumberOfMovies = 0;
            this.listOfPrograms.forEach(function (programElement) {
                sumNumberOfMovies+= programElement.numberOfMovies();
            })
            return sumNumberOfMovies;
        }
        this.listAllPrograms = function () {
            var allProgramsList = ''; 
            this.listOfPrograms.forEach(function (programElement) {
                allProgramsList += programElement.getData() + '\n';
            })
            return allProgramsList;
        }
        this.addProgram = function (programObject) {
            return this.listOfPrograms.push(programObject);
        };
        this.getData = function () {
            return this.name + ' has ' + this.numberOfMoviesInAll()  + ' movie titles \n' + this.listAllPrograms();
        
        };
	}

    // CREATE A MOVIE FUNCTION //

    function createMovie (movieTitle, movieLength, movieGenre) {
        var genreObject = new Genre(movieGenre);
        var movieObject = new Movie(movieTitle, genreObject.getData(), movieLength);
        return movieObject;
    }

    // CREATE PROGRAM FUNCTION //

    function createProgram (programDate) {
        var programObject = new Program (programDate);
        return programObject;
    }

    // CREATING OBJECTS //

    var festivalObject1 = new Festival('Palics movie festival');

    var programObject1 = createProgram ('Aug 12 2021');
    var programObject2 = createProgram ('Aug 13 2021');

    var movieObject1 = createMovie ('Terminator 2', 200, 'action');
    var movieObject2 = createMovie ('Predator', 180, 'action');
    var movieObject3 = createMovie ('Forest Gump', 190, 'drama');
    var movieObject4 = createMovie ('Aliens', 175, 'Sci-Fi');

    // ADDING OBJECTS

    programObject1.addMovie(movieObject1);
    programObject1.addMovie(movieObject2);
    programObject1.addMovie(movieObject3);
    programObject1.addMovie(movieObject4);

    programObject2.addMovie(movieObject1);
    programObject2.addMovie(movieObject2);
    programObject2.addMovie(movieObject3);
    programObject2.addMovie(movieObject4);

    festivalObject1.addProgram(programObject1);
    festivalObject1.addProgram(programObject2);

    console.log(festivalObject1.getData());






	
})();