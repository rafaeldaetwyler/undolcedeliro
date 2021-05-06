function onSubmit() {
  var formData = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
    captcharesponse: grecaptcha.getResponse(),
  };

  $.ajax({
    type: "POST",
    url: "https://daetwyler.name/undolcedeliro.php",
    data: formData,
    dataType: "json",
    encode: true,
  }).done(function (success) {

    if(success) {
      $("#formular").html(
        '<div class="alert alert-success">Ihre Nachricht wurde abgeschickt!</div>'
      );
    } else {
      $("#error").html(
        '<div class="alert alert-danger">Ein Fehler ist aufgetreten!</div>'
      );
    }
      
  });
}

$(document).ready(function () {
  $("#reservationsformular").submit(function (event) {
    event.preventDefault();
    grecaptcha.execute();
  });
});

