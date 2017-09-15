(function ($) {
    $.fn.modalInputControls = function (config) {

        var obj = {
            //-- VARIABLES --/// <--- these are passed in when you instantiate the object
            Form : {
                addItemBtnId: '',
                itemInputId: ''
            },
            Modal: {
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
                $('#'+obj.Form.addItemBtnId).on('click', function () {
                    var item = $('#'+obj.Form.itemInputId).val();
                    if (PageControls.validatorFunctions.isEmpty(item)) {
                        alert("Please input something!");
                        return;
                    }

                    obj.add(item);

                    // Call the global PageControls object which has our utilityControls objects in it
                    PageControls.utilityFunctions.closeModal( obj.Modal.selectorId );
                });

                $('#'+obj.Form.itemInputId).on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        $('#'+obj.Form.addItemBtnId).trigger('click');
                    }
                });

                $('#'+obj.Modal.selectorId).on('shown.bs.modal', function (e) {
                    $('#'+obj.Form.itemInputId).focus();
                });
            },
            // -- END EVENT HANDLERS -- //



            // -- FUNCTIONS -- //
            add: function(item) {
                // Call the global PageControls object which has our listControls and utilityControls objects in it
                PageControls.listControls.addToList(item);
                PageControls.utilityFunctions.clearInput( $('#'+obj.Form.itemInputId) );
            },
            // END FUNCTIONS -- /

        };
        var new_object = $.extend({}, obj, config);
        $.extend(obj, config);
        return new_object;
    };
}(jQuery));