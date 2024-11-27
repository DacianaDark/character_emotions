function changeState(state) {
    // Hide all snowman divs
    $(".snowman").hide();
  
    // Show the selected snowman div
    $("#" + state).show();
  }
  
    $(".snowman").each( function (id, img) {
      $("#" + id).css({
        "background-image": `url(${img})`,
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });
    });

    // Show only one snowman by default
    $(".snowman").hide();
  $("#Bored").show();
