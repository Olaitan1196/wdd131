window.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counter");
    let reviewCount = localStorage.getItem("reviewCount");

    if (!reviewCount) {
      reviewCount = 1;
    } else {
      reviewCount = parseInt(reviewCount) + 1;
    }

    localStorage.setItem("reviewCount", reviewCount);
    counterDisplay.textContent = reviewCount;
  });