// // Assignment 1: Create and Modify an Object 
// student={
//     name:"Nikhil",
//     age:22,
//     grade:"O"
// }
// student.subject="Math"
// // console.log(Object.entries(student))
// student.grade="A"
// console.log(Object.entries(student))
// delete(student.age)
// console.log(Object.entries(student))

// // Assignment 2: Nested Object 
// book={
//     title:"Sleep",
//     author:"Nikhil",
//     details:{
//         pages:100,
//         genre:"Lazy"
//     }
// }
// page=book.details.pages;
// genr=book.details.genre;
// console.log("Pages:"+page+", Genre:"+genr)

//Assignment 3: Looping 
product={
    name:"book",
    price:200,
    stock:"Full"
}
for(let key in product){
    console.log(key+":"+ product[key])
}

//Assignment 5:Compare Objects
person1={
    name:"Nikhil",
    age:22

}
person2={
    name:"Saahir",
    age:21
}
console.log("Comparison of name is:",person1.name===person2.name)
console.log("Comparison of age is:",person1.age===person2.age)
