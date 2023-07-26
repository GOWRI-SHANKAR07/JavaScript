 (function(...num){
    const message = "Hello! I am inside the self invoking function";
    console.log(message);

    let total = 0

    for(let i = 0; i < num.length; i++ ){
        total += num[i]; 
    }
    console.log(total);

 })(1, 4, 2.5);