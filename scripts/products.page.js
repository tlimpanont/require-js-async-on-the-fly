define([
    'loadAsync'
], function(loadAsync) {
    
   loadAsync.then(function(asyncModule) {
       var rangeSlider = asyncModule.rangeSlider;
        setInterval(function() {
            rangeSlider.element.value = (Math.floor(Math.random() * 100));
            document.getElementById('rangeValue').innerHTML = 'Range Slider value: ' + parseInt(rangeSlider.element.value);
        }, 800);
   });
  
});