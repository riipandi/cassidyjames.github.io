$(function () {
  // Open external ;inks in a new tab
  $('a').not('[href*="mailto:"]').each(function () {
    var href = this.href;
    if ( href.indexOf(window.location.host) == -1 ) {
      $(this).attr('target', '_blank');
    }
  });
});

