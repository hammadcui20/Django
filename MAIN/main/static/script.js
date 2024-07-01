/*menu bar*/

// import ajax from cdn
import { ajax } from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

  /*login*/
 // Get relevant elements
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const logoutBtn = document.querySelector(".logout-btn a");

// Function to handle logout
function logout(event) {
    event.preventDefault();
    // Your logout logic goes here
    // For now, let's just reload the page
    location.reload();
}

// Event listeners
signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
};

signupLink.onclick = (event) => {
    signupBtn.click();
    event.preventDefault();
};

logoutBtn.onclick = logout;


// recommendations.js

// Make a GET request to fetch paper data using Axios
axios.get('/process_recommendation/')
    .then(response => {
        const papers = response.data;
        // Process the received paper data
        const paperList = document.getElementById('paper-list');
        if (papers.length > 0) {
            const ul = document.createElement('ul');
            papers.forEach(paper => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${paper.paper_title}</h3>
                    <p>Year: ${paper.year}</p>
                    <p>Author: ${paper.author}</p>
                    <p>Publication: ${paper.publication}</p>
                    <a href="${paper.url}" target="_blank">Link</a>
                `;
                ul.appendChild(li);
            });
            paperList.appendChild(ul);
        } else {
            paperList.innerHTML = '<p>No recommendations found.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


