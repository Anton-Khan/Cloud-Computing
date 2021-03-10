function ConvertStringsToLengthItemArray(array){
    return array.map((item)=>item.length);
}
//находит самую длинную строку вывод:[строка, её длинна]
function FindStringWithMaxLength(array, lengthArray){
    return [array[lengthArray.indexOf(Math.max.apply(null, lengthArray))], Math.max.apply(null, lengthArray)];
}
//находит самыю длинныю строки в сгруппированном массиве([ ["a", "aaa"], ["bbb", "b"], ... ]) вывод:[[строка, её длинна], [строка, её длинна]]
function FindAllStringsWithMaxLength(groupedArray){
    return groupedArray.reduce((result, item)=> [...result, FindStringWithMaxLength(item, ConvertStringsToLengthItemArray(item))], []);
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
function FindUniqueStringsWithMaxLength(array){
    return FindAllStringsWithMaxLength(TransformToGroupedArray(array, FindUniqueLetters(array)));
}

let arr = ["aaaaaaa", "bbb", "b", "b", "aaa", "ccccccccc", "aaaaaa", "qqqqqqqqqqqqqqqqq", "q"];
let result = FindUniqueStringsWithMaxLength(arr);

console.log(result);
