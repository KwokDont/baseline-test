'use strict';

function collectSameElements(collectionA, objectB) {
  var returnArr = new Array();
  for(var i in collectionA) {
    for(var j = 0; j < objectB['value'].length ; j++){
        if(collectionA[i]['key'] === objectB['value'][j]){
          returnArr.push(collectionA[i]['key']);
        }
    }
  }
  return returnArr;
}
