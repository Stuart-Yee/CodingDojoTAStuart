console.log("begin program");

setTimeout(()=> {
    console.log("first message");
    setTimeout(()=>{
        console.log("second message");
    },
    1000);
},
1000);

