const sentence = "hello there from lighthouse labs";
const arr = sentence.split('');
//console.log(arr);
  for(let i=0; i< arr.length; i++){
    setTimeout(() => process.stdout.write(arr[i]), i * 50);
    if (i === arr.length -1){
      setTimeout(() => process.stdout.write('\n'), arr.length*50)
    }
  }


 // <= 1s delay to make it noticeable. Can dial it down later.
