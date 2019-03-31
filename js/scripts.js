$(function () {
  $('#track-form').submit(function (event) {
    event.preventDefault();
    $('.result-c-sharp').hide();
    $('.result-java').hide();
    $('.result-php').hide();
    $('.result-ruby').hide();
    $('.result-css-design').hide();
    $('.result-anything').hide();

    var frontBack = $('input:radio[name=second-question]:checked').val();
    var curriculum = $('#curriculum-module option:selected').val();
    var company = $('input:radio[name=fifth-question]:checked').val();

    console.log(curriculum);

    if ((frontBack === 'back2' || curriculum === 'php4') && company === 'php5') {
      $('.result-php').show();
    } else if (frontBack === 'back2' && (curriculum === 'php4' || company === 'php5')) {
      $('.result-php').show();
    } else if ((frontBack === 'back2' || curriculum) === 'c-sharp4' && company === 'c-sharp5') {
      $('.result-c-sharp').show();
    } else if (frontBack === 'back2' && (curriculum === 'c-sharp4' || company === 'c-sharp5')) {
      $('.result-c-sharp').show();
    } else if ((frontBack === 'back2' || curriculum) === 'ruby4' && company === 'ruby5') {
      $('.result-ruby').show();
    } else if (frontBack === 'back2' && (curriculum === 'ruby4' || company === 'ruby5')) {
      $('.result-ruby').show();
    } else if (curriculum === 'java4' || company === 'java5') {
      $('.result-java').show();
    } else if ((frontBack === 'front2' || curriculum === 'css-design4') && company === 'css-design5') {
      $('.result-css-design').show();
    } else if (frontBack === 'front2' && (curriculum === 'css-design4' || company === 'css-design5')) {
      $('.result-css-design').show();
    } else {
      $('.result-anything').show();
    }

  });
});

// else if (curriculum === 'ruby4') {
//   $('.result-ruby').show();
// } else if (curriculum === 'java4') {
//   $('.result-java').show();
// } else if (curriculum === 'css-design4') {
//   $('.result-css-design').show();
// } else if (curriculum === 'c-sharp4') {
//   $('.result-c-sharp').show();
// } else if (curriculum === 'php4') {
//   $('.result-php').show();
// }