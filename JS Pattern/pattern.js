// function square(n){
// for(i=1;i<=n;i++){
//     pat= "";
//     for(j=1;j<=n;j++){
//         pat+="* "
//     }
//     console.log(pat)
// }}
// square(5);

// function triangle(n){
//     for(i=1;i<=n;i++){
//     pat= "";
//     for(j=1;j<=i;j++){
//         pat+="* ";
//     }
//     console.log(pat)
// }
// }
// triangle(6);
// function mirrortriangle(a){
//     for(i=1;i<=a;i++){
//         pat="";
//     for(j=1;j<=a-i;j++){
//         pat+="  "
//     }
//     for(k=1;k<=i;k++){
//         pat+=" *"
//     }
//     console.log(pat)

// }
// }
// mirrortriangle(6)
// function invttriangle(b){
//     for(i=b;i>0;i--){
//         pat="";
//         for(j=1;j<=i;j++){
//             pat+=" *"
//         }
//         console.log(pat)
//     }
// }
// invttriangle(6);
// function pyramid(c){
//     for(i=1;i<=c;i++){
//         pat="";
//     for(j=1;j<=c-i;j++){
//         pat+=" "
//     }
//     for(k=1;k<=i;k++){
//         pat+=" *"
//     }
//     console.log(pat)

// }
// }

// pyramid(6)
// function diamond(d){
//     for(i=1;i<=d;i++){
//         pat="";
//     for(j=1;j<=d-i;j++){
//         pat+="  "
//     }
//     for(k=1;k<=i;k++){
//         pat+=" *"
//     }
//     console.log(pat)
//     }
//     for(i=d-1;i>0;i--){
//         patt="";
//     for(j=1;j<=d-i;j++){
//         patt+=" "
//     }
//     for(k=1;k<=i;k++){
//         patt+=" *"
//     }
//     console.log(patt)

// }
// }
// diamond(6)
// function numberpyramid(c){
//     for(i=1;i<=c;i++){
//         pat="";
//     for(j=1;j<=c-i;j++){
//         pat+=" "
//     }
//     for(k=1;k<=i;k++){
//         pat+=" "+i;
//     }
//     console.log(pat)

// }}
// numberpyramid(5)
// function pascalspuramid(c){
//     for(i=1;i<=c;i++){
//         pat="";
//     for(j=1;j<=c-i;j++){
//         pat+=" "
//     }
//     for(k=1;k<=i;k++){
//         pat+=" "+i;
//     }
//     console.log(pat)

// }

// }

// function hollowsquare(n){
//     for(i=1;i<=n;i++){
//         pat="";
//         if(i==1 ||i==n){
//             for(j=1;j<=n;j++){
//             pat+=" *"
//         }}
//     else{
//         for(k=1;k<=n;k++){
//             if(k==1||k==n){
//                 pat+=" *"
//             }
//             else{
//                 pat+="  "
//             }
//         }

//     }
//     console.log(pat);

//     }
// }
// hollowsquare(6)
//     function hourglass(d){
//         for(i=d;i>0;i--){
//             if(i%2!=0){
//             patt="";
//             for(j=1;j<=d-i;j++){
//                 patt+=" "
//             }
//             for(k=1;k<=i;k++){
//                     patt+=" *"
//             }
//                 console.log(patt)

//     }}
//     for(i=2;i<=d;i++){
//             if(i%2!=0){
//                 pat="";
//             for(j=1;j<=d-i;j++){
//                 pat+=" "
//             }
//             for(k=1;k<=i;k++){
//                 pat+=" *"
//             }
//             console.log(pat)
// }}}
// hourglass(7)
function PascalsPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let pat = "";
    for (j = 1; j <= rows - i; j++) {
      pat += " ";
    }
    for (let j = 0; j <= i; j++) {
      pat += pascalNumber(i, j) + " ";
    }
    console.log(pat);
  }
}

function pascalNumber(row, column) {
  if (column === 0 || column === row) {
    return 1;
  } else {
    return pascalNumber(row - 1, column - 1) + pascalNumber(row - 1, column);
  }
}

PascalsPyramid(5);
