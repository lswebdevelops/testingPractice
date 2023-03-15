const arr = [1,8,3,4,2,6];



function analyzeArray(list){
      
    let sum = 0;
    for(let i = 0; i < list.length; i++){
     sum += list[i]
    }  

    let averageArr = sum / list.length;
    let maxArr = Math.max(...list);
    let minArr = Math.min(...list)
    let lengthArr = list.length;
    return {
        average: averageArr,
        max: maxArr,
        min: minArr,
        length: lengthArr
    };
    
}

console.log(analyzeArray(arr));

const object = analyzeArray([1,8,3,4,2,6]);

console.log(object); // Output: {average: 4, max: 8, min: 1, length: 6}

module.exports = analyzeArray;
