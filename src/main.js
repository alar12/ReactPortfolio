function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message_sender: document.getElementById("message").value,
    };
    emailjs.send('service_99diu2a','template_27u1x2d',tempParams)//""""
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
     });
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Master's Student","Software Engineer","Gamer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Master's Student","Software Engineer","Gamer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });

    document.getElementById("aboutImage").addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider");
        slider.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider");
        var isClickInsideSlider = slider.contains(event.target);
        var isTrigger = event.target === document.getElementById("aboutImage");

        // If the click is outside the slider and not on the trigger, close it
        if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
            slider.classList.remove("active");
        }
    });

    // Event listener for the slider toggle
    document.getElementById("experience").addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider1");
        slider.classList.toggle("active");

        // Stop the event from propagating to the document
        event.stopPropagation();
    });

    // Listen for clicks on the entire document
    document.addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider1");
        var isClickInsideSlider = slider.contains(event.target);
        var isTrigger = event.target === document.getElementById("experience");

        // If the click is outside the slider and not on the trigger, close it
        if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
            slider.classList.remove("active");
        }
    });

    // Event listener for the slider toggle
    document.getElementById("education").addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider2");
        slider.classList.toggle("active");

        // Stop the event from propagating to the document
        event.stopPropagation();
    });

    // Listen for clicks on the entire document
    document.addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider2");
        var isClickInsideSlider = slider.contains(event.target);
        var isTrigger = event.target === document.getElementById("education");

        // If the click is outside the slider and not on the trigger, close it
        if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
            slider.classList.remove("active");
        }
    });

    // Event listener for the slider toggle
    document.getElementById("skills").addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider3");
        slider.classList.toggle("active");

        // Stop the event from propagating to the document
        event.stopPropagation();
    });

    // Listen for clicks on the entire document
    document.addEventListener("click", function(event) {
        var slider = document.getElementById("popupSlider3");
        var isClickInsideSlider = slider.contains(event.target);
        var isTrigger = event.target === document.getElementById("skills");

        // If the click is outside the slider and not on the trigger, close it
        if (!isClickInsideSlider && !isTrigger && slider.classList.contains("active")) {
            slider.classList.remove("active");
        }
    });
      
    //light mode

    // Function to update the theme
    function updateTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }

    // Toggle theme function
    document.getElementById('themeToggle').addEventListener('click', function() {
        // Check current theme
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        // Toggle and save the new theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        updateTheme();
    });

    // Apply the theme when the script loads
    updateTheme();

    // Listen for theme changes in localStorage across tabs
    window.addEventListener('storage', function(e) {
        if (e.key === 'theme') {
            document.body.classList.add('light-mode');
        }
    });
    
