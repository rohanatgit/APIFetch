async function getCheese(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
              res('chesse le lo Bhaiya JI')
        },1000)
    })
}


async function makeDough(cheese){
     return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('${cheese} dough DO')
        })
     })
}

async function makePizza(dough){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            resolve('${dough} pizza Lo');
        },2000)
    })
}

async function orderPizza(){
    const cheese=await getCheese();
    console.log('now we have cheese');

    const dough=await makeDough(cheese);

    console.log('now we have dough')

    const pizza =await makePizza(dough);
    return pizza;
}

const pizza=orderPizza.then((pizza)=>{
    console.log(pizaa);
})