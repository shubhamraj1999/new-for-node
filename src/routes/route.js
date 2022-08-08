const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(req.Params))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    let studentDetail = studentName + "" + studentName
    res.send(studentDetail)
    
})
// first assignment
router.get('/get-movies',function(req , res){
    
     let movies1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies1)
})

// second assignment
router.get('/movies/:indexNumber', function (req, res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    
    let requestParams = req.params.indexNumber
    console.log(movies[index])

    res.send(movies[index])
    
      
})

//third assignment
router.get('/get-movie/:indexNumber', function(req , res){
    let movieName =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let indexNumber = req.params.indexNumber
    if (index > movieName.length){
        return res.send (' use a valid index ')
    } else {
        res.send(movieName[index])
    } 

})

//fourth assignment
router.get('/get-/films', function (req, res){
    let moviesName=[ 
        {'id': 1, 'name' : 'The shining'},
        {'id' : 2, 'name' : 'incendies'},
        {'id' : 3, 'name' : 'rang de basanti'},
         {'id': 4, 'name' : 'finding nemo'}]  
    
     res.send(moviesName) 
})

// fifth assignment

router.get('/GET/films/:filmId', function(req,res){
    
    let moviesName=[ 
        {'id': 1, 'name' : 'The shining'},
        {'id' : 2, 'name' : 'incendies'},
        {'id' : 3, 'name' : 'rang de basanti'},
         {'id': 4, 'name' : 'finding nemo'}]  
    

    let value = req.params.filmId 
    if(value > moviesName.length){
        return res.send('no movie exist with this id')
            
    }else {
        res.send(moviesName[value])
    }
    
    
   
   

    
     
})



























module.exports = router;