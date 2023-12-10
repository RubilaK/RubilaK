const str='hello rubila';
titleCase = (str) => {
    str = str.toUpperCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');

  } 
  console.log(titleCase(str));

  
