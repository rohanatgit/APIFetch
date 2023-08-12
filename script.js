function abc(add){
    return 5+add(3,2)+5;
}
function add(a,b){
   return a+b;
}

const res=abc(add);

console.log(res)

