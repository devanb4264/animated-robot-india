btnLoadData.onclick = function populateForm() {
    fetch('data.json') //JSON file named 'data.json'
    .then(response => response.json())
    .then(data => {
        document.getElementById('firstname').value = data.firstname;
        document.getElementById('lastname').value = data.lastname;
        document.getElementById('email').value = data.email;
        document.getElementById('password').value = data.password;
        document.getElementById('Phonenum').value = data.phone;
        document.getElementById('birthday').value = data.birthday;
        
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
}

function showTimeslots() {
    var timeofdaySelect = document.getElementById('timeofday');
    var timeslotSelect = document.getElementById('timeslot');

    // Enable the timeslot select
    timeslotSelect.disabled = false;

    // Clear options
    timeslotSelect.innerHTML = '';

    // give timeslots options based on the selected time of day
    var selectedTimeOfDay = timeofdaySelect.value;
    if (selectedTimeOfDay === 'Morning') {
        timeslotSelect.add(new Option('8:00 AM - 10:00 AM'));
        timeslotSelect.add(new Option('10:00 AM - 12:00 PM'));
    } else if (selectedTimeOfDay === 'Mid-day') {
        timeslotSelect.add(new Option('12:00 PM - 2:00 PM'));
        timeslotSelect.add(new Option('2:00 PM - 4:00 PM'));
    } else if (selectedTimeOfDay === 'Afternoon') {
        timeslotSelect.add(new Option('4:00 PM - 6:00 PM'));
        timeslotSelect.add(new Option('6:00 PM - 8:00 PM'));
    } else if (selectedTimeOfDay === 'Night') {
        timeslotSelect.add(new Option('8:00 PM - 10:00 PM'));
        timeslotSelect.add(new Option('10:00 PM - 12:00 AM'));
    }
}
