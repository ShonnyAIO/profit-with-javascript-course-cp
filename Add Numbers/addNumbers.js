console.log('Hola');

function addNumbers(num1, num2){
    return num1 + num2;
}

//console.log(addNumbers(2,5));
//console.log(addNumbers(5,5));
//console.log(addNumbers(15,5));

function convertMinutesToSecond(num1){
    return num1*60;
}

//console.log(convertMinutesToSecond(3));
//console.log(convertMinutesToSecond(1));

function yourAgeInSeconds(age){
    return age*12*30*24*60*60;
}

//console.log(yourAgeInSeconds(24));



function getFirstItem(items){
    return items[0];
}

let items = ["Banana", "GodFather", "ShawShank", "Pickle"];

console.log(getFirstItem(items));

// less than or equal to 7 ?
// bad movies
// good movies
// put them in 2 differents buckets

function badOrGoodMovie(movie_rating){
    // badOrGoodMovie(6) - "bad"
    // badOrGoodMovie(7) - "good"
    // badOrGoodMovie(9.2) - "good"
    if(movie_rating < 7){
        return console.log("bad movie");
    }else{
        return console.log("good movie");
    }
}
/*
badOrGoodMovie(6);
badOrGoodMovie(7);
badOrGoodMovie(9.2);
*/

// check if a string is empty
function isEmptyString(some_string){
    //isEmptyString("") - True
    //isEmptyString("The GodFather") - False
    if(some_string == ""){
        return true;
    }else{
        return false;
    }
}
/*
console.log(isEmptyString(""));
console.log(isEmptyString("The GodFather"));
*/

function findMin(numbers){
    // findMin([5, 2, 9, 8, 7, 3] - 2);
    // 1) Label minimum
    // 2) Loop through the array and check if current items is less than the current min.
    // 3) If true then replace current min with the current item
    let minimum = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < minimum){
            minimum = numbers[i];
        }
    }
    return minimum;
}

console.log(findMin([5, 2, 9, 8, 7, 3]));
console.log(findMin([5, 8, 9, 8, 7, 3]));

function findMaxHelper(numbers, start){
    // findMax([5, 2, 9, 8, 7, 3] - 9);
    // 1) Label maximum
    // 2) Loop through the array and check if current items is greater than the current max.
    // 3) If true then replace current max with the current item
    let maximum = numbers[start];
    let max_location = start;
    for(let i = start; i < numbers.length; i++){
        if(numbers[i] > maximum){
            maximum = numbers[i];
            max_location = i;
        }
    }
    return {max_number : maximum, max_index: max_location};
}

// console.log(findMaxHelper([5,2,9,3,7], 0));

function bestRatingsFirts(numbers){
    /* Start my loop in index 1
    Find max from remaining list
    Find new max and know it´s location
    */
    for(let j = 0; j < numbers.length-1; j++){

        //findMax
        max = findMaxHelper(numbers, j);
        max_num = max['max_number'];
        max_location = max['max_index'];

        numbers[max_location] = numbers[j];
        numbers[j] = max_num;
    }
    return numbers;
}//end-function

console.log(bestRatingsFirts([5, 8, 2, 9, 3, 10]));
console.log(bestRatingsFirts([9, 8, 1, 12, 3, 10]));
console.log(bestRatingsFirts([5, 9, 8, 1, 12, 3, 10]));