var headerCtrl = function($scope){
	$scope.appDetails = {
		logo: "Bookart",
		tagline: "We have 1 million Books."
	}
}

var bookListCtrl = function($scope){
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
}