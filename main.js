function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var errorMessage = document.getElementById('error-message');

    // Réinitialise le message d'erreur à chaque validation
    errorMessage.innerHTML = '';

    // Vérifie que tous les champs sont remplis
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        errorMessage.innerHTML = 'Veuillez remplir tous les champs du formulaire.';
        return false; // Empêche l'envoi du formulaire
    }

    // Vérifie le format de l'e-mail avec une expression régulière simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.innerHTML = 'Veuillez entrer une adresse e-mail valide.';
        return false;
    }

    return true; 
}






