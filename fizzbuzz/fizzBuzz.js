function fn() {

  for (let index = 0; index < 101; index++) {

  const isFizz = index % 3 === 0;
  const isBuzz = index % 5 === 0;
  /*
   let result;

  if (isFizz && isBuzz) {
    result = ('FizzBuzz');
  } else if (isFizz) {
    result = ('Fizz');
  } else if (isBuzz) {
    result = ('Buzz');
  } else {
    result = (index);
  }
  console.log(result);
  }
  */

   const result =
   isFizz && isBuzz
    ? 'FizzBuzz'
    : isFizz
    ? 'Fizz'
    : isBuzz
    ? 'Buzz'
    : index;

  console.log(result);
  }
}

fn();