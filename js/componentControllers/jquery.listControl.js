(function ($) {
    $.fn.listControls = function (config) {

        var obj = {
            //-- VARIABLES --/// <--- these are passed in when you instantiate the object
            List: {
                selectorId: '',
                itemClass: '',
                listBtnClass: '',
            },
            // -- END VARIABLES -- // 



            // -- DOCUMENT READY ACTIONS -- //
            init: function () {
                obj.attachEvents();
            },
            // END DOCUMENT READY ACTIONS -- //



            // -- EVENTS HANDLERS (attached on document ready) -- //
            attachEvents: function () {
                $(document).on('click', '.'+obj.List.listBtnClass, function () {
                    // But Mike, why would you not just use the jQuery .remove() function?  Are we re-inventing the wheel?
                    PageControls.utilityFunctions.removeElement( $(this).parents('.'+obj.List.itemClass) );
                    // No, because what if you want to animate the removal of all elements to always be the same?
                    // Then if you want to change the animation later, you will need to update all of your .remove() calls
                    // If you just have your utility object always handle the removal, then you only need to update its one function
                });
            },
            // -- END EVENT HANDLERS -- //



            // -- FUNCTIONS -- //
            addToList: function(item) {
                $('#'+obj.List.selectorId).append( obj.createListElement(item) );
            },
            createListElement: function(item) {
                return '<li class="'+obj.List.itemClass+'"><div class="list-data">'+item+'</div><button class="btn btn-danger btn-sm '+obj.List.listBtnClass+'">Remove</button></li>';
            },
            // END FUNCTIONS -- /

        };
        var new_object = $.extend({}, obj, config);
        $.extend(obj, config);
        return new_object;
    };
}(jQuery));