// Gruntfile.js
module.exports = function(grunt) {
	
	// config grunt
	grunt.initConfig({

		// config package
		pkg: grunt.file.readJSON('package.json'),

		// config nodemon
		nodemon: {

			dev: {
				script: 'server.js'
			}
		}

	});

	// load nodemon
	grunt.loadNpmTasks('grunt-nodemon');

	// register grunt tasks
	grunt.registerTask('default', ['nodemon']);
};