/*
setTimeout() = function in JS that allows you
schedule the execution of a function after aamout of time
(miliseconds). Times are approximate (varies based on the 
workload of the JS runtime env.)

setTimeout(callback, delay);
*/

setTimeout(function(){window.alert("Hello")}, 3000)