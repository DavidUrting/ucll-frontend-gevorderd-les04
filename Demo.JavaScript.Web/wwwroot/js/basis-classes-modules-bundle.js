!function(e){var n={};function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)o.d(t,l,function(n){return e[n]}.bind(null,l));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=12)}([function(e,n){},function(e,n){console.log("*** output.js ***"),console.log("Een informatieve boodschap"),console.warn("Een waarschuwing."),console.error("Een fout."),document.getElementById("basics-output-dom").innerText="Deze tekst werd vanuit output.js gestuurd.",document.getElementById("basics-output-dom2").innerHTML="Je kan ook een HTML string genereren en invoegen.<ul><li>Zo kan je dynamisch HTML genereren</li><li>Later zullen we ook zien hoe we dat via de DOM kunnen doen.</li></ul>",document.getElementById("basics-output-dom3").value="Ook de value en styling kan je instellen.",document.getElementById("basics-output-dom3").className="bg-warning"},function(e,n){console.log("*** var-let-const.js ***"),console.log("- const");const o=3.14;console.log("PI: "+o);try{o=3.14159}catch(e){console.log("PI (changed): "+e)}console.log("- var"),console.log("-- var scoping"),function(){if(1===(e=1)){var e=2;console.log(e)}console.log(e)}(),console.log("-- var hoisting"),function(){console.log("1 "+e);var e=2}(),console.log("- let"),console.log("-- let scoping"),function(){{let e=2;console.log(e)}console.log(1)}(),console.log("-- geen let hoisting"),function(){try{console.log("1 "+e)}catch(e){console.log("Een 'let' variabele gebruiken vooraleer deze gedeclareerd is; is niet toegelaten.")}let e=2}()},function(e,n){console.log("*** types.js ***");console.log("Hello world");console.log(18);console.log(20.5);var o=["GIAdPG4","GIAdPG5"];console.log(o),console.log(o.length),console.log(o[0]),console.log(o[1])},function(e,n){console.log("*** exceptions.js ***");try{throw"Er is een onverwachte fout opgetreden, contacteer de helpdesk."}catch(e){console.error(e)}},function(e,n){console.log("*** conditional.js ***");var o=0;o=.05,console.log("reduction: "+100*o+"%");console.log("connecting...")},function(e,n){console.log("*** loops.js ***");for(var o=0;o<10;o++)5!==o&&console.log(o);for(;;){console.log("In while...");break}var t=!1;do{console.log("In do while..."),t=!0}while(!t)},function(e,n){console.log("*** functions.js ***");document.getElementById("basics-functions-decl").innerHTML=1+2,document.getElementById("basics-functions-expr").innerHTML=function(e,n){return e+n}(1,2),document.getElementById("basics-functions-arrow").innerHTML=((e,n)=>e+n)(1,2)},function(e,n){console.log("*** objects.js ***");var o={voornaam:"Tim",familienaam:"Berners-Lee",toString:function(){return this.voornaam+" "+this.familienaam}};for(var t in document.getElementById("basics-objects-www").innerHTML=o.toString(),o)console.log(t+": "+o[t])},function(e,n){for(let e=1;e<=7;e++){let n=Math.round(45*Math.random()),o=Math.max(1,n);document.getElementById("bal"+e).value=o}},function(e,n){console.log("*** input.js ***"),document.getElementById("basics-input-dom-in").addEventListener("input",(function(){document.getElementById("basics-input-dom-out").value=document.getElementById("basics-input-dom-in").value})),document.getElementById("basics-input-dom-button").addEventListener("click",(function(e){document.getElementById("basics-input-dom-out2").value=document.getElementById("basics-input-dom-in").value,e.preventDefault()}))},function(e,n){var o=new class{constructor(e,n){this._voornaam=e,this._familienaam=n}get voornaam(){return this._voornaam}get familienaam(){return this._familienaam}volledigeNaam(){return this.voornaam+" "+this.familienaam}}("Brendan","Eich");for(prop in document.getElementById("classes-objects-js").innerHTML=o.volledigeNaam(),o)console.log(prop+": "+o[prop])},function(e,n,o){"use strict";o.r(n);o(0),o(1),o(2),o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11);function t(e,n){var o=new XMLHttpRequest;o.onreadystatechange=function(){!function(e,n){if(4===e.readyState){var o;o=e.responseText?JSON.parse(e.responseText):200===e.status?{status:"success"}:e.status>=400&&e.status<500?{status:"fail",data:{message:"Status code "+e.status+" returned."}}:{status:"error",message:"Status code "+e.status+" returned."},n&&n(o)}}(o,n)},o.open("GET",e,!0),o.send()}class l extends class{getWeatherForCurrentLocation(e){return null}}{static get apiKey(){return"e3c03bc457a2bca1463a28cfbf66b5a4"}getWeatherForCurrentLocation(e){!function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(n){e(n.coords.latitude,n.coords.longitude)})):setTimeout(e(null,null))}((function(n,o){t("http://api.openweathermap.org/data/2.5/weather?lat="+n+"&lon="+o+"&APPID="+l.apiKey,(function(n){n&&n.weather&&n.weather[0]?e(n.weather[0].description):(e("?"),console.warn(n))}))}))}}(new l).getWeatherForCurrentLocation((function(e){document.getElementById("modules-example").innerHTML=e}))}]);
//# sourceMappingURL=basis-classes-modules-bundle.js.map