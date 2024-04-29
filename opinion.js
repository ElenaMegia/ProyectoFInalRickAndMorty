
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    setTimeout(function() {

        document.getElementById('message').style.display = 'block';
        document.getElementById('reviewForm').reset();
    }, 1000);
});