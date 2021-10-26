function symmectric(args) {
  var arrArgs = Array.prototype.slice.call(arguments);
  
  function compareArrays(arr1, arr2){
    var arr1red = arr1.reduce(function(collect, current){
      if(!arr2.includes(current) && !collect.includes(current)){
        collect.push(current);
      }
      return collect;
    },[]);
    
    var arr2red = arr2.reduce(function(collect, current){
      if(!arr1.includes(current) && !collect.includes(current)){
        collect.push(current);
      }
      return collect;
    },[]);
    return arr1red.concat(arr2red);
  }
  return arrArgs.reduce(compareArrays);
    
}

symmectric([1, 2, 3], [5, 2, 1, 4]);
symmectric([1, 2, 5], [2, 3, 5], [3, 4, 5]);
