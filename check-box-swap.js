/*
 * Cimex media
 * cimex.com
 * Example use:
 * Find all check boxes and replace with imgae
 * checkBoxSwap.findCheckbox();
 * When uses clicks on check box will change state checked unchecked
 * checkBoxSwap.swapImage();
 */

/* set variables */

var checkedImage = '<img src ="../images/checked.png" alt = ""/>';
var uncheckedImage = '<img src ="../images/unchecked.png" alt = ""/>';


var checkBoxSwap = {

    /* Replaces checkboxes with images */
  findCheckbox: function()
    {
      $(':checkbox').map(function() {

         if($("#" + this.id + ':checkbox').attr('checked') == true)
          {
            $("#" + this.id).hide();
            $("#" + this.id).after(checkedImage ); 
           
          }
         else if($("#" + this.id + ':checkbox').attr('checked') == false)
          {
            $("#" + this.id).hide();
            $("#" + this.id).after(uncheckedImage); 
          }
     
        });
    },
    
  /* Changes state of checkbox on click */
  swapImage: function(idToWatch)
    {
      $("li img").live('click', function(){
        if($(this).parent().find(':checkbox').attr('checked') == true)
          {
            $(this).parent().find(':checkbox').attr('checked', false);
            $(this).replaceWith(uncheckedImage);
          }
        else if($(this).parent().find(':checkbox').attr('checked') == false)
          {
            $(this).parent().find(':checkbox').attr('checked', true);
            $(this).replaceWith(checkedImage);
          }
        });
    }

};