document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    checkUrl(url);
});

function checkUrl(url) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Checking...</p>';
    resultDiv.style.color = 'blue';
    
    fetch(`https://useast-www.securly.com/check?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            if (data.blocked) {
                resultDiv.innerHTML = `<p style="color: red;">The URL <strong>${url}</strong> is blocked by Securly.</p>`;
            } else {
                resultDiv.innerHTML = `<p style="color: green;">The URL <strong>${url}</strong> is not blocked by Securly.</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = `<p style="color: orange;">There was an error checking the URL. Please try again later.</p>`;
        });
}
