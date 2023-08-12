// const response=fetch('https://dummyjson.com/products/1')
async function fetchData(){
    try{
 const response=await fetch('https://dummyjson.com/products/1');
 console.log(response); 
 const jsonData=response.json();
 console.log(jsonData);  
}
catch(err){
    console.log(err);
}
}




fetchData();


// url=unform resorce locator