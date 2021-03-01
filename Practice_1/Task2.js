//находит самую длинную строку вывод:[строка, её длинна]
function FindStringWithMaxLength(array){
    let lengthItemArray = array.map((item)=>item.length);
    let maxLength = Math.max.apply(null, lengthItemArray);
    return [array[lengthItemArray.indexOf(maxLength)] , maxLength];
}
//находит самыю длинныю строки в сгруппированном массиве([ ["a", "aaa"], ["bbb", "b"], ... ]) вывод:[[строка, её длинна], [строка, её длинна]]
function FindAllStringsWithMaxLength(groupedArray){
    return groupedArray.reduce((result, item)=> [...result, FindStringWithMaxLength(item)], []);
}
//возвращает новый сгруппированый массив вида [ ["a", "aaa"], ["bbb", "b"], ... ]
function TransformToGroupedArray(array, uniqueLetters){
    return uniqueLetters.reduce((result, letter)=> [...result, array.filter((item)=> item[0] == letter)], []);
}
//находит все уникальные буквы в строках массива вывод: ["a", "b", "c" ...]
function FindUniqueLetters(array){
    return arr.map((x)=> x[0])
    .filter((x, index, self)=>self.indexOf(x) === index);
}
//ввод: ["aaa", "b", "b", "aa"], вывод: [ ["aaa", 3], ["b", 1] ]
function FindUniqueStringsWithMaxLength(arr){
    let uniqueLetters = FindUniqueLetters(arr);
    let groupedArray = TransformToGroupedArray(arr, uniqueLetters);
    let result = FindAllStringsWithMaxLength(groupedArray);
    return result;
}


let arr = ["aaaaaaa", "bbb", "b", "b", "aaa", "ccccccccc", "aaaaaa", "qqqqqqqqqqqqqqqqq", "q"];
let result = FindUniqueStringsWithMaxLength(arr);

console.log(result);
