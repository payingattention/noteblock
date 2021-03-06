'use strict';

var nbApp = angular.module( 'nbApp', [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'infinite-scroll'
] )

var PUSHERCLIENT = new Pusher( '6618588018b280759474' );

nbApp.config( function( $locationProvider ) {
	$locationProvider.html5Mode( true );
} )

var Beep = function() {
	var file = "/beep.wav";
	( new Audio( file ) ).play()
}

nbApp.run( function( $rootScope, $location, $anchorScroll, $modal ) {
	$rootScope.global = {}

	$rootScope.global.isOnLink = function( path ) {
		return path === $location.path().split( "/" )[ 1 ];
	}

	$rootScope.$on( '$routeChangeSuccess', function( next, current ) {
		$anchorScroll();
	} );

	$rootScope.What = {
		open: function() {
			$modal.open( {
				templateUrl: "/templates/_what.html",
				controller: modalCtrl
			} );
		}
	};

	var modalCtrl = function( $scope, $modalInstance ) {
		$scope.cancel = function() {
			$modalInstance.dismiss( 'cancel' );
		};
	};
} )

nbApp.config( function( $routeProvider ) {

	$routeProvider.when( "/", {
		controller: "landingCtrl",
		templateUrl: "/templates/landing.html"
	} )

	$routeProvider.when( "/notes/:id", {
		controller: "notesCtrl",
		templateUrl: "/templates/notes.html"
	} )

	$routeProvider.when( "/notes/:id/confirm", {
		controller: "confirmCtrl",
		templateUrl: "/templates/confirm.html"
	} )

	$routeProvider.when( "/notes/:id/claim", {
		controller: "notesCtrl",
		templateUrl: "/templates/claim.html"
	} )

	$routeProvider.when( "/how-it-works", {
		templateUrl: "/templates/how-it-works.html"
	} )

	$routeProvider.otherwise( {
		templateUrl: '/404.html'
	} );

} )
