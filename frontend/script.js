document.addEventListener("DOMContentLoaded", function() {
    // Get summary for current year by default
    getSummary(new Date().getFullYear());
  });
  
  function getSummary(year) {
    fetch(`http://localhost:3000/summary/${year}`)
      .then(response => response.json())
      .then(data => {
        const summaryDiv = document.getElementById('summary');
        summaryDiv.innerHTML = `<h2>Summary for ${year}</h2>`;
        summaryDiv.innerHTML += `<p>Total Fights: ${data.totalFights}</p>`;
        summaryDiv.innerHTML += `<p>Total Meals: ${data.totalMeals}</p>`;
        // Add more summary information as needed
      })
      .catch(error => console.error('Error fetching summary:', error));
  }
  
  function addEvent() {
    const eventType = document.getElementById('eventType').value;
    const eventYear = document.getElementById('eventYear').value;
    if (!eventType || !eventYear) {
      alert('Please select event type and enter year.');
      return;
    }
    // You can customize the event data based on the selected event type
    const eventData = { /* Add relevant data based on event type */ };
    fetch(`http://localhost:3000/${eventType}s`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Event added successfully:', data);
        // After adding event, refresh summary for the same year
        getSummary(eventYear);
      })
      .catch(error => console.error('Error adding event:', error));
  }
  