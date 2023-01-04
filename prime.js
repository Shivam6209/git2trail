let num=14;
let prime=true;
for(let i=2;i<num;i++){
    if(num%i==0){
        prime=false;
    }
}
if(prime){
    console.log("prime")
}
else{
    console.log("Not prime")
}