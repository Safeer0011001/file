fetch('https://purring-standing-shroud.glitch.me/api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('api-result').innerText = data.message;
  })
  .catch(error => console.error('Error fetching data:', error));
