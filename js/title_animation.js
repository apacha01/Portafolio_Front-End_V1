const title = document.getElementById('presentation__title');

const typing = (time = 200, element = '') => {
  let elementChars = element.innerHTML.split('');
  element.innerHTML = '';
  let count = 0;
  let type = setInterval(function(){
  	element.innerHTML += elementChars[count]
    count++;
    if (count === elementChars.length)
      clearInterval(type)
  }, time);
};

typing(100, title);