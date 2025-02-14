// Create a server that serve an index request
const express = require('express')
const app = express()
const PORT = 8000

//create a get request on the api page 

const rappers = {
    'skepta' : {
        'birthName' : 'Joseph Junior Adenuga',
        'birthPlace' : 'London, England',
        'age':'41',
    },
    'stormzy' : {
        'birthName' : 'Michael Ebenezer K. Owuo Jr.',
        'birthPlace' : 'London, England',
        'age':'30',
    },
    'dave' : {
        'birthName' : 'David Orobosa Omoregie',
        'birthPlace' : 'London, England',
        'age':'25',
    },
    ' central cee' : {
        'birthName' : 'Oakley Neil H. Caesar-Su',
        'birthPlace' : 'London, England',
        'age':'25',
    },
    ' j Hus' : {
        'birthName' : 'Momodou Lamin Jallow',
        'birthPlace' : 'London, England',
        'age':'27',
    },
    'headie one' : {
        'birthName' : 'Irving Ampofo Adjei',
        'birthPlace' : 'London, England',
        'age':'29',
    },
     'giggs' : {
        'birthName' : 'Nathaniel Thompson',
        'birthPlace' : 'London, England',
        'age':'41',
    },
    'aitch' : {
        'birthName' : 'Harrison James Armstrong',
        'birthPlace' : 'Manchester, England',
        'age':'24',
    },
    ' nines' : {
        'birthName' : 'Courtney Freckleton',
        'birthPlace' : 'London, England',
        'age':'34',
    },
    ' blade brown' : {
        'birthName' : 'Unknown',
        'birthPlace' : 'London, England',
        'age':'~38',
    },
    ' aJ tracey' : {
        'birthName' : 'Ché Wolton Grant',
        'birthPlace' : 'London, England',
        'age':'30',
    },
    'kano' : {
        'birthName' : 'Kane Brett Robinson',
        'birthPlace' : 'London, England',
        'age':'38',
    },
    'dutchavelli' : {
        'birthName' : 'Stephan Fabulous Allen',
        'birthPlace' : 'Rotterdam, Netherlands',
        'age':'30',
    },
    'm Huncho' : {
        'birthName' : 'Unknown',
        'birthPlace' : 'London, England',
        'age':'~30',
    },
    'tion Wayne' : {
        'birthName' : 'Dennis Junior Odunwo',
        'birthPlace' : 'London, England',
        'age':'30',
    },
    ' unknown T' : {
        'birthName' : 'Daniel Lena',
        'birthPlace' : 'London, England',
        'age':'25',
    },
    'ivorian Doll' : {
        'birthName' : 'Vanessa Mahi',
        'birthPlace' : 'Flensburg, Germany',
        'age':'26',
    },
    'russ Millions' : {
        'birthName' : 'Shylo Batchelor Ashby Milwood',
        'birthPlace' : 'London, England',
        'age':'28',
    },
    'digga D' : {
        'birthName' : 'Rhys Herbert',
        'birthPlace' : 'London, England',
        'age':'23',
    },
    'fredo' : {
        'birthName' : 'Marvin William Bailey',
        'birthPlace' : 'London, England',
        'age':'30',
    },
    'others' : {
        'birthName' : 'unknown',
        'birthPlace' : 'unknown',
        'age':'unknown', 
    },
    
    
}
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        console.log(rappers[rapperName].birthName)
        response.json(rappers)
    }
    else{
        response.json(rappers[others])
    }
    
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT} You better go catch it`)
})


