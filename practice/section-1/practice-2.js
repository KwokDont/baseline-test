'use strict';

function collectSameElements(collectionA, collectionB) {
  var returnArr = new Array();
  for(var i = 0 ; i < collectionA.length; i++){
    for(var j = 0; j < collectionB[0].length ; j++){
        if(collectionA[i] === collectionB[0][j]){
          returnArr.push(collectionA[i]);
        }
    }
  }
  return returnArr;
}
