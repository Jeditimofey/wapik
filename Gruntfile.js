'use strict';

module.exports = function(grunt){

	grunt.initConfig({

		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						root:'/wapik/pages',
						staticRoot: '/wapik/public'
					}
				},
				files: {
					'index.html': 'views/pages/index.jade',
					'views/pages/pricing.html': 'views/pages/pricing.jade',
					'views/pages/contacts.html': 'views/pages/contacts.jade',
					'views/pages/about.html': 'views/pages/about.jade',
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['jade']);

};