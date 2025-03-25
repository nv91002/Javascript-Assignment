// console.log('l' == 2)
// let a={name:'Nikhil'}
// z={...a}
// z.name='nihkil'
// console.log(a.name);console.log(z.name);
// function curryfucntion(a){
//     return function(b){
//         const mult=a*b;
//         return function(c){
//             return res=mult*c
//         }
//     }
// }
// console.log(curryfucntion(2)(3)(4))


// function mergetwostr(str1,str2){
//     let res='';
//     if(str1.length==str2.length){
//         for(let i=0;i<str1.length;i++){
//             res= res+ str1[i]+str2[i]
//         }
//     }
//     else if(str1.length<str2.length){
//         for(let i=0;i<str1.length;i++){
//             res= res+str1[i]+str2[i]
//         }
//         // console.log(str2.slice(str1.length-1,str2.length-str1.length))
//            substr=str2.slice(str1.length,str2.length)
//            res=res + substr;
//     }
//     else if(str1.length>str2.length){
//         for(let i=0;i<str2.length;i++){
//             res= res+str1[i]+str2[i]
//         }
//            res=res + str1.slice(str2.length,str1.length)
//     }
//     return res;

// }

// console.log(mergetwostr('hello','world 123'))
// console.log(mergetwostr('hello 123','world'))
// console.log(mergetwostr('hello','world'))
  

// function flattenarr(){
//     arr=[[1,2],[3,4],[5,6]]
//     arr1=[]
//     for(let i=0; i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             arr1.push(arr[i][j])
//         }
//     }
//     return arr1
// }
// console.log(flattenarr())
let x = 5;
let y = 10;

if (x < y) {
      console.log("x is less than y");
} else if (x > y) {
      console.log("x is greater than y");
} else {
      console.log("x is equal to y");
}