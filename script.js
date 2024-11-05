function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!name || !email || !phone || !description) {
        alert("Semua field harus diisi.");
        return;
    }

    const pesan = `Nama: ${name}\nEmail: ${email}\nNomor HP: ${phone}\nDeskripsi: ${description}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=6281319179675&text=${encodeURIComponent(pesan)}`;
    
    window.open(whatsappURL, '_blank');
}