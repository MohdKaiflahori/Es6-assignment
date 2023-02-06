let arr = [10,2,3,4,5];
function reduce(arr , cb){
    let acc = arr[0];
    for(let i=1 ; i<arr.length ; i++){
        acc = cb(arr[i],acc );
    }
    return acc;
}
function sum(v,acc){
    return v*acc;
}
console.log(reduce(arr , sum ));