const FORM_ENDPOINT = 'https://formspree.io/f/yourFormId'; // Replace with your endpoint

const form = document.getElementById('booking-form');
const confirmation = document.getElementById('form-confirmation');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'phone', 'email', 'date', 'time'];
    let valid = true;

    requiredFields.forEach((field) => {
        const input = form.elements[field];
        if (!input.value.trim()) {
            valid = false;
        }
    });

    if (!valid) {
        alert('Please fill in all required fields.');
        return;
    }

    const formData = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        date: form.date.value,
        time: form.time.value,
        message: form.message.value,
    };

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            confirmation.innerHTML = 'Thank you! Your booking has been sent.<br>' +
                '<a href="https://wa.me/0624978211" target="_blank" rel="noopener">Contact us on WhatsApp</a>';
            form.reset();
        } else {
            alert('There was a problem submitting your booking. Please try again later.');
        }
    } catch (error) {
        console.error('Submission failed', error);
        alert('There was a problem submitting your booking. Please try again later.');
    }
});
