// Toggle menu untuk mobile
document.getElementById('menu-toggle').onclick = function() {
  document.getElementById('menu').classList.toggle('active');
};

// Contoh data slip gaji (bisa diganti dengan fetch dari server atau file JSON)
const dataSlip = [
  { nik: "230145", nama: "Budi Santoso", departemen: "DRYING", gaji: 4500000, potongan: 300000 },
  { nik: "230146", nama: "Siti Aminah", departemen: "STC ELLIPS", gaji: 4700000, potongan: 250000 },
  { nik: "230147", nama: "Rusdi Rustiandi", departemen: "DEVIASI", gaji: 5000000, potongan: 350000 }
];

function cekSlip() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const hasil = dataSlip.find(item => item.nik === input || item.nama.toLowerCase() === input);

  const box = document.getElementById("resultBox");

  if (hasil) {
    document.getElementById("nama").textContent = hasil.nama;
    document.getElementById("departemen").textContent = hasil.departemen;
    document.getElementById("gaji").textContent = "Rp " + hasil.gaji.toLocaleString("id-ID");
    document.getElementById("potongan").textContent = "Rp " + hasil.potongan.toLocaleString("id-ID");
    document.getElementById("total").textContent = "Rp " + (hasil.gaji - hasil.potongan).toLocaleString("id-ID");
    box.style.display = "block";
  } else {
    box.style.display = "block";
    box.innerHTML = "<p style='color:#ff8080'>Data tidak ditemukan. Pastikan NIK atau nama sudah benar.</p>";
  }
}
