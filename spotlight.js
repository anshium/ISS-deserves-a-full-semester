

window.addEventListener('load', function() {
    this.setTimeout(type, 1000);
  });
  

function type() {
  var type = document.getElementById('type_effect');
    var text = "IMAGINE DRAGONS";
    var index = 0;
    
    var intervalId = setInterval(function() {
      type.textContent += text[index];
      index++;
      
      if (index == text.length) {
        clearInterval(intervalId);
      }
    }, 100);
}

myImage = document.getElementById("artist_image")
myImage.onmouseover = function() {
    myImage.style.width = "110%";
    myImage.style.left = "-5%";
    myImage.style.top = "-5%";
    myImage.style.transition = "all 0.5s ease";
}
myImage.onmouseout = function(){
  myImage.style.width = "100%";
  myImage.style.left = "0%";
  myImage.style.top = "0%";
  myImage.style.transition = "all 0.5s ease";
}



// Set the date and time you want to count down to
const countDownDate = new Date("June 17, 2023 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();
    
  // Calculate the time remaining between now and the count down date
  const distance = countDownDate - now;
    
  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("days").innerHTML = days + "d " ;
  document.getElementById("rest").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    
  // If the count down is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);







const form = document.querySelector('#myForm');
const review = {}
const submitBtn = document.querySelector('#submit');
const messageDiv = document.querySelector('#message');

form.addEventListener('submit', function(event) {

  event.preventDefault(); // prevent form submission
  var flag1 = 1;
  var flag2 = 1;
  var flag3 = 1;
  review.name = document.getElementById("name_text_box").value.trim();
  if (review.name == ''){
    window.alert("Please enter a name");
    review = {}
    flag1 = 0;
  }
  
  const radiobutton = document.querySelector("input[name='rating']:checked");
  if (radiobutton) {
    review.rating = radiobutton.value;
  }
  else{
    window.alert("Please enter a rating");
    review = {}
    flag2 = 0;
  }

  review.rev = document.getElementById("review_text_box").value.trim();
  if (review.rev == ''){
    window.alert("Please give a review");
    review = {}
    flag3 = 0;
  }

  if (flag1 & flag2 & flag3) {
    form.reset(); 
  }

  messageDiv.textContent = 'Thanks for the review';
  messageDiv.style.display = 'block';

  setTimeout(function() {
    messageDiv.style.opacity = 1;
  }, 10);

  setTimeout(function() {
    messageDiv.style.opacity = 0;
  }, 5000);

  setTimeout(function() {
    messageDiv.style.display = 'none';
  }, 5500);

  document.getElementById("table_name").innerHTML = "Name: " + review['name']
  document.getElementById("table_rating").innerHTML = "Rating: " + review['rating']
  document.getElementById("table_review").innerText = "Review: " + review['rev']

  const myDiv = document.getElementById("table");
  myDiv.style.display = "block";
  setTimeout(function() {
    myDiv.style.opacity = 1;
  })

});
