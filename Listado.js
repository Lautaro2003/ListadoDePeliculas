document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        const metascore = parseInt(square.textContent);

        if (metascore >= 0 && metascore <= 49) {
            square.style.backgroundColor = 'red';
        } else if (metascore >= 50 && metascore <= 59) {
            square.style.backgroundColor = 'yellow';
        } else if (metascore >= 60 && metascore <= 100) {
            square.style.backgroundColor = 'green';
        }
    });
});