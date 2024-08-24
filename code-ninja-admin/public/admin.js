// Sample data for demonstration
const events = [
    { name: 'Code Combat', date: '2024-09-15', description: 'Monthly coding contest' },
    { name: 'Hackathon 2024', date: '2024-10-10', description: '48-hour coding marathon' },
    { name: 'Workshop on Data Structures', date: '2024-11-05', description: 'Deep dive into data structures' }
];

document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
});

// Load events into the table
function loadEvents() {
    const tableBody = document.querySelector('#eventTable tbody');
    tableBody.innerHTML = '';

    events.forEach((event, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.description}</td>
            <td>
                <button onclick="editEvent(${index})">Edit</button>
                <button onclick="deleteEvent(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Show the add event form
function showAddEventForm() {
    document.getElementById('addEventForm').style.display = 'block';
}

// Hide the add event form
function hideAddEventForm() {
    document.getElementById('addEventForm').style.display = 'none';
}

// Handle the add event form submission
document.getElementById('eventForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;

    events.push({ name, date, description });
    loadEvents();
    hideAddEventForm();
    document.getElementById('eventForm').reset();
});

// Edit an event
function editEvent(index) {
    const event = events[index];
    document.getElementById('eventName').value = event.name;
    document.getElementById('eventDate').value = event.date;
    document.getElementById('eventDescription').value = event.description;

    showAddEventForm();
    // Update the button to 'Update' instead of 'Add Event'
    document.getElementById('eventForm').onsubmit = function(event) {
        event.preventDefault();
        events[index] = {
            name: document.getElementById('eventName').value,
            date: document.getElementById('eventDate').value,
            description: document.getElementById('eventDescription').value
        };
        loadEvents();
        hideAddEventForm();
        document.getElementById('eventForm').reset();
    };
}

// Delete an event
function deleteEvent(index) {
    events.splice(index, 1);
    loadEvents();
}
