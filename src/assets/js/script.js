$( function() {
    // Draggable and Droppable
    function initNewCard(){
        var cardlists = ["#card-list1","#card-list2", "#card-list3","#card-list4", "#card-list5","#card-list6"];
        $.each(cardlists, function(index, list) {
            var connectToList = $(list).attr("data-connectedLists");
            $(list).droppable({
                accept: $(connectToList).find(".card").draggable({
                    revert: true,
                    opacity: .5,
                    zIndex: 100
                }),
                drop: function( event, ui ){          
                    var dropped = ui.draggable;
                    $(this).append(dropped.clone().removeAttr('style').draggable({
                        revert: true,
                        opacity: .5,
                        zIndex: 100
                    }));
                    dropped.remove();
                    initNewCard();
                    changeCheckInput();                  
                }
            });
        });
    }

    // $(".card").has(".shadow-select").draggable({
    //     revert: true,
    //     opacity: .5,
    //     multiple: true
    // });
    
    initNewCard();

    // add Class shadow-select when form-check-input is checked
    var changeCheckInput = function (){
        $('.form-check-input').on("change", function(){
            if($(this).is(':checked')) {
                $(this).closest(".row").parent().addClass('shadow-select');
            } else {
                $(this).closest(".row").parent().removeClass('shadow-select');
            }
            
        });
    }

    changeCheckInput();

    // initiate rateYo library
    $(".rateYo").rateYo({
        rating: 3.6
    });
    
    // Allow Only Checkboxes in same column to be Checked and show alert when checking other cards in different column
    $(".form-check-input").on('click', e => {
        var otherCheckboxes = $(e.target).closest('.check-chk').siblings().find(".form-check-input");
        if ($(this).is(":checked")) 
            return; 
        
        if (otherCheckboxes.filter(":checked").length > 0) {
            if (confirm("Your other cards will be unchecked.  Continue?")) {
                otherCheckboxes.prop('checked', false).closest(".row").parent().removeClass('shadow-select');
            }
            else {
               return false;
            }
        }
    });


    // make cards same height //
    // var maxHeight = 0;
    // $(".card-details").each(function(){
    //     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    // });
    // $(".card-details").height(maxHeight);
      
});