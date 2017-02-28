var myApp = angular.module("myApp", ["ngRoute"])
// configuration route
myApp.config(function($routeProvider){
	$routeProvider
	.when("/books", {
		templateUrl:"partials/book.html",
		controller:"bookListCtrl"
	})
	.when("/cart", {
		templateUrl: "partials/cart.html"

	})
	.otherwise({
		redirectTo: "/books"
	})
})

myApp.controller('headerCtrl', function($scope){
	$scope.appDetails = {
		logo: "BooKart",
		tagline: "We have 1 million Books."
	}
})




myApp.controller("bookListCtrl", function($scope){
	$scope.books = [
		{
			imgUrl: "dalailama.jpg",
			name: "Little Book of Wisdom",
			price: 200,
			rating: 4,
			binding: "paperback",
			publisher: "gemini",
			releaseDate: "12/12/12",
			details: "book is about dalai lama wisdom. ladsjf ladkjf"
		},
		{
			imgUrl: "geisha.jpg",
			name: "geisha of Gion",
			price: 120,
			rating: 4,
			binding: "paperback",
			publisher: "nippon",
			releaseDate: "4/4/12",
			details: "Book about geish in japan. lasdjf laksdjf."
		},
		{
			imgUrl: "novel.jpg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "paperback",
			publisher: "random",
			releaseDate: "12/12/12",
			details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
		},
		{
			imgUrl: "ww.jpg",
			name: "World war",
			price: 333,
			rating: 3,
			binding: "paperback",
			publisher: "random",
			releaseDate: "56/5/12",
			details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo"
		},
	]
	$scope.addToCart = function(book){
		console.log("add to Cart: "+ book)
	}
})