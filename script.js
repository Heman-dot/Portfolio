$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    const name = $('input[name="name"]');
    const email = $('input[name="email"]');
    const subject = $('input[name="subject"]');
    const message = $('textarea[name="message"]');

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    clearErrorMessages();

    let isValid = true;

    if (!name.val().trim()) {
      showError(name, "Name is required");
      isValid = false;
    }

    if (!email.val().trim() || !emailPattern.test(email.val())) {
      showError(email, "Valid email is required");
      isValid = false;
    }

    if (!subject.val().trim()) {
      showError(subject, "Subject is required");
      isValid = false;
    }

    if (!message.val().trim()) {
      showError(message, "Message is required");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  function showError(element, message) {
    const error = $('<div class="error-message"></div>').text(message);
    element.parent().append(error);
    element.addClass("error");
  }

  function clearErrorMessages() {
    $(".error-message").remove();
    $(".error").removeClass("error");
  }
});
