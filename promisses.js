function orderPizza(){//promise create kiya ja raha hay 
    return new Promise(function (resolve,reject){
      setTimeout(()=>{
        const pizza='pizza';
        resolve(pizza);
      },2000)
    })
}


const pizzaPromise=orderPizza();

pizzaPromise
         .then((pizza)=>{
            console.log('my pizza',pizza);
         })