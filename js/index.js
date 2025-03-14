const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


// for login sign up 

// Get elements from the DOM
const emailInput = document.querySelector('input[name="email"]'); // Get email input
const passwordInput = document.querySelector('input[name="psw"]'); // Get password input
const submitBtn = document.querySelector('.signupbtn'); // Get submit button (class="signupbtn")
const message = document.createElement('div'); // Create a message element
message.id = 'message';
document.querySelector('.login-form').appendChild(message); // Append message to the form

// Function to clear input fields
function clearInputFields() {
  emailInput.value = ""; // Clear email input
  passwordInput.value = ""; // Clear password input
}

// Check if the current page is for login or signup
const isLoginPage = window.location.pathname.includes('login.html');

// Handle form submission
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    let userCredential;
    if (isLoginPage) {
      // Login logic
      userCredential = await signInWithEmailAndPassword(auth, email, password);
      message.textContent = "Login successful! Redirecting...";
    } else {
      // Signup logic
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
      message.textContent = "Signup successful! Redirecting...";
    }

    const user = userCredential.user;
    message.style.color = "green";
    clearInputFields(); // Clear input fields after successful login/signup

    // Redirect to index.html after 2 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);

  } catch (error) {
    console.error(isLoginPage ? "Login error:" : "Signup error:", error);
    message.textContent = error.message;
    message.style.color = "red";
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////

