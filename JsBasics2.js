function magic_multiply(x, y){
    var result = [];
    if (Array.isArray(x)){
         for(var i = 0; i < x.length; i ++){
          x[i] = x[i] * y;
          result.push(x[i]);
      }
    } else{
    result = x * y;
  }
  if(typeof y === 'string'){
    console.log('Can not multiply by string')
  }
    return result;
}
  let test1 = magic_multiply(5, 2);
  console.log(test1);

  let test2 = magic_multiply(0, 0);
  console.log(test2);

  let test3 = magic_multiply([1, 2, 3], 2);
  console.log(test3);

  let test4 = magic_multiply(7, "three");
  console.log(test4);

  let test5 = magic_multiply("Brendo", 4);
  console.log(test5);
