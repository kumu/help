function highlightActiveSection() {
  var $active, path = location.pathname;

  if (path == '/')
    $active = $('#menu a.welcome');
  else
    $active = $('#menu a[href^="' + path + '"]');

  if ($active.length == 1) {
    $("#menu .active").removeClass("active");
    $active.parent().addClass("active");
  }
}

// Used by:
// - css property reference
function initializePopovers() {
  $("[data-toggle=popover]").popover({trigger: 'hover', html: true});
}

$(document).ready(function() {
  highlightActiveSection();
  initializePopovers();
});
