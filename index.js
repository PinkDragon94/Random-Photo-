
document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
        try {
            // Fetch data from the API
            const response = await fetch('https://randomuser.me/api/');
            
            // Check if the response is okay (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON data
            const data = await response.json();

            // Extract user data
            const user = data.results[0];
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const email = user.email;
            const pictureUrl = user.picture.large;

            // Update HTML elements
            document.getElementById('user-name').textContent = fullName;
            document.getElementById('user-email').textContent = email;
            document.getElementById('user-picture').src = pictureUrl;
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally, display an error message in the UI
            document.getElementById('user-name').textContent = 'Error fetching data';
            document.getElementById('user-email').textContent = '';
            document.getElementById('user-picture').src = '';
        }
    }
    const button = document.getElementById('fetch-user-btn');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked');
            fetchUserData();
        });
    } else {
        console.error('Button not found');
    }
   
    fetchUserData();
});





