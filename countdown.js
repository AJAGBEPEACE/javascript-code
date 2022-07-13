function startCountdown(){
    var userNumber = myNumber.value
   userNumber--
   myNumber.value = userNumber
   setInterval(startCountdown,1000);
    // alert(userNumber)
}
// if(userNumber>0){
//     timer()
// }else if(userNumber==0){
// }
// function timer(){
//     setInterval(startCountdown,1000);
//     if(userNumber)
// }