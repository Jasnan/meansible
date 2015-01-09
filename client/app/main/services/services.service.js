'use strict';

angular.module('meansibleApp')
	.service('Box', function($resource) {
		return $resource('/app/main/services/boxes.json', {}, {
			query: {
				method: 'GET',
				isArray: true
			}
		});
	})

// Service for Node Versions
.service('NodeVersions', function($resource) {
	return $resource('/app/main/services/npm-versions.json', {}, {
		query: {
			method: 'GET',
			isArray: true
		}
	});
})

// Generate Script and Download
.service('ScriptDownload', ['$resource', function($resource) {
	return $resource('/api/things/', {}, {
		get: {
			method: 'GET',
			isArray: false
		},
		download: {
			method: 'POST'
		}
	});
}])