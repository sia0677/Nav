// let checkprime = (num) =>{
//     if(num == 1){
//         return "prime"
//     }
//     else{
//         return "composite"
//     }
// }
// console.log(checkprime(9))

// let arr = [10,20,30,40,50,60,70]

// arr.forEach(function(num){
//     console.log(num)
// })

 let fruits = ["Apple","Banana","Mango","Orange"]

 fruits.forEach((fruits)=>{
     console.log(`I like ${fruits}`.touppercase());
 })

fruits.maps(function(a,b){
    console.log(`${b}:${a}`)
})

let arr  = [10,20,30,40,50]
let newarr = arr.map((element)=>{
    return element+=5
})

let filteredArr = arr.filter((element)=>{
          return element % 2 == 0;
})
console.log(filteredArr);

// let heading = document.getElementById("heading")
// console.log(heading)
// let pTag = document.getElementsByClassName("pTag")
// console.log(pTag);
// let h2tag = document.getElementsByTagName("h2tag")
// console.log(h2tag)


// let pTag = document.querySelector("#pTag")
// console.log(pTag)

// let heading = document.getElementById("heading")
// console.log(heading.innerText)
// heading.innerText = "This is new heading"
// console.log(heading.innerText)
// heading.textContent = "Hello !!!"

let heading = document.getElementById("heading")
let headingDiv = document.getElementById("headingDiv")
console.log(headingDiv.innerHTML)

headingDiv.innerHTML = "<p id= 'heading'> this is webspark week 3</p>"