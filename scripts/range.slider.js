define(function() {
    
    var RangeSlider = function(nodeElement) {
        this.element = nodeElement;
    }
    
    RangeSlider.prototype.setMax = function(maxValue) {
        this.element.max = maxValue;   
    }
    
    RangeSlider.prototype.setValue = function(value) {
        this.element.value = value; 
    }
    
    return RangeSlider;
})