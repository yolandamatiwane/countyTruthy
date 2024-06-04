let array = [true,false,true,true,true,true,false,true,false,true,true]

function search(value,index){
    return value.filter((x)=> x == index).length;
}

console.log(search(array,false))
