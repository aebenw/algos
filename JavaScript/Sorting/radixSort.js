function getDigit(num, place){
    return Math.floor(Math.abs(num) /Math.pow(10, place)) % 10;
}

// getDigit(13232, 2)

function digitCount(num){
    if (num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


// digitCount(3234)

function mostDigits(nums){
   let maxDigits = 0;
   for (let i =0; i<nums.length; i++){
       maxDigits=Math.max(maxDigits, digitCount(nums[i]));
   }
   return maxDigits;
}

// mostDigits([1234, 3, 445, 3, 534])

//define a function that takes a set of numbers
//figure out what the amount of digits in the largest number is
//make a for loop that runs that amount of times
//for each iteration
    //create a bucket for each digit 0-9
    //take each number and put it in a bucket depending on its loop iteration digit
    //replace our existing array and replace them with the value of each bucket
    //return the list

function myRadixSort(nums){
   let j = mostDigits(nums)

   for (let k =0; k < j; k++){
       let bucket = {}
       for (let i=0; i < nums.length; i++){
           let number = getDigit(nums[i], k)

           if(!bucket[number]){
            bucket[number] = [nums[i]]
            } else {
             bucket[number] = [...bucket[number], nums[i]]
            }
       }
       nums = []
       for(i in bucket){
          nums = nums.concat(bucket[i]);
        }

   }
   return nums;
}

function coltsRadixSort(nums){
   let j = mostDigits(nums);

   for (let k =0; k < j; k++){
          let bucket = Array.from({length: 10}, () => []);

       for (let i=0; i < nums.length; i++){
           let number = getDigit(nums[i], k);
            bucket[number].push(nums[i]);
           }
           nums = [].concat(...bucket);
   }
   return nums;
}

myRadixSort([1234, 3, 445, 3, 534]);
