 const a=[1,2,3,4,5,6,7,8];

 a.filter()



 function isEven(num){
    return num%2==0;
 }


 function isOdd(num)
 {
    return num%2!=0;
 }


//  const b=a.filter(isEven);

//  console.log(b);



//Map --> jo ki another function ka leta h us value ko leta hai aur dusre array m dalta jata hai.

function square(num){
    return num*num;
}

const b=a.map(square);

console.log(b);