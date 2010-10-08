/*
 * Cimex media
 * cimex.com
 * Example use:
 * Find all check boxes and replace with image
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
          var idcheckbox = "#" + this.id ;
         if($(idcheckbox + ':checkbox').attr('checked') == true)
          {
            $(idcheckbox).hide();
            $(idcheckbox).after(checkedImage ); 
           
          }
         else if($(idcheckbox + ':checkbox').attr('checked') == false)
          {
            $(idcheckbox).hide();
            $(idcheckbox).after(uncheckedImage); 
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