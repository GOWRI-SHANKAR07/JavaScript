let a = 10;
    b = 0;

try{
    if(b == 0){
        throw('Divide by zero error!')
    } else{
        let result = a / b;
        console.log(result);
    }
}catch(e){
    console.log("Error: ", e);
}
finally{
    console.log("Exceptions Handled!");
}


