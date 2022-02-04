
// Given Array
arr = [2,7,11,15,14,5,9,6];


// increase each counter
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){ 
        if(arr[i]+arr[j]==19){
             document.write("The Index Are : " + i , ",",  j);
        }
    }
}
