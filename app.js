let b = document.getElementsByClassName('container')[0].style.display = "block";
// console.log(b);
const next = (para) => {
    document.getElementsByClassName('container')[para - 1].style.display = "none"
    document.getElementsByClassName('container')[para].style.display = "block"
}
const result = () => {
    let score = 0;
    // console.log(score);
    if (document.getElementById('answer1').checked) {
        score++;
    }
    // console.warn(score)
    
   if (document.getElementById('answer2').checked) {
        score++
    }
     if (document.getElementById('answer3').checked) {
        score++
    }
    if (document.getElementById('answer4').checked) {
        score++
    }
    // console.log(score);
    //  if (document.getElementById("answer2").checked) {
    //     score++;
    // }
    // // console.log(score);
    // if (document.getElementById("answer3").checked) {
    //     score++;
    // }
    // // console.log(score);
    // if (document.getElementById("answer4").checked) {
    //     score;
    // }
    // console.log(score);
    if(score>=3){
        Swal.fire(
            'CONGURALTION',
            `<h1> Your Score is ${score} </h1>`,
            'success',
            )
            .then(function() {
                window.location = "./index.html";
            });
    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'Sorry you are fail '+"Score" + " " +score,
            text: 'BETTER LUCK NEXT TIME',
          })
          .then(function() {
            window.location = "./index.html";
        });
    }
    
        
        
}