"use strict";
$(document).ready(function() {

  /*=====================
   01.Pre loader
   ==========================*/
  $('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
  });


  /*=====================
   02.Tap on Top
   ==========================*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
      $('.tap-top').fadeIn();
    } else {
      $('.tap-top').fadeOut();
    }
  });
  $('.tap-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


  /*=====================
   03. toggle nav
   ==========================*/
  $('.toggle-nav').on('click', function() {
    $('.sm-horizontal').css("right", "0px");
  });
  $(".mobile-back").on('click', function() {
    $('.sm-horizontal').css("right", "-410px");
  });

  
 
  /*=====================
   04. footer according
   ==========================*/
  var contentwidth = jQuery(window).width();
  if ((contentwidth) < '750') {
    jQuery('.footer-title h4').append('<span class="according-menu"></span>');
    jQuery('.footer-title').on('click', function() {
      jQuery('.footer-title').removeClass('active');
      jQuery('.footer-contant').slideUp('normal');
      if (jQuery(this).next().is(':hidden') == true) {
        jQuery(this).addClass('active');
        jQuery(this).next().slideDown('normal');
      }
    });
    jQuery('.footer-contant').hide();
  } else {
    jQuery('.footer-contant').show();
  }

  if ($(window).width() < '1183') {
    jQuery('.menu-title h5').append('<span class="according-menu"></span>');
    jQuery('.menu-title').on('click', function() {
      jQuery('.menu-title').removeClass('active');
      jQuery('.menu-content').slideUp('normal');
      if (jQuery(this).next().is(':hidden') == true) {
        jQuery(this).addClass('active');
        jQuery(this).next().slideDown('normal');
      }
    });
    jQuery('.menu-content').hide();
  } else {
    jQuery('.menu-content').show();
  }
});
