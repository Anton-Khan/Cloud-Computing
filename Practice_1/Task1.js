function Sum(arr, index=0, sum=0){
    if (index >= arr.length ) {
        return sum;
    }else{
        return Sum(arr, index+1, sum + arr[index]);
    }
}

let arr = [1,2,3,4,5,6,7,8];
let result = Sum(arr);

console.log(result);
 
