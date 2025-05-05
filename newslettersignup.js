function hideBody() {
    document.body.style.display = 'none';
}




document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.subscribebutton'); 
    if (button) {
        button.addEventListener('click', () => {
            alert('Thank you for signing up!');
            hideBody();
            
        });

    }
});