fetch('/assets/json/data.json').then(async (data)=>{
    const body = await data.json();
    console.log(body)
    
}).catch((err)=> console.log(err));