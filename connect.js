document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calculationForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect data from form inputs
    const scenario = document.getElementById('scenario').value;
    const inputData = JSON.parse(document.getElementById('inputData').value);  // Assuming JSON input
    const outputData = JSON.parse(document.getElementById('outputData').value);  // Assuming JSON output

    // Send the data to the backend
    fetch('https://wireless-backend-wvva.onrender.com/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        scenario: scenario,
        inputs: inputData,
        outputs: outputData
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Handle the response
        document.getElementById('result').textContent = JSON.stringify(data, null, 2); // Display result
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
