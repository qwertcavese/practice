var arry=[175,50,25]

function rd(){
    
    var z=arry.reduce((total,num)=>{ //"reduce" passes two arguments so, here first "total" will take value 175
        // and then it will add 50 and value will again be stored in "total" so now value of "total" is 200
        // then again it will add 25 so value of "total" will be 250 and it will be stored in z
        // so we can say that "reduce" will add succeding values and everytime store it in "total" and succeding
        // number will be stored in "num"
        return total+num;
    })
    document.getElementById("ans").innerHTML=z;
}