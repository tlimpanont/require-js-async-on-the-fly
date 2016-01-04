define(['Promise'], function(Promise) {
    
    // Example of another async UI component based on the element's visibility on page
    /*
    var loadNewAsyncUIComponent = function() {
        return new Promis(function(resolve) {
            var DOM = document.getElementById('someId');
            if(DOM) {
                require(['async.ui.component'], function(AsyncUIComponent) {
                   resolve(new AsyncUIComponent(DOM); return;
                });
            }
            else {
                resolve(null);
            }
        });
    }
    */
    
    // real case implementation
    var loadRangeSlider = function() {
        return new Promise(function(resolve) {
            var sliderDOM = document.getElementById('rangeSlider');
            if(sliderDOM) {
               require(['range.slider'], function(RangeSlider) {
                   console.log("require(['range.slider'] and resolve it");
                   resolve(new RangeSlider(sliderDOM)); return;
               });  
            } else {
                console.log("No need to do require(['range.slider'], because we cannot find the range slider in the DOM");
                /* 
                even if we cannot find DOM element we resolve it but with null resolving result
                we can then later check whether the module has returned a module instance or not
                */
                resolve(null); return;
            }
        });
    };
    
    return Promise.props({ 
        // asyncUIComponent: loadNewAsyncUIComponent(),
        rangeSlider: loadRangeSlider()
    });
});