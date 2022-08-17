"use strict";


$(document).ready(function(){
  $('#sub-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  });

  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  });
});

// if ($(window).width() > '1200') {
//   $('#hover-cls').hover(
//     function () {
//       $('.sm').addClass('hover-unset');
//     }
//   )

// }
