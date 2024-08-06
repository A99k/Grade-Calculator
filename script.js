console.log("HEllo")
function submit(){
    let but=document.getElementById('button');
    let english =(document.getElementById('English').value);
    let physics =(document.getElementById('Physics').value);
    let chemistry =(document.getElementById('Chemistry').value);
    let math =(document.getElementById('Math').value);
    let computer =(document.getElementById('Computer').value);
    console.log(english,physics,chemistry,math,computer)


   let totalScore=500;
   if(english=='' || physics == '' || chemistry=='' || math==''|| computer==''){
    document.getElementById('showdata').innerHTML="Please Enter Data"
   }
   else{
   let obtainedScore=Number(english)+Number(physics)+Number(chemistry)+Number(math)+Number(computer);
   let percentage = (obtainedScore / totalScore) * 100; 
   let grades=""
   if (percentage <= 100 && percentage >= 80) { 
     grades = "A"; 
   } else if (percentage <= 79 && percentage >= 60) { 
     grades = "B"; 
   } else if (percentage <= 59 && percentage >= 40) { 
     grades = "C"; 
   } else { 
     grades = "F"; 
   } 

   if (percentage >= 39.5) { 
    document.getElementById( 
      "showdata"
    ).innerHTML =  
      ` Out of ${totalScore} your total is  ${obtainedScore}  
      and percentage is ${percentage}%. <br>  
      Your grade is ${grades}. You are Pass. `; 
  } else { 
    document.querySelector( 
      "#showdata"
    ).innerHTML =  
      ` Out of ${totalScore} your total is  ${obtainedScore}
      and percentage is ${percentage}%. <br>  
      Your grade is ${grades}. You are Fail. `; 
  } 
}


}