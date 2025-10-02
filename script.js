document.getElementById('studentLoginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form elements
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    const classSelect = document.getElementById('classSelect').value;
    const messageElement = document.getElementById('message');

    // Simple validation
    if (studentId === '' || password === '' || classSelect === '') {
        messageElement.textContent = 'Please fill in all fields.';
        messageElement.className = 'message error';
        return;
    }

    // In a real-world application, you would send this data to a server
    // for authentication. This is just a simple example.
    // For demonstration, let's use a dummy validation.
    // For example: Student ID "S123" with password "password123" is valid.
    if (studentId === 'STUDENT69' && password === 'PASSWORD69') {
        messageElement.textContent = `Login successful for Class ${classSelect}!`;
        messageElement.className = 'message success';
        // You could redirect the user here
        // window.location.href = '/dashboard.html';
    } else {
        messageElement.textContent = 'Invalid Student ID or Password.';
        messageElement.className = 'message error';
    }
});
