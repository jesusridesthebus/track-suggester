$(function() {
  $('#track-form').submit(function(event) {
    event.preventDefault();
    $('.result-c-sharp').hide();
    $('.result-java').hide();
    $('.result-php').hide();
    $('.result-ruby').hide();
    $('.result-css-design').hide();

    var frontBack = $('input:radio[name=second-question]:checked').val();
    var curriculum = $('#curriculum-module').val();
    var company = $('input:radio[name=fifth-question]:checked').val();

    if (frontBack === 'back2' && curriculum === 'php4' && company === 'php5') {
      $('.result-php').show();
    }

  });
});