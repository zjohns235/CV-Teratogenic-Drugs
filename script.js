document.addEventListener('DOMContentLoaded', () => {
// This creates a variable for the search bar
const searchBar = document.querySelector('.search-bar');
// This adds the funtionality to the search bar
searchBar.addEventListener('change', (event) => {
    if (event.target.value === 'ARBS') {
      window.location.href = 'ARBS.html';
    }
  if (event.target.value === 'aceinhibitors') {
    window.location.href = 'ACE.html';
  }
  if (event.target.value === 'bloodthinners') {
    window.location.href = 'bloodthinners.html';
  }
  if (event.target.value === 'statins') {
    window.location.href = 'statins.html';
  }
  if (event.target.value === 'others') {
    window.location.href = 'others.html';
  }
    })

// get the image element
const image = document.querySelector('.lower-left-image');
// add event listener to the image
image.addEventListener('click', () => {
  // redirect to new html file
  window.location.href = 'howto.html';
  });

  // get the lower right icon element
  const image2 = document.querySelector('.lower-right-icon');
  // add event listener to the icon
  
  image2.addEventListener('click', () => {
    // redirect to new html file
    window.location.href = 'disclaimer.html';
  });

  // get the lower right icon element
  const image3 = document.querySelector('.center-icon');
  // add event listener to the icon

  image3.addEventListener('click', () => {
    // redirect to new html file
    window.location.href = 'centericon.html';
  });
  
});
