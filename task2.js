let data = 
[
    {
    principal: 2500,
    time: 1.8
    },
    {
    principal: 1000,
    time: 5
    },
    {
    principal: 3000,
    time: 1
    },
    {
    principal: 2000,
    time: 3
    }
];
function interestCalculator(arr){
    let interestData = [];
    // For loop to iterate over the array and assign rate and interest properties
    for (let index = 0; index < arr.length; index++) {
       if (arr[index].principal >= 2500 && (arr[index].time > 1 &&  arr[index].time < 3)){
        arr[index].rate = 3;        
       }
       else if (arr[index].principal >= 2500 && arr[index].time >= 3){
        arr[index].rate = 4;
       }
       else if (arr[index].principal < 2500 || arr[index].time <= 1){
           arr[index].rate = 2;
       }
       else {
           arr[index].rate = 1
       }   
       arr[index].interest = (arr[index].principal*arr[index].rate*arr[index].time)/100;
       interestData.push(arr[index]);
    }
    console.log (interestData);
    return interestData;
}

interestCalculator(data);
