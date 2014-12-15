// Gruntfile.js
module.exports = function(grunt) {
	
	// config grunt
	grunt.initConfig({

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