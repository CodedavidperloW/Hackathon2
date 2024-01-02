const volunteers = [
  {
    profilePic: "images/helpA.jpg",
    firstName: "Brachi",
    lastName: "Doe",
    gender: "female",
    age: 28,
    location: "Tel Aviv",
    experienceYears: 3,
    talents: "Cooking",
    phone:"052.534.7780"
  },
  {
    profilePic: "images/helpB.jpg",
    firstName: "Yafit",
    lastName: "Smith",
    gender: "female",
    age: 35,
    location: "Jerusalem",
    experienceYears: 5,
    talents: "Child Care",
    phone:"050.554.7739"
  },
  {
    profilePic: "images/helpE.jpg",
    firstName: "Alex",
    lastName: "Johnson",
    gender: "male",
    age: 22,
    location: "Rehovot",
    experienceYears: 1,
    talents: "Cleaning",
    phone:"054.254.4539"
  },
  {
    profilePic: "images/helpD.jpg",
    firstName: "Meira",
    lastName: "Schwartz",
    gender: "female",
    age: 19,
    location: "Rehovot",
    experienceYears: 3,
    talents: "Teaching Hobbies",
    phone:"054.754.1239"
  },
  {
    profilePic: "images/helpC.jpg",
    firstName: "Yonat",
    lastName: "Aloni",
    gender: "female",
    age: 22,
    location: "Rosh HaAyin",
    experienceYears: 1,
    talents: "Sports",
    phone:"052.214.4439"
  },
];

const appContainer = document.getElementById('app');
const searchInput = document.getElementById('search');

function filterVolunteers() {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredVolunteers = volunteers.filter(volunteer => {
        const matchesSearch = (
            volunteer.firstName.toLowerCase().includes(searchTerm) ||
            volunteer.lastName.toLowerCase().includes(searchTerm) ||
            volunteer.gender.toLowerCase().includes(searchTerm) ||
            volunteer.location.toLowerCase().includes(searchTerm) ||
            volunteer.talents.toLowerCase().includes(searchTerm)
        );

        return matchesSearch;
    });

    renderVolunteers(filteredVolunteers);
}

function renderVolunteers(volunteersToRender) {
    appContainer.innerHTML = ''; // Clear previous content

    volunteersToRender.forEach((volunteer, index) => {
        const volunteerContainer = document.createElement('div');
        volunteerContainer.classList.add('container');

        const profilePic = document.createElement('img');
        profilePic.src = volunteer.profilePic;
        profilePic.alt = `${volunteer.firstName}'s Profile Picture`;
        volunteerContainer.appendChild(profilePic);

        const textInfo = document.createElement('span');
        textInfo.textContent = `${volunteer.firstName} ${volunteer.lastName}, Gender: ${volunteer.gender} Age: ${volunteer.age}, Location:  ${volunteer.location}, Experience: ${volunteer.experienceYears} years, ${volunteer.otherInfo || ''}`;
        volunteerContainer.appendChild(textInfo);

        appContainer.appendChild(volunteerContainer);
    });
}

// Event listener for the search input
searchInput.addEventListener('input', filterVolunteers);

// Initial render
renderVolunteers(volunteers);
