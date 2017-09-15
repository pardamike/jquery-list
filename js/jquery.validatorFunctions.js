(function ($) {
    $.fn.validatorFunctions = function (config) {

        var obj = {
            //-- VARIABLES --/// <--- these are passed in when you instantiate the object
            // No vars for this guy :(
            // -- END VARIABLES -- // 



            // -- DOCUMENT READY ACTIONS -- //
            init: function () {
                // No init functions
            },
            // END DOCUMENT READY ACTIONS -- //



            // -- EVENTS HANDLERS (attached on document ready) -- //
            attachEvents: function () {
                // No events to handle
            },
            // -- END EVENT HANDLERS -- //



            // -- FUNCTIONS -- //
            isEmpty: function(val) {
                return val.trim() === '';
            },
            // END FUNCTIONS -- /

        };
        var new_object = $.extend({}, obj, config);
        $.extend(obj, config);
        return new_object;
    };
}(jQuery));