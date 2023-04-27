function fetchAndDisplay(){
	fetch("https://itunes.apple.com/search?term=jack+johnson")
	.then(response => response.json())
	.then(data =>{
		console.log(data)
	})
}