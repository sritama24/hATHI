
// Badge Section
function showBadgeAlert(event) {
    const badgeDescription = event.currentTarget.querySelector('.badge-description');
    const message = badgeDescription.textContent;
    if(message==="Explorer")
    alert(`She is an Explorer. She likes to explore anything may be a place, a topic, a puzzle, a person and so many things. In short words a " Detective of her own ".`);
    if(message==="Novel Prize Winner")
    alert(`Reads a lot of Novels. Loves collecting Books and all she wants is to have her own mega library one day. Has a very well knowledge of literature , science and social studies. Her interests in books is the best quality of her according to me which I like the most.  Her knowledge is very vast and pious just like her heart. So NOVEL PRIZE belongs to Sritama Kumar .`);
    if(message==="Dreamer")
    alert(`A Dreamer who wants to experience a lot of happiness, wants to fulfill a lot of wishes of her own , of her parents, of her little brother and so on . Never Give Up and Keep Dreaming !`);

  }
  
  // Get all the "badges-blocks" elements
  const badgesBlocks = document.querySelectorAll('.badges-blocks');
  
  // Add click event listeners to each "badges-blocks" element
  badgesBlocks.forEach((block) => {
    block.addEventListener('click', showBadgeAlert);
  });


  // Journey To HomePage
  document.addEventListener('DOMContentLoaded', function() {
    // Get the div element
    const myDiv = document.getElementById('journey-back');
    // Add a click event listener to the div
    myDiv.addEventListener('click', function() {
      // Replace 'your-target-page.html' with the desired URL or page you want to open
      window.location.href = 'index.html';
    });
  });
  //Subjects to Study Materials
  document.addEventListener('DOMContentLoaded', function() {
    // Get the div element
    const myDivx = document.getElementById('subject-back');
    // Add a click event listener to the div
    myDivx.addEventListener('click', function() {
      // Replace 'your-target-page.html' with the desired URL or page you want to open
      window.location.href = 'material.html';
    });
  });
  //HomePage to Journey
  document.addEventListener('DOMContentLoaded', function() {
    // Get the div element
    const myDiv2 = document.getElementById('journey');
    // Add a click event listener to the div
    myDiv2.addEventListener('click', function() {
      // Replace 'your-target-page.html' with the desired URL or page you want to open
      var x = prompt("Enter Authentication CODE ");
      if(x==="aditi"){
      window.location.href = 'journey.html';
      }else{
        alert("Invalid CODE");
      }
    });
  });
// HomePage to Dreams
document.addEventListener('DOMContentLoaded', function() {
  // Get the div element
  const myDiv3 = document.getElementById('DREAMS');
  // Add a click event listener to the div
  myDiv3.addEventListener('click', function() {
    // Replace 'your-target-page.html' with the desired URL or page you want to open
    var x = prompt("Enter Authentication CODE ");
      if(x==="aditi"){
      window.location.href = 'dreams.html';
      }else{
        alert("Invalid CODE");
      }
  });
});
//HomPage to Materials
document.addEventListener('DOMContentLoaded', function() {
  const myDiv4 = document.getElementById('material-page');
  myDiv4.addEventListener('click', function() {
    window.location.href = 'material.html';
  });
});

//StudyMaterials to Physics
document.addEventListener('DOMContentLoaded', function() {
  const myDiv4 = document.getElementById('physics');
  myDiv4.addEventListener('click', function() {
    window.location.href = 'physics.html';
  });
});
// StudyMaterials to Maths
document.addEventListener('DOMContentLoaded', function() {
  const myDiv4 = document.getElementById('maths');
  myDiv4.addEventListener('click', function() {
    window.location.href = 'maths.html';
  });
});
// StudyMaterials to Maths
document.addEventListener('DOMContentLoaded', function() {
  const myDiv7 = document.getElementById('chemistry');
  myDiv7.addEventListener('click', function() {
    window.location.href = 'chemistry.html';
  });
});
// StudyMaterials to Biology
document.addEventListener('DOMContentLoaded', function() {
  const myDiv7 = document.getElementById('biology');
  myDiv7.addEventListener('click', function() {
    window.location.href = 'biology.html';
  });
});

//GameBlock to Game Section
document.addEventListener('DOMContentLoaded', function() {
  const myDiv7 = document.getElementById('game-block');
  myDiv7.addEventListener('click', function() {
    window.location.href = 'games.html';
  });
});
//FavouriteBlock to Favourite Section
document.addEventListener('DOMContentLoaded', function() {
  const myDiv7 = document.getElementById('favourites-block');
  myDiv7.addEventListener('click', function() {
    // Replace 'your-target-page.html' with the desired URL or page you want to open
    var x = prompt("Enter Authentication CODE ");
      if(x==="aditi"){
      window.location.href = 'favourites.html';
      }else{
        alert("Invalid CODE");
      }
  });
});
// i-button
let iButton=document.getElementById('i-button');
iButton.addEventListener('click',function(){
  alert(`Thank you for visiting us.
Designed and Developed by team jUPITER`);
});
//love button

function getGreeting() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning SRITAMA KUMAR ! Have a Nice Day.";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon ! Hope your day is going absolutely fine. Take some nap and rest yourself.  Keep up the hard work.";
  } else {
    greeting = "Good Night!!!!! and Sweet Dreams! Keep smiling.";
  }

  alert(greeting + "!");
};
let loveButton=document.querySelector(".loveButton");
loveButton.addEventListener('click',function(){
  getGreeting();
});






