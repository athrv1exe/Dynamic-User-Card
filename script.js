const userCard = document.querySelector('.user-card');
const profilePicture = userCard.querySelector('.profile-picture img');
const userInformation = userCard.querySelector('.user-info');
const fetchUserButton = document.getElementById('fetch-user');

// This is function to fetch a random user and update the user card
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // To update user details on the card
        profilePicture.src = user.picture.large;
        userCard.querySelector('.username').textContent = `Username: ${user.login.username}`;
        userCard.querySelector('.full-name').textContent = `Full Name: ${user.name.first} ${user.name.last}`;
        userCard.querySelector('.gender').textContent = `Gender: ${user.gender}`;
        userCard.querySelector('.birthdate').textContent = `Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}`;
        userCard.querySelector('.address').textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
        userCard.querySelector('.email').textContent = `Email Address: ${user.email}`;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

// Toggle card expansion on click
userCard.addEventListener('click', () => {
    userCard.classList.toggle('expanded');
});

// Fetch a random user when the button is clicked
fetchUserButton.addEventListener('click', fetchRandomUser);

// Fetch a random user on page load
fetchRandomUser();