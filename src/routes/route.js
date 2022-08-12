const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

let players =
  [
    {
      "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": [
        "swimming"
      ]
    },
    {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
        "soccer"
      ],
    },
    {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
        "soccer"
      ],
    },
  ]



router.post('/players', function (req, res) {

  
  let newplayer = req.body.player
  players.push(newplayer)
  res.send({ data: players, status: true })
})


// WRITE A POST API TO THE ABOVE

let persons=[
  {
    name: "PK",
    age: 10,
    votingstatus: false
  },
  {
    name: "SK",
    age: 20,
    votingstatus: false

  },
  {
    name: "AA",
    age: 70,
    votingstatus: false
  },
  {
    name: "SC",
    age:5,
    votingstatus: false
  },
  {
    name: "HO",
    age:40,
    votingstatus: false
  }
]

router.post('/voting', function(req, res){
  let age=req.query.age
  
  let elegiPerson=[]
  for (let i=0; i<persons.length; i++){
      if(persons[i].age>=age){
          persons[i].votingStatus=true
          elegiPerson.push(persons[i])
      }
  }
  return res.send({persons :elegiPerson , status : true} )
  
})


// optional assignment



let play = [
  {
    "name" :"Shubham",
     "bookingNumber":"1",
     "dob" :"1/1/1995",
     "gender":"male",
     "city":"jalandhar",
     "sports":[
         "swimming"   ],
    
 "sportId": "01",
//    "centerId : '',
"type": "private",
"slot": '16286598000000',
"bookedOn":'31/08/2021',
"bookedFor":'01/09/2021',
  },
  {
      "name" :"Raj",
       "bookingNumber":"10",
       "dob" :"1/1/1995",
       "gender":"male",
       "city":"jalandhar",
       "sports":[
           "swimming"   ],
      
   "sportId": "02",
//    "centerId : '',
  "type": "private",
  "slot": '16286598000000',
  "bookedOn":'31/08/2021',
  "bookedFor":'01/09/2021',
    },
    {
      "name":"manish",
      "bookingNumber":"2",
      "dob" :"1/09/1995",
      "gender": "male",
      "city" :"delhi",
      "sports":[
         "soccer"
      ],
     
      "sportId": "03",
      // "centerId : '',
     "type": "private",
     "slot": '16286598000000',
     "bookedOn":'31/08/2021',
     "bookedFor":'01/09/2021',
    },
    
    ]


router.post('/playerss', function(req, res){

 

   
   let Playername = req.body.Playername
   let Playerid   = req.body.sportId
for(let i=0; i<play.length; i++){
     if(play[i].name == Playername &&  play[i].bookingNumber == sportId){
      console.log("this person is already exist")
      return res.send("this person is already exist")
      
     }
    
}
for(let j=0 ; j<play.length; j++){
  if(play[j].name == Playername && play[j].bookingNumber != sportId){
      console.log("welcome your id is generated")
      return  res.send("wlcome your id is generated ")     
  }
}

for(let k=0 ; k<play.length; k++){
if(play[k].name != Playername  ){
  console.log("sorry this name is not available in our player list")
  return  res.send("sorry this name is already available in our player list ")     
}
}

})












module.exports = router;