function reversearr(arr){
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed.push(arr[i]);
    }
    console.log(reversed)
}
arr1=[1,2,3,4];
reversearr(arr1)

function secondlargest(arr){
    let l=-Infinity;
    let s=-Infinity;
    for(num of arr){
        if(num>l){
            s=l;
            l=num;
        }
        else if(num>s && num<l)
        {
            s=num;
        }
    }
    console.log(s);
}
arr2=[11,21,22,31,24,41,1234,379,91];
secondlargest(arr2)

function merge(ar1,ar2){
    console.log([...new Set([...ar1, ...ar2])])
}
merge([1,2,3],[1,3,4,5]);

function frequency(arr){
    let freq={};
    for(let num of arr){
        freq[num]=(freq[num] || 0)+1;
    }
    console.log(freq)
}
frequency([1,2,3,1,2,3,1,2,1,1,2,3])

function manualinclude(arr,value){
    for(let item of arr){
        if(item===value){
            return true;
        }
        return false;
    }
}
console.log(manualinclude([1,2,4,5],4))

function shiftleft(arr){
    if(arr.length===0){
        console.log(arr)
    }
    let first=arr.shift()
    arr.push(first)
    console.log(arr)
}
shiftleft(arr1)

function rotateright(arr,k){
    x=arr.slice(-k).concat(arr.slice(0,-k));
    console.log(x)
}
rotateright(arr1,2)

function removeduplicates(arr){
    return [... new Set(arr)];
}
console.log(removeduplicates([1,2,3,1,2,3,1,2,1,1,2,3]))

function multiplicationtable(){
    let table =[];
    for (let i=1;i<=10;i++){
        let row=[];
        for(let j=1;j<=10;j++){
            row.push(i*j);
        }
        table.push(row);
    }
    return table;
}
console.log(multiplicationtable());

function intersection(ar1,ar2){
    return ar1.filter(item=>ar2.includes(item));
}

console.log(intersection([1,2,3],[2,3,4]))