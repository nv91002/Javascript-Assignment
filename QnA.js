
function charstr(x) {
    // x=prompt("Enter a String:");
    const obj = {};
    for (char of x) {
        obj[char] = (obj[char] || 0) + 1;
    }
    // console.log(obj)
    arr=[]
    arr2=[]
    for(key in obj){
        if(obj[[key]]===1){
            arr.push(key)
        }
        else{
            arr2.push(key)
        }
    }
    x=arr[0];
    len=Object.entries(obj).length
    if(arr2.length==len){
       return "No Unique Characters";
    }
    return x;

    
}
console.log(charstr('aabccdeff'));
console.log(charstr('accabbeedd'));
