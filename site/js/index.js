function highlightActiveSection() {
  var $active = $('#menu a[href^="' + location.pathname + '"]');

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
