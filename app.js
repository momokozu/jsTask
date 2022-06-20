let i ;
for ( i= 1; i<= 50; i++){

  if((i%4)==0){
    console.log('4で割り切れる数です。'+ i );
  }

  if(i==10){
    console.log('今'+i+'回ループしました。');
  }
  if(i==20){
    console.log('今'+i+'回ループしました。');
  }
  if(i==30){
    console.log('今'+i+'回ループしました。');
  }
  if(i==40){
    console.log('今'+i+'回ループしました。');
  }

}
alert((i-1)+'回カウントが終わりました。');