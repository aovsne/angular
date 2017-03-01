var myApp = angular.module("myApp", ["ngRoute"])
// configuration route
myApp.config(function($routeProvider){
	$routeProvider
	.when("/books", {
		templateUrl:"partials/book.html",
		controller:"bookListCtrl"
	})
	.when("/cart", {
		templateUrl: "partials/cart.html",
		controller: "cartListCtrl"

	})
	.otherwise({
		redirectTo: "/books"
	})
})
myApp.factory("cartService", function(){
	var cart = []
	return{
		getCart : function(){
			return cartService
		},
		addToCart: function(book){
			cart.push(book)
		},
		buy: function(){
			alert("Thanks for buying", book.name)
		}
	}
})


myApp.factory("bookService", function(){
	var books =  [
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
	return{
		getBooks: function(){
			return books
		}
	}
})

myApp.controller('cartListCtrl', function($scope, cartService){
	$scope.cart = cartService.getCart() 
	$scope.buy = function(book){
		cartService.buy(book)
	}
})

myApp.controller('headerCtrl', function($scope){
	$scope.appDetails = {
		logo: "BooKart",
		tagline: "We have 1 million Books."
	}
})




myApp.controller("bookListCtrl", function($scope, bookService, cartService){
	$scope.books = bookService.getBooks()
	$scope.addToCart = function(book){
		cartService.addToCart(book)
	}
})