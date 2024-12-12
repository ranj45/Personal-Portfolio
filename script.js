
  const toggleButton = document.querySelector('.toggle-button');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    // Check the current background color and toggle
    if (body.style.backgroundColor === 'white') {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      toggleButton.textContent = 'Light Mode';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      toggleButton.textContent = 'Dark Mode';
    }
  });



var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
  sidenav.style.left="0"
}

function closeNavbar(){

  sidenav.style.left="-60%"

}