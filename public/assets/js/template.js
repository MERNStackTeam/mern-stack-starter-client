(function($) {
  'use strict';
  
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    // Add active class to nav-link based on url dynamically
    function addActiveClass(element) {
      if (current === "") {
        // For root url
        var href = element.attr('href');
        if (href && href.indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        // For other url
        var href = element.attr('href');
        if (href && href.indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    
    // Iterate over each anchor element in the sidebar and add active class
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);

      // Ensure $this is a valid jQuery object and has an 'href' attribute
      if ($this && $this.length) {
        addActiveClass($this);
      }
    });

    // Close other submenu in sidebar on opening any
    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    // Change sidebar
    $('[data-toggle="minimize"]').on("click", function() {
      body.toggleClass('sidebar-icon-only');
    });

    // Checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    // Remove pro banner on close
    if ($.cookie('majestic-free-banner') != "true") {
      $('#proBanner').addClass('d-flex');
      $('.navbar').removeClass('fixed-top');
    } else {
      $('#proBanner').addClass('d-none');
      $('.navbar').addClass('fixed-top');
    }

    if ($(".navbar").hasClass("fixed-top")) {
      $('.page-body-wrapper').removeClass('pt-0');
      $('.navbar').removeClass('pt-0');
    } else {
      $('.page-body-wrapper').addClass('pt-0');
      $('.navbar').addClass('pt-0');
      $('.navbar').addClass('mt-0');
    }

    $('#bannerClose').on('click', function() {
      $('#proBanner').addClass('d-none').removeClass('d-flex');
      $('.navbar').removeClass('pt-5').addClass('fixed-top');
      $('.page-body-wrapper').addClass('proBanner-padding-top').removeClass('mt-3');
      
      // Set cookie to hide banner
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
      $.cookie('majestic-free-banner', "true", { expires: date });
    });

  });
})(jQuery);
