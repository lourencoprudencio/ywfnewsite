// Wait for the DOM content to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your User ID
    emailjs.init('2l5h_rj768Le8xcJA'); // Use your EmailJS User ID
    console.log('EmailJS initialized');

    // Function to update background video based on screen orientation
    function updateBackgroundVideo() {
        const horizontalVideo = document.querySelector('.background-video.horizontal');
        const verticalVideo = document.querySelector('.background-video.vertical');

        if (window.innerWidth > window.innerHeight) {
            // Landscape orientation
            horizontalVideo.style.display = 'block'; // Show horizontal video
            verticalVideo.style.display = 'none'; // Hide vertical video
            console.log('Switched to horizontal video');
        } else {
            // Portrait orientation
            horizontalVideo.style.display = 'none'; // Hide horizontal video
            verticalVideo.style.display = 'block'; // Show vertical video
            console.log('Switched to vertical video');
        }
    }

    // Call the function initially and add an event listener for window resize
    updateBackgroundVideo();
    window.addEventListener('resize', updateBackgroundVideo);

    // Force videos to play if paused
    document.querySelectorAll('.background-video').forEach(video => {
        video.addEventListener('pause', function() {
            this.play(); // Resume video if paused
            console.log('Video resumed from pause');
        });

        video.addEventListener('touchstart', function() {
            if (this.paused) {
                this.play(); // Resume video on touch
                console.log('Video resumed on touch');
            }
        });
    });

    // Array of valid login credentials with hashed passwords
    const validCredentials = [
        { username: 'prudencio', passwordHash: '9e54991283343d6e36e66fa951dbe48c4fe2ca189d2213fc36c1b6698f5443ad' },
        { username: 'chico', passwordHash: '5a7e7a8a9bdc586be12dbd7a179d25531420805ebf09054c004fc891df57f205' }
    ];

    // Login form submission event handler
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const passwordHash = CryptoJS.SHA256(password).toString(); // Hash the entered password

        console.log('Login attempt:', username); // Log username attempt

        // Check if the credentials are valid
        const isValid = validCredentials.some(cred => cred.username === username && cred.passwordHash === passwordHash);

        if (isValid) {
            console.log('Login successful for:', username); // Log successful login
            window.location.href = 'homepage.html'; // Redirect on valid credentials
        } else {
            console.error('Login failed for:', username); // Log failed login
            document.getElementById('error').textContent = 'Incorrect username or password. Please try again.';
        }
    });

    // Waitlist button click handler to toggle the form
    document.getElementById('joinwaitlistBtn').addEventListener('click', function() {
        document.getElementById('waitlistFormContainer').classList.toggle('show');
        this.classList.toggle('active');
        console.log('Waitlist form toggled'); // Log when the waitlist form is toggled
    });

    // Waitlist form submission event handler
    document.getElementById('waitlistForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Logic for form submission using EmailJS
        const formData = new FormData(this); // Collect form data
        console.log('Waitlist Form Data:', Array.from(formData.entries())); // Log form data entries for verification

        // Send the form through EmailJS
        emailjs.sendForm('service_e7n0jnk', 'template_bd0g2qm', this) // Sends the form using EmailJS
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text); // Log success status and response text
                const confirmationMessage = document.getElementById('confirmation');
                confirmationMessage.style.display = 'block'; // Display confirmation message
                document.getElementById('waitlistForm').reset(); // Reset the waitlist form after submission
                console.log('Waitlist form reset'); // Log message indicating the form has been reset

                // Hide the confirmation message after 3 seconds
                setTimeout(() => {
                    confirmationMessage.style.display = 'none'; // Hide message after timeout
                    window.location.reload(); // Reload the page after hiding
                    console.log('Page reloaded after confirmation message'); // Log page reload
                }, 3000);
            }, function(error) {
                console.error('FAILED...', error); // Log an error message
                alert('Erro ao enviar o formulário: ' + JSON.stringify(error)); // Display an error message with details
            });
    });
});