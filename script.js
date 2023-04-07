
console.log('test script')

fetch('http://localhost:3000/dates/year')
	.then(response => response.json())
	.then(data => {
            console.log(data)
            if(data.year){
                document.querySelector("#year").innerHTML += `<h1>Voici l'année ${data.year}</h1>`
            }
                
            
    })