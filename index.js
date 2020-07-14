// Your code goes here
let tag_p = document.querySelector('p')
//tag_p.innerHTML = 'This is really cool!'

document.addEventListener("DOMContentLoaded", function() {
    tag_p.innerHTML = 'This is really cool!'
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );