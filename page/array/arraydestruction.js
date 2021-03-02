// array Destruction in javascript
let places = ['nandyal','kurnool'];
[newplaces,...city]=['belary','hubli','belgaum']
console.log(places);
 let oldplaces;
 [oldplaces,...places]=[...places,'hyderabad','bellari','oldcity'];
 console.log(places);
  console.log(newplaces);
  console.log(oldplaces);


  let sid =['i','am','ui','developer',55,43,66];
  [me,what,are,you]=sid;
  console.log(me);
  console.log(what);
  console.log(are,you);

  //object in array destructing 

  let employee =[{name:'pawan',
                  destination:'ReactJs developer',
                company:'oracle'},
                 {namae2:'abhi',
                  destination:'angular developer',
                  company:'adobe'},
                  {name3:'mayur',
                  destination:'nodejs developer',
                   company:'apple'}
                ]
                console.log(employee[2]);
                let [{name}]=employee;
                let [,{name2}]= employee;
                 let [,,{name3}]=employee;
                 let[,{destination}]=employee;

                console.log(destination);
                console.log(name);
                console.log(name2);
                console.log(name3);

