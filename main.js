const button = document.querySelector('#check');
button.addEventListener('click',getName);

//const result = document.querySelector('#insertInfo')
async function getName(){
    const userInput = document.querySelector('input').value.toLowerCase()
    try{
    const res = await fetch(`http://localhost:8000/api/?${userInput}`)
    const data = await res.json()
    console.log(data)
   // result.innerText = data.birthdate;
    
    }
    catch(err){
        console.log(`ERROR : ${err}`)
    }
    
}
getName()

