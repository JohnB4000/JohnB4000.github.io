let clickMe = document.getElementById("click-me");

clickMe.addEventListener("click", e => {
	clickMe.innerHTML = "Now click me again";
})

document.body.style.height = '200pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script.setAttribute('data-height', '40px');
script.setAttribute('data-position', 'top');
script.setAttribute('data-message', "We use cookies! Aren't they delicious!");
script.setAttribute('data-bg', 'black');
script.setAttribute('data-fg', 'white');
document.head.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');

//   console.log( initCookieConsent );
}
console.log('ready');