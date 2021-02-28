//находит самую длинную строку вывод:[строка, её длинна]
function FindStringWithMaxLength(array){
    let lengthItemArray = array.map((item)=>item.length);
    let maxLength = Math.max.apply(null, lengthItemArray);
    return [array[lengthItemArray.indexOf(maxLength)] , maxLength];
}
//находит самыю длинныю строки в сгруппированном массиве([ ["a", "aaa"], ["bbb", "b"], ... ]) вывод:[[строка, её длинна], [строка, её длинна]]
function FindAllStringsWithMaxLength(groupedArray){
    let result = [];
    groupedArray.forEach((item)=> result.push(FindStringWithMaxLength(item)));
    return result;
}
//возвращает новый сгруппированый массив вида [ ["a", "aaa"], ["bbb", "b"], ... ]
function TransformToGroupedArray(array, uniqueLetters){
    let result = [];
    uniqueLetters.forEach((letter)=> result.push(array.filter((item)=> item[0] == letter)));
    return result;
}
//находит все уникальные буквы в строках массива вывод: ["a", "b", "c" ...]
function FindUniqueLetters(array){
    return arr.map((x)=> x[0])
    .filter((x, index, self)=>self.indexOf(x) === index);
}

function FindUniqueStringsWithMaxLength(arr){
    let uniqueLetters = FindUniqueLetters(arr);
    let groupedArray = TransformToGroupedArray(arr, uniqueLetters);
    let result = FindAllStringsWithMaxLength(groupedArray);
    return result;
}


let arr = ["aaaaaaa", "bbb", "b", "b", "aaa", "ccccccccc", "aaaaaa", "qqqqqqqqqqqqqqqqq", "q"];
let result = FindUniqueStringsWithMaxLength(arr);

console.log(result);