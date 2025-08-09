document.getElementById("loginKasbonForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById("nama").value.toLowerCase();
  const password = document.getElementById("password").value;
  const hasilKasbon = document.getElementById("hasilKasbon");
  const kasbonText = document.getElementById("kasbonText");

  // Data karyawan (nama dan password dalam huruf kecil semua)
  const dataKasbon = {
"rusdi rustiandi saputra": { password: "2222", kasbon: 300000 },
"febri adi fiansyah": { password: "2224", kasbon: 600000 },
"haky tri eryawan": { password: "2225", kasbon: 600000 },
"dede gunawan": { password: "2227", kasbon: 200000 },
"hari anggawijaya": { password: "2228", kasbon: 1000000 },
"fikran s janual": { password: "2229", kasbon: 300000 },
"erik sopian": { password: "2233", kasbon: 120000 },
"refi saputra": { password: "2234", kasbon: 150000 },
"m. yusuf s nur": { password: "2235", kasbon: 220000 },
"muhammad fabil rasyid": { password: "2238", kasbon: 250000 },
"dede suryadin": { password: "2239", kasbon: 300000 },
"fauzan fuziansyah": { password: "2242", kasbon: 500000 },
"carla amalia arifani": { password: "2245", kasbon: 3000000 },
"yanti sumiyanti": { password: "2246", kasbon: 450000 },
"nina agustina": { password: "2247", kasbon: 550000 },
"sopian jaelani": { password: "2250", kasbon: 200000 },
"arif setiawan": { password: "2252", kasbon: 300000 },
"iman nurzaman": { password: "2255", kasbon: 300000 },
"neng sri anggraeni": { password: "2257", kasbon: 300000 },
"yesa mowina": { password: "2259", kasbon: 350000 },
"alludya rahaf aurasyifafa": { password: "2260", kasbon: 250000 },
"ratnasari": { password: "2263", kasbon: 600000 },
"irmawati": { password: "2264", kasbon: 700000 },
"nindia aprilianti": { password: "2266", kasbon: 450000 },
"siti maemunah oktavia": { password: "2267", kasbon: 300000 },
"anggi permana": { password: "2268", kasbon: 450000 },
"santi": { password: "2269", kasbon: 500000 },
"nuraeni 03": { password: "2271", kasbon: 400000 },
"eneng sumyati": { password: "2272", kasbon: 450000 },
"lisnawati": { password: "2273", kasbon: 500000 },
"fitria ambarwati": { password: "2276", kasbon: 1500000 },
"andi rusyandi": { password: "2277", kasbon: 200000 },
"mohamad padil": { password: "2278", kasbon: 433000 },
"rahma maulidha": { password: "2279", kasbon: 600000 },
"rika nurhayati": { password: "2280", kasbon: 450000 },
"ardi muhammad ayub": { password: "2281", kasbon: 100000 },
"jaya nugi nugraha": { password: "2282", kasbon: 300000 },
"wulandari meilani putri": { password: "2285", kasbon: 1000000 },
"dewi sanjung": { password: "2286", kasbon: 300000 },
"heni anggraeni": { password: "2290", kasbon: 370000 },
"pahri husaeni": { password: "2291", kasbon: 250000 },
"muhammad eka astiyan": { password: "2292", kasbon: 250000 },
"tsania marwa": { password: "2293", kasbon: 600000 },
"gilar putra pangestu": { password: "2295", kasbon: 50000 },
"zilhan fauzi": { password: "2298", kasbon: 250000 },
"aris sunandi": { password: "2300", kasbon: 650000 },
"siti sarah": { password: "2304", kasbon: 250000 },
"bagas rian nugraha": { password: "2306", kasbon: 100000 },
"gianti puspitasari": { password: "2310", kasbon: 400000 },
"hani natalia": { password: "2311", kasbon: 800000 },
"rineu": { password: "2315", kasbon: 1300000 },
"neng andini noer habbibah": { password: "2316", kasbon: 400000 },
"herni sri lestari": { password: "2319", kasbon: 450000 },
"santi hermawanti": { password: "2321", kasbon: 450000 },
"silvia helen": { password: "2322", kasbon: 500000 },
"peni silviana erawan": { password: "2323", kasbon: 150000 },
"ismi nur ajijah": { password: "2336", kasbon: 550000 },
"widiawati ayu lestari": { password: "2337", kasbon: 1300000 },
"rini nuryani": { password: "2339", kasbon: 1000000 },
"nurmala": { password: "2340", kasbon: 300000 },
"riana noprianti": { password: "2341", kasbon: 400000 },
"dwi mega novianty": { password: "2342", kasbon: 1000000 },
"faujiah isyuniarti": { password: "2343", kasbon: 300000 },
"sidik abdul rohman": { password: "2347", kasbon: 120000 },
"erni sukaesih": { password: "2348", kasbon: 450000 },
"m zhia rhamandha": { password: "2349", kasbon: 100000 },
"anisya nurhaliza": { password: "2351", kasbon: 850000 },
"dara cynthia pasha": { password: "2352", kasbon: 300000 },
"eli ermawati": { password: "2354", kasbon: 350000 },
"ratnasari 04": { password: "2355", kasbon: 500000 },
"pegi anugrah jultiaman": { password: "2357", kasbon: 50000 },
"nezan nur risdiani": { password: "2362", kasbon: 1000000 },
"ayang suryani": { password: "2363", kasbon: 600000 },
"erma rachmawati": { password: "2364", kasbon: 500000 },
"marsha ameldalia": { password: "2369", kasbon: 300000 },
"ramadani": { password: "2373", kasbon: 150000 },
"hilma amalia": { password: "2376", kasbon: 560000 },
"siti rohmah": { password: "2377", kasbon: 300000 },
"amelia putri": { password: "2380", kasbon: 300000 },
"riva auliani": { password: "2383", kasbon: 300000 },
"muhamad rijky alamsyah": { password: "2390", kasbon: 100000 },
"muhammad faisal": { password: "2393", kasbon: 200000 },
"maulana yusuf": { password: "2394", kasbon: 100000 },
"trisnawati dewi": { password: "2397", kasbon: 200000 },
"riska rismawati": { password: "2398", kasbon: 450000 },
"diaz hermayadi": { password: "2399", kasbon: 100000 },
"ita nurlita": { password: "2405", kasbon: 250000 },
"diah widaningsih": { password: "2406", kasbon: 550000 },
"fera permatasari": { password: "2407", kasbon: 500000 },
"nazira syahwal": { password: "2410", kasbon: 350000 },
"saripah fatmawati": { password: "2413", kasbon: 300000 },
"mita hafitya azzahra": { password: "2414", kasbon: 700000 },
"siti bilkis": { password: "2415", kasbon: 400000 },
"uci wulandari": { password: "2416", kasbon: 350000 },



  };

  // Cek apakah nama dan password cocok
  if (dataKasbon[nama] && dataKasbon[nama].password === password) {
    const jumlah = dataKasbon[nama].kasbon.toLocaleString("id-ID");
    kasbonText.textContent = `Kasbon kamu saat ini adalah Rp${jumlah}`;

    // Sembunyikan form input
    document.getElementById("loginKasbonForm").style.display = "none";

    // Tampilkan hasil
    hasilKasbon.style.display = "block";
  } else {
    kasbonText.textContent = "Nama atau password salah!";
    hasilKasbon.style.display = "block";
  }
});
