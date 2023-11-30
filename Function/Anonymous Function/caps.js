//anonymous
let str1 = "hello";

function caps(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

console.log(caps(str1));


 // IIFE

 (function (str) {
  str = str.toUpperCase();

  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  str = str.join(' ');

  console.log(str);

  return str;
})("my name is rubila krishnan");




