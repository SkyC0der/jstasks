function japanese(num) {
    let words = [];
    for (let index = 1; index <= num; index++) {
        if (index % 2 == 0 && index % 3 == 0 && index % 5 == 0){
            words.push("yu-gi-oh");
        }else if (index % 3 == 0 && index % 5 == 0){
            words.push("gi-oh");
        }else if(index % 2 == 0 && index % 5 == 0){
            words.push("yu-oh");
        }else if (index % 2 == 0 && index % 3 == 0){
            words.push("yu-gi");
        }else if (index % 2 == 0){
            words.push("yu");
        }else if (index % 3 == 0){
            words.push("gi");
        }else if (index % 5 == 0){
            words.push("oh");
        }else{
            words.push(index)
        }
    }
    return words;
}
japanese(100);
japanese(50);
japanese(432);
console.log(japanese(100));