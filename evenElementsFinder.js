const containsOnlyNumbers=(array)=>{
    return array.every((element)=>{
        return typeof element=='number';
    })
}
const getEven=(numbers)=>{
    if(!Array.isArray(numbers)){
        throw new TypeError();
    }
    if(!containsOnlyNumbers(numbers)){
        throw new TypeError();
    }
    numbers=numbers.map(num=>num*3);
    return numbers.filter(num=>num%2==0);
}
const getEvenUsingReduce=(numbers)=>{
    if(!Array.isArray(numbers)){
        throw new TypeError();
    }
    if(!containsOnlyNumbers(numbers)){
        throw new TypeError();
    }
    const evenNumbersArray=numbers.reduce((evenNumbers,number)=>{
        if(number%2==0){
            evenNumbers.push(3*number);
        }
        return evenNumbers;
    },[]);
    return evenNumbersArray;
}
console.log(getEvenUsingReduce([1,2,3,4,5,6,7,8,9]))
module.exports={
    getEven:getEven,
    getEvenUsingReduce:getEvenUsingReduce
}