var itemsArray = [
    {
          name: "juice",
          price: "50",
          quantity:"3"

    },
    {
        name: "cookie",
          price: "30",
          quantity:"9"
    },
    {
        name: "shirt",
          price: "880",
          quantity:"1"
    },
    {
        name: "pen",
          price: "100",
          quantity:"2"
    },
    
  


  
]
console.log(itemsArray)


var std ={
       name: "Muhammad Zubair",
       email:"zubair@gmail.com",
      password: "12345",
      age : "19",
       gender:"Male",
      city:"karachi",
      country:"pakistan"

       
}
console.log(std)

var check = "age" in std

console.log(check)


function Std(name , age , id){
      this.stdName = name
      this.stdAge = age
      this.stdId = id
      this.getName = function(){
          return this.stdName
      }
}





var std2 = new  Std("Zubair" , 23 , 105)
var std3 = new  Std("huzaifa" , 21 , 502)
var std4 = new  Std("usama" , 25 , 101)





console.log(std2)
console.log(std3)
console.log(std4.hasOwnProperty("stdName"))
