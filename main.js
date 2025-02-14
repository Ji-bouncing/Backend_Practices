document.querySelector('#check').addEventListener('click',getName)

async function getName(){
    const userInput = document.querySelector('input').value.toLowerCase()
    try{
    const res = await fetch(`localhost:8000/api/?${userInput}`)
    const data = await res.json()
    console.log(data)
    }
    catch(err){
        console.log(`ERROR : ${err}`)
    }
    
}
getName()