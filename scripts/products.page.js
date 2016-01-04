define([
    'loadAsync'
], function(loadAsync) {
    
    /*
    expect this function to always resolve
    */
   loadAsync.then(function(asyncModules) {
       if(asyncModules && asyncModules.rangeSlider) {
           // do we have a rangeSlider module and can we get the DOM element of the module?
           var rangeSlider = asyncModules.rangeSlider;
           setInterval(function() {
               rangeSlider.element.value = (Math.floor(Math.random() * 100));
               document.getElementById('rangeValue').innerHTML = 'Range Slider value: ' + parseInt(rangeSlider.element.value);
           }, 800);       
       }
   });
});