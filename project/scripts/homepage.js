document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', () => {
      localStorage.setItem('visitedCakes', 'true');
      console.log('Redirecting to cakes page...');
    });
  });

  const cakes = [
    {
      name: "Vanilla Bliss",
      desc: "Light, fluffy, and topped with creamy vanilla frosting.",
      img: "images/vanilla.png",
    },
    {
      name: "Chocolate Dream",
      desc: "Rich chocolate layers wrapped in ganache.",
      img: "images/chocolate.jpg",
    },
    {
      name: "Red Velvet Glory",
      desc: "Smooth red velvet cake with creamy cheese frosting.",
      img: "images/redvelvet.png",
    }
  ];
  
  if (document.getElementById("cakeList")) {
    const cakeList = document.getElementById("cakeList");
    cakes.forEach(cake => {
      const card = document.createElement("article");
      card.innerHTML = `
        <img src="${cake.img}" alt="${cake.name}" loading="lazy">
        <h3>${cake.name}</h3>
        <p>${cake.desc}</p>
      `;
      cakeList.appendChild(card);
    });
  }

  const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      const formData = { name, email, message, date: new Date().toISOString() };
      localStorage.setItem("cakeContact", JSON.stringify(formData));

      document.getElementById("formMessage").textContent = `Thank you, ${name}. We'll get back to you shortly.`;
      form.reset();
    } else {
      document.getElementById("formMessage").textContent = "Please fill out all fields.";
    }
  });
}
