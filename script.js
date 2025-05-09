// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle "Get Started" button click
  const getStartedBtn = document.querySelector(".text-wrapper");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      alert("Welcome to the Plant Care Guide!");
      // Example redirect:
      // window.location.href = "home.html";
    });
  }

  // Handle star rating
  const stars = document.querySelectorAll(".star, .star-2, .star-3, .star-4, .star-5, .star-6, .star-7, .star-8, .star-9, .star-10");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      highlightStars(index);
    });

    star.addEventListener("mouseover", () => {
      highlightStars(index);
    });

    star.addEventListener("mouseout", () => {
      resetStars();
    });
  });

  function highlightStars(index) {
    stars.forEach((star, i) => {
      star.style.backgroundColor = i <= index ? "#FFD700" : "#ccc";
    });
  }

  function resetStars() {
    stars.forEach((star) => {
      star.style.backgroundColor = "#FFD700"; // Reset to default filled
    });
  }

  // Optional: Handle image loading errors
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.onerror = () => {
      img.src = "https://via.placeholder.com/150?text=Image+Not+Found";
    };
  });
});
