//for each//
Array.prototype.myEach = function(callbackFn) {
    for(let i=0;i<this.length;i++)
    {
        if(this[i] === undefined) {continue;}
        callbackFn(this[i],i,this);
    }
};

//map//
Array.prototype.myMap = function(callbackFn){
    const arr=[]; //empty array
    for(let i=0; i<this.length; i++){ //iterates through the array
        if(this[i] === undefined) {contine;}
        arr.push(callbackFn(this[i], i, this)); //
    }
};

Array.prototype.mySome = function(callbackFn){
    if(this.length==0){return false;}
    for(let i = 0; i< this.length; i++){
        if(callbackFn(this[i],i,this)){
            return true;
        }
    }
    return false;
};

//reduce//
Array.prototype.myReduce = function(callbackFn, intial_val){
    let res = intial_val;
    for(let i=0; i<this.length;i++){
        res = callbackFn(res, this[i],this);
    }
    return res;
};

//include//

Array.prototype.myIncludes = function(target){
    for(let i =0; i<this.length; i++){
        if(this[i]===target){
            return true;
        }
    }
    return false;
};

//IndexOf//
Array.prototype.myIndexOf = function(val, starting_val){
    if(starting_val === undefined){starting_val=0;} //edge case
    for(let i=0;i<this.length;i++){
        if(this[i] === val){
            return i;
        }
    }
    return -1;
};
//push//
Array.prototype.myPush = function(...args) {
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
  };

  //Last Index Of//

  Array.prototype.myLastIndexOf = function(val, fromIndex=(this.length-1)){
      //edge cases
      if(this.length == 0){return -1;}
      if(fromIndex < 0){
        fromIndex +=(this.length-1);
        if(fromIndex <0){return -1;}
      }
      else if (fromIndex >this.length-1){fromIndex=this.length-1;} 

      for(let i = fromIndex; i >=0; i--){
          if(this[i] === val){return index}
      }
      return -1;
  };

  //keys//
Object.myKeys = function(obj){
    let arr = [];
    Object.entries(obj).forEach(entry => {
        keys.push(String(entry[0])); });
    return keys;
};

//values//
Object.myValues = function(obj){
    let vals = [];
    Object.entries(obj).forEach(entry =>{
        values.push(entry[1]); })
    return values;
};

