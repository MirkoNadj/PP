'use strict';

(function (){
	console.log('Hi');
	
	// Constructor Genre //

	function Genre (name) {
		this.name = name;
		this.getData = function () {
			var genreShort = this.name.charAt(0) + this.name.charAt(name.length-1);
			return genreShort;
		};
	}
	
	// Constructor Movie //
	
	function Movie (title, genreObject, length) {
		this.title = title;
		this.genre = genreObject;
		this.length = length;
		this.getData = function () {
			return this.title + ', ' + this.length + ', ' + this.genre.getData();
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
                allMoviesData += movieElement.getData() + '\n';
            });
            return this.date + ', ' + allMoviesLength+ '\n\t\t' + allMoviesData;
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
        var movieObject = new Movie(movieTitle, movieLength, movieGenre)
        return movieObject;
    }

    // CREATE PROGRAM FUNCTION //

    function createProgram (programDate) {
        var programObject = new Program (programDate);
        return programObject;
    }


    var festivalObject1 = new Festival('Palics movie festival');

    var programObject1 = createProgram ('Avg 12 2021');
    var programObject2 = createProgram ('Avg 13 2021');

    var movieObject1 = createMovie ('Terminator 2', 200, 'action');
    var movieObject2 = createMovie ('Predator', 180, 'action');
    var movieObject3 = createMovie ('Forest Gump', 190, 'drama');
    var movieObject4 = createMovie ('Aliens', 175, 'Sci-Fi');





	/*// testing //
	
	var genreobj = new Genre ('ACTION');
	console.log(genreobj);
	console.log(genreobj.getData());
	
	var movieObj1 = new Movie ('terminator', genreobj, 200);
	console.log(movieObj1)
	console.log(movieObj1.getData())

    var movieObj2 = new Movie ('rambo', genreobj, 180);
    console.log(movieObj2)
	console.log(movieObj2.getData())

    var movieObj3 = new Movie ('predator', genreobj, 190);
    console.log(movieObj3);
    var movieObj4 = new Movie ('forest Gump', genreobj, 170);
    console.log(movieObj4);

    var programObj1 = new Program ('Nov 11 2017');
    console.log(programObj1);

    programObj1.addMovie(movieObj1);
    console.log(programObj1);

    programObj1.addMovie(movieObj2);
    console.log(programObj1);

    var programObj2 = new Program ('Sep 10 2016');
    programObj2.addMovie(movieObj3);
    programObj2.addMovie(movieObj4);
    console.log(programObj2);
	
    var festivalObj1 = new Festival ('Weekend festival');

    festivalObj1.addProgram (programObj1);
    festivalObj1.addProgram(programObj2);
    console.log(festivalObj1.getData());  */
})();