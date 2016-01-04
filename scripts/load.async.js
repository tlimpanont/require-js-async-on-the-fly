define(['Promise'], function(Promise) {
    
    var loadRangeSlider = function() {
        return new Promise(function(resolve) {
            var sliderDOM = document.getElementById('rangeSlider');
            if(sliderDOM) {
               require(["range.slider"], function(RangeSlider) {
                   resolve(new RangeSlider(sliderDOM));
               });  
            }
        })
    };
    
    return Promise.props({ 
        rangeSlider: loadRangeSlider()
    });
});