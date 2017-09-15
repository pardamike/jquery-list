(function ($) {
    $.fn.utilityFunctions = function (config) {

        var obj = {
            //-- VARIABLES --/// <--- these are passed in when you instantiate the object
            List: {
                selectorId: ''
            },
            // -- END VARIABLES -- // 



            // -- DOCUMENT READY ACTIONS -- //
            init: function () {
                obj.attachEvents();
            },
            // END DOCUMENT READY ACTIONS -- //



            // -- EVENTS HANDLERS (attached on document ready) -- //
            attachEvents: function () {
                
            },
            // -- END EVENT HANDLERS -- //



            // -- FUNCTIONS -- //
            clearInput: function (el) {
                el.val('').focus();
            },
            closeModal: function (modalId) {
                $('#'+modalId).modal('toggle');
            },
            removeElement: function (el) {
                el.fadeTo('fast', 0, function() {
                    $(this).remove()
                });
            }
            // END FUNCTIONS -- /

        };
        var new_object = $.extend({}, obj, config);
        $.extend(obj, config);
        return new_object;
    };
}(jQuery));