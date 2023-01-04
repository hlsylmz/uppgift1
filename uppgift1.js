
 const uppgift1= (tal) =>{
    if(tal<0){
    return 0
    }
    if(tal>=1&&tal<=10){
        return tal
    }
    if(tal>10){
        return (tal*tal)
    }
}
console.log(uppgift1(-1));
console.log(uppgift1(8));
console.log(uppgift1(12));
