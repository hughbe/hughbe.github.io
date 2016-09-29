$(function() {
  $('.side-navigation-item').hover(function(e) {
    $('.side-navigation-item').each(function() {
      if ($(this).text().startsWith("> ")) {
        $(this).text($(this).text().substring(1));
      }
    });
    if (!$(this).text().startsWith("> ")) {
      $(this).text("> " + $(this).text());
    }
  }, function() {
    $('.side-navigation-item').each(function() {
      var hasPrefix = $(this).text().startsWith("> ");
      var isSelected = $(this).hasClass("selected");

      if (isSelected && !hasPrefix) {
        $(this).text(">" + $(this).text());
      } else if (!isSelected && hasPrefix) {
        $(this).text($(this).text().substring(1));
      }
    });
  });

  $('.side-navigation-item').click(function(e) {
    // Hide all navigation items
    $('.hidden-section').css("display", "none");

    // Reset all selected items
    $('.side-navigation-item').each(function() {
      if ($(this).text().startsWith("> ")) {
        $(this).text($(this).text().substring(1));
      }
      $(this).removeClass("selected");
    });

    $(this).text("> " + $(this).text());
    $(this).addClass("selected");

    var toSlide = $($(this).attr("href") + "-section");
    toSlide.css("display", "block");
  });
  
  $('.info-link').click(function(e) {
    window.location.hash = "";
    history.pushState('', document.title, window.location.pathname);
    e.preventDefault();

    var toSlide = $($(this).attr("href"));
    toSlide.slideToggle();
  });

  handleLoad();

  function handleLoad() {
    if (window.location.hash) {
      var element = $(window.location.hash);
      if (window.location.hash.endsWith("info")) {
        var first = element.parents("div").first();
        if (first.prop("id").endsWith("-section")) {
            var name = first.prop("id").substring(0, first.prop("id").length - 8);
            select("#" + name);
        }
        $(element).css("display", "block");
      }
      else {
        $(element).css("display", "block");
        select(window.location.hash);
      }
    } else {
      select(".default");
    }
  }

  function select(sectionName) {
    if ($(sectionName + "-section").length) {
      $(".hidden-section").css("display", "none");
      $(sectionName + "-section").css("display", "block");
      $(sectionName + "-item").text("> " + $(sectionName + "-item").text()).addClass("selected");
    } else if ($(".default-section").length) {
        // Select the default if we can
        select(".default");
    }
  }
});