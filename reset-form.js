/* How to reset a form in Jquery */
/* found on: http://stackoverflow.com/questions/680241/blank-out-a-form-with-jquery  */

$(':input','#myform')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');
