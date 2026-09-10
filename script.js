  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  items.forEach(i=>io.observe(i));
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    status.textContent = "Mengirim pesan...";

    const data = {
      nama: document.getElementById("nama").value,
      email: document.getElementById("email").value,
      pesan: document.getElementById("pesan").value
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbykRERt_49lPWjTdJuXMwF5IQpNaeBmJeDihEEJqBnekwAk6T1A-t-c50lGq4c7qhjAKw/exec",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      );

      status.textContent = "✅ Pesan berhasil dikirim!";
      form.reset();

    } catch (error) {
      status.textContent = "❌ Pesan gagal dikirim.";
      console.error(error);
    }
  });
}
