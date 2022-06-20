for (let i= 1; i<= 50; i++){
  console.log(i);
  
  if((i%10)==0){
    console.log('今'+i+'回ループしました。');
  }

  if((i%4)==0){
    console.log('4で割り切れる数です。'+ i );
  }

}
console.log('50回カウントが終わりました。');