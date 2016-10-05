var minHoverWidth = 800;
$(function() {
  var isMobile = false;
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

  $('.side-navigation-item').hover(function(e) {
    if (window.innerWidth > minHoverWidth) {
      $('.side-navigation-item').each(function() {
        if ($(this).text().startsWith("> ") && !$(this).hasClass("selected")) {
          $(this).text($(this).text().substring(1));
        }
        $(this).parent().parent().css("background-color", "inherit");
      });
      if (!$(this).text().startsWith("> ")) {
        $(this).text("> " + $(this).text());
      }
      if (!isMobile) {
        $(this).parent().parent().css("background-color", "#101015");
      }
    }
  }, function() {
    $('.side-navigation-item').each(function() {
      if (window.innerWidth > minHoverWidth) {
        var hasPrefix = $(this).text().startsWith("> ");
        var isSelected = $(this).hasClass("selected");

        if (isSelected && !hasPrefix) {
          $(this).text(">" + $(this).text());
        } else if (!isSelected && hasPrefix) {
          $(this).text($(this).text().substring(1));
        }
      }
      $(this).parent().parent().css("background-color", "inherit");
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

$(window).load(function () {
  var windowObject = $(window);
  var sideNavBar = $(".side-navigation-bar");
  var navigationBar = $(".navigation-bar");
  var main = $(".main");
  windowObject.scroll(function() {
    layout();
  });

  layout();

  function layout() {
    if(windowObject.scrollTop() > navigationBar.height()) {
      if (window.innerWidth > minHoverWidth) {
        sideNavBar.addClass("full-height");
        main.css("margin-top", 0);
      } else {
        sideNavBar.addClass("full-width");
        main.css("margin-top", sideNavBar.height() + 7);
      }
    } else {
      sideNavBar.attr("class", "side-navigation-bar");
      main.css("margin-top", 0);
    }
  }
});
