var list=[1,5,8,5,9,3]

function add1(){
    var z=document.getElementById("txt").value;
    list.push(z)
    document.getElementById("ans").innerHTML=list;
    console.log(list);
}

function remove1(){
    var z=document.getElementById("txt").value;
    for(var i=0;i<list.length;i++){
        for(var j=i;j<list.length;j++){
            if(z==list[j]){
                list.splice(j,1);
            }
        }
        
    }
    document.getElementById("ans").innerHTML=list;

    console.log(list);
}



// function remove1(){
//     var x=list.filter(duplicate1)
//     console.log(x);
// }

// function duplicate1(z){
   
//     return z!=document.getElementById("txt").value
    
// }

