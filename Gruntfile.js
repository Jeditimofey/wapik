'use strict';

module.exports = function(grunt){

	grunt.initConfig({

		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						root:'/teamtreehouse',
						staticRoot: '/teamtreehouse/public'
					}
				},
				files: {
					'index.html': 'views/pages/index.jade',
					'pricing.html': 'views/pages/pricing.jade',
					'contacts.html': 'views/pages/contacts.jade',
					'about.html': 'views/pages/about.jade',
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['jade']);

};