$(document).ready(function () {
  $("#reservationsformular").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://daetwyler.name/undolcedeliro.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (success) {
      console.log(success);
      
      if(success) {
        $("#formular").html(
          '<div class="alert alert-success">Ihre Nachricht wurde abgeschickt!</div>'
        );
      } else {
        $("#formular").append(
          '<div class="alert alert-danger">Ein Fehler ist aufgetreten!</div>'
        );
      }
      
    });

    event.preventDefault();
  });
});

