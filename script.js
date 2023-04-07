
console.log('test script')

fetch('https://whatyearisit-backend-lovat.vercel.app/dates/year')
	.then(response => response.json())
	.then(data => {
            console.log(data)
            if(data.year){
                document.querySelector("#year").innerHTML += `<h1>Voici l'année ${data.year}</h1>`
            }
                
            
    })