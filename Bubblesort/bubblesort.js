//- En JS ou Python, implémenter un *bubble sort* triant cette liste de 20 entiers :

let list = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42];

/**
 * Sorts the input array using the bubble sort algorithm.
 *
 * @param {array} arr - the array to be sorted
 * @return {array} the sorted array
 */
function bubbleSort(arr){
  let sorted;
  
  do{
    
    sorted = false;

    for(i=0; i<arr.length; i++){
      if(arr[i]>arr[i+1]){
        let elementTemp = arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=elementTemp;
        sorted = true
      }
   
    } 
    
  } while (sorted);
  
  return arr; 

}

console.log(bubbleSort(list));


    
