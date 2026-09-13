  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  items.forEach(i=>io.observe(i));
const form = document.getElementById("contactForm");
const status = document.getElementById("status");
const scriptURL = "https://script.google.com/macros/s/AKfycby5EtCnlIcH1-38eJuMXkvcEPVTCvsuZzlOLWK8R1XavTM8s4qdL5LZcgnewbJniE40Og/exec";
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
    scriptURL,
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
