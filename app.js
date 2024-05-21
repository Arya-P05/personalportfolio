const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

tl.fromTo(
  `.hero-img`,
  { scale: 1.3, borderRadius: 0 },
  {
    scale: 1,
    borderRadius: `0.6rem`,
    delay: 0.3,
    duration: 2.5,
    ease: "elastic.out(1.5, 1)",
  }
)
  .fromTo(`.cta-1`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-3`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-2`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-4`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-6`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-5`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
  .fromTo(`.cta-btn`, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");

const logo = document.querySelector(`.logo`);
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += `<span class="letter">${letter}</span>`;
});

gsap.set(`.letter`, { display: `inline-block` });

gsap.fromTo(
  `.letter`,
  { y: `100%`, opacity: 0 },
  { y: 0, opacity: 1, delay: 1.25, stagger: 0.025, ease: "back.out(3)" }
);

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".pic-claim").style.opacity = "1";
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  var initialContent = document.getElementById("opening-content");
  var newContent = document.getElementById("main-content");
  var learnMoreBtn = document.getElementById("learn-more-btn");

  learnMoreBtn.addEventListener("click", function () {
    initialContent.style.display = "none";
    newContent.style.display = "block";
  });
});

function openResume() {
  var resumeUrl = "FINAL.pdf";
  window.open(resumeUrl, "_blank");
}

function calculateExperience(startDate) {
  var currentDate = new Date();
  console.log(currentDate, startDate);
  var years = currentDate.getFullYear() - startDate.getFullYear();
  var months = currentDate.getMonth() - startDate.getMonth();
  var totalMonths = years * 12 + months;
  var yearsExperience = totalMonths / 12;
  var professionalExperience = yearsExperience - 2.4;
  return [yearsExperience.toFixed(1), professionalExperience.toFixed(1)];
}

function updateExperience() {
  var startDate = new Date("2019-11-17");
  startDate.setFullYear(startDate.getFullYear());
  var [codingYears, professionalYears] = calculateExperience(startDate);

  document.getElementById("codingYears").textContent = codingYears;
  document.getElementById("professionalYears").textContent = professionalYears;
}

window.onload = updateExperience;

function calculateAge(startDate) {
  var currentDate = new Date();
  console.log(currentDate, startDate);
  var years = currentDate.getFullYear() - startDate.getFullYear();
  var months = currentDate.getMonth() - startDate.getMonth();
  var totalMonths = years * 12 + months;
  var yearsLived = totalMonths / 12;
  return yearsLived.toFixed(0);
}

function updateAge() {
  var birthDate = new Date("2005-06-05");
  console.log(birthDate);
  birthDate.setFullYear(birthDate.getFullYear());
  var age = calculateAge(birthDate);

  document.getElementById("age").textContent = age;
}

window.onload = updateAge;
