// Header scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade-in").forEach(el=>{
  observer.observe(el);
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
  const update = ()=>{
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});