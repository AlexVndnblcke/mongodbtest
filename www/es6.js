//Instead of:
var code = function(){
  let name = "will";
  let thing = "party";
  //let greet = "hi, my name is "+name+ " and i like to "+thing+".";

  //==>
  let greet = `hi, my name is ${name} and i like to ${thing}.`;
  console.log(greet);
};

code();

var second = function(){
  //Video 2
  let a= 1;
  for (let j = 0;j<20;j++){
    let b = 2;
  }
  //console.log(b); //doesn't logs because local letiable.

  const bar = 2;
  //bar = 5; //Does not work, because const.
  const bar2 = {a:1};
  bar2.a = 5; //does work.
  console.log(bar2.a);
}

second();
