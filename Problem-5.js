function removeDuplicate(arr){
    let unique = [];
    for(let i = 0;i<arr.length;i++){
        let found = false;

        for(let j=0;j<unique.length;j++){
            if(arr[i]===unique[j]){
                found = true;
                break;
            }
        }
        if(!found){
            unique.push(arr[i]);
        }
    }
    return unique;
  
}

  console.log(removeDuplicate([1,2,2,3,4,4,5]))