let reselt = 0;

let username = prompt('welcome for you,can i know your name?');
alert("hello"+ username);
console.log(username);


let age =prompt("DO YOU THINK I AM 27 ?");
age.toUpperCase();
if (age =="YES" || age =="Y"){
alert("Unfortunately, it is the truth");
reselt++;
}
else if (age =="NO" || age =="N"){
alert("I humbly know this");
}



let study = prompt('Do you think programming is suitable for me?');
study.toUpperCase();
if (study == 'YES' || study == 'Y') {
  alert('I should become a programming fashionista');
reselt++;
} else if (study=="NO" || study =="N"){
  alert("Don't worry about it just your opinion");
}


let user = prompt('You think we got caught in a trap?');
user.toUpperCase();
if (user == 'YES'|| user == 'Y' ){
alert('MAKE SURE NOT THINK');
reselt++;
} else if (user =="NO" || user =="N"){
alert('MAKE SURE NOT THINK');
}


let answer = prompt("Do you think I'm enjoying it ?");
answer.toUpperCase();
if (answer == 'NO'  || answer =='N'){
alert('ITS OKY ,LIFE IS HARD')
} else if  (answer=="YES" || answer =="Y"){
  alert ('so much wallha');
  reselt++;
}


  let f;
  let a;
  for (f=0; f < 4 ;f++){
 let put= prompt("Guess what is my birth month,'Hint: you have only 4 tries,?");
if ( put > 8) {
  alert("It's less than that");
}
 else if (put < 8){
    alert("It's bigger than that");
    console.log(put);
  }
else if (put==8){
  alert("You guessed it well");
  f=8;a=true;
  reselt++
}
}
if(f==4 && a!=true) {
  alert('sorry you lose your attempt ,my birth month lovely 8');
}






let i;
let m;
let array = ['study', 'food' ,'travel','video','books','music']

for( i=1;i<=6;i++){
let fan=prompt('In your opinion, what are my favorite hobbies?"you have 6 tries"').toLowerCase()
if(fan==array[0] || fan==array[1] || fan==array[2] || fan==array[3] || fan==array[4] || fan==array[5] ){
 alert("Now you start to know me"+fan)
 reselt++;
 m=true;
 i=7;
 break;
}else if (fan!=array[0] || fan!=array[1] || fan!=array[2] || fan!=array[3] || fan!=array[4] || fan!=array[5] ){
  alert("NO ITS NOT MY MOOD")

}
}
if (i==7 && m!=true){
  alert('soory its finish'+array)
}
alert('your score is ' + reselt);
console.log(reselt);

  document.write('welcom in my littel world');

 
 
  