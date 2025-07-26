document.addEventListener("DOMContentLoaded", function () {
  const div = document.getElementById("listKasbon");
  if (!div) return;

  const namaLogin = localStorage.getItem("namaLogin");

  const kasbonData = [
    { nama: "Budiansyah", jumlah: 300000 },
    { nama: "Siti", jumlah: 250000 },
    { nama: "Andi", jumlah: 200000 },
    { nama: "Budiansyah", jumlah: 150000 }
  ];

  if (!namaLogin) {
    div.innerHTML = "<p>❌ Kamu belum login. Silakan login terlebih dahulu.</p>";
  } else {
    const kasbonSaya = kasbonData.filter(k => k.nama.toLowerCase() === namaLogin.toLowerCase());

    if (kasbonSaya.length === 0) {
      div.innerHTML = `<p>✅ Tidak ada kasbon untuk <strong>${namaLogin}</strong>.</p>`;
    } else {
      kasbonSaya.forEach(k => {
        const item = document.createElement("div");
        item.className = "kasbon-item";
        item.textContent = `✔️ ${k.nama} - Rp ${k.jumlah.toLocaleString("id-ID")}`;
        div.appendChild(item);
      });
    }
  }
});


