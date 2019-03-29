$(function() {
  $('#track-form').submit(function(event) {
    event.preventDefault();
    $('.result-c-sharp').hide();
    $('.result-java').hide();
    $('.result-php').hide();
    $('.result-ruby').hide();
    $('.result-css-design').hide();

    var frontBack = $('input:radio[name=second-question]:checked').val();
    var curriculum = $('input:radio[name=fourth-question]:checked').val();
    var company = $('input:radio[name=fifth-question]:checked').val();

    if (frontBack === '')

  });
});