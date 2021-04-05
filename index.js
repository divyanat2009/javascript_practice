//find the number of sheep
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.filter(Boolean).length;
}

//Reverse a string
function reverseString(str){
  return str.split("").reverse().join("")
}
reverseString("hello");

//Check Duplicate

function checkDuplicate(){
  let arr = ["aa", "bb", "aa"];
  let result = false;
  //iterate over the array
  for(let i = 0; i < arr.length; i++){
    //compare the first and last index
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      result = true;
      break;
    }
  }
  if(result){
    console.log("Array contains duplicates");
  }else{
    console.log("Array does not contain duplicates")
  }
}
checkDuplicate();
