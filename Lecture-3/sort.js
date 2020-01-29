var arr=[121,11,133,4,5,9,8,7];
console.log(arr.sort());//sort on the basis of ascii value(dictionary sort)
function comparator(x,y){
    if(x>y){
        return 1;
    }else if(x<y){
        return -1;
    }else if(x==y){
        return 0;
    }
}
console.log(arr.sort(comparator));
console.log(arr);//change actual array so it is mutating

//Que Write a JavaScript function to sort the following array of objects by title value.  
  var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
    }
    ];

    function comparator2(obj1,obj2){
        if(obj1.title>obj2.title){
            return 1;
        }else if(obj1.title<obj2.title){
            return -1;
        }else if(obj1.title==obj2.title){
            return 0;
        }
    }
    console.log(library.sort(comparator2));