// შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი მასივი, 
// და ორი რიცხვი საწყისის ინდექსი და დასდასრულის ინდექსი, თქვენიო დავალებაა 
// გადმოცემული ინდექსიდან მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილი და დააბრუნოთ 
// ფუნქციიდან გამოიყენეთ for ციკლი

function manualSlice(arr,start,end){
    let slicedArr = new Array();
    for(let i = start; i < end; i++){
        slicedArr.push(arr[i]);
    }

    console.log(slicedArr);
}