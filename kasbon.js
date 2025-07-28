document.getElementById("loginKasbonForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById("nama").value.toLowerCase();
  const password = document.getElementById("password").value;
  const hasilKasbon = document.getElementById("hasilKasbon");
  const kasbonText = document.getElementById("kasbonText");

  // Data karyawan (nama dan password dalam huruf kecil semua)
  const dataKasbon = {
  "febri adi fiansyah": { password: "2224", kasbon: 760000 },
"haky tri eryawan": { password: "2225", kasbon: 500000 },
"ferdiansyah": { password: "2226", kasbon: 300000 },
"dede gunawan": { password: "2227", kasbon: 200000 },
"hari anggawijaya": { password: "2228", kasbon: 900000 },
"fikran s janual": { password: "2229", kasbon: 250000 },
"salsa nabila azahra": { password: "2231", kasbon: 650000 },
"erik sopian": { password: "2233", kasbon: 250000 },
"refi saputra": { password: "2234", kasbon: 350000 },
"m. yusuf s nur": { password: "2235", kasbon: 150000 },
"risnawati": { password: "2236", kasbon: 900000 },
"muhammad fabil rasyid": { password: "2238", kasbon: 300000 },
"dede suryadin": { password: "2239", kasbon: 500000 },
"fauzan fuziansyah": { password: "2242", kasbon: 550000 },
"yanti sumiyanti": { password: "2246", kasbon: 300000 },
"nina agustina": { password: "2247", kasbon: 500000 },
"m faisal agasy": { password: "2251", kasbon: 150000 },
"arif setiawan": { password: "2252", kasbon: 400000 },
"melani azarina": { password: "2253", kasbon: 400000 },
"iman nurzaman": { password: "2255", kasbon: 300000 },
"neng sri anggraeni": { password: "2257", kasbon: 400000 },
"yesa mowina": { password: "2259", kasbon: 350000 },
"alludya rahaf aurasyifafa": { password: "2260", kasbon: 600000 },
"antia sini islami": { password: "2261", kasbon: 250000 },
"ratnasari": { password: "2263", kasbon: 250000 },
"nindia aprilianti": { password: "2266", kasbon: 500000 },
"siti maemunah oktavia": { password: "2267", kasbon: 500000 },
"anggi permana": { password: "2268", kasbon: 300000 },
"nuraeni 03": { password: "2271", kasbon: 200000 },
"eneng sumyati": { password: "2272", kasbon: 200000 },
"fanny fatwal cahyani": { password: "2274", kasbon: 700000 },
"fitria ambarwati": { password: "2276", kasbon: 200000 },
"rahma maulidha": { password: "2279", kasbon: 700000 },
"rika nurhayati": { password: "2280", kasbon: 250000 },
"wulandari meilani putri": { password: "2285", kasbon: 500000 },
"dewi sanjung": { password: "2286", kasbon: 300000 },
"heni anggraeni": { password: "2290", kasbon: 250000 },
"pahri husaeni": { password: "2291", kasbon: 150000 },
"tsania marwa": { password: "2293", kasbon: 250000 },
"gilar putra pangestu": { password: "2295", kasbon: 250000 },
"zilhan fauzi": { password: "2298", kasbon: 450000 },
"aris sunandi": { password: "2300", kasbon: 300000 },
"siti sarah": { password: "2304", kasbon: 400000 },
"dicky fadilah maulana": { password: "2308", kasbon: 100000 },
"gianti puspitasari": { password: "2310", kasbon: 500000 },
"hani natalia": { password: "2311", kasbon: 600000 },
"rineu": { password: "2315", kasbon: 100000 },
"neng andini noer habbibah": { password: "2316", kasbon: 400000 },
"intania": { password: "2318", kasbon: 300000 },
"herni sri lestari": { password: "2319", kasbon: 400000 },
"santi hermawanti": { password: "2321", kasbon: 450000 },
"silvia helen": { password: "2322", kasbon: 200000 },
"peni silviana erawan": { password: "2323", kasbon: 50000 },
"endra agustian": { password: "2333", kasbon: 150000 },
"ismi nur ajijah": { password: "2336", kasbon: 550000 },
"widiawati ayu lestari": { password: "2337", kasbon: 900000 },
"rini nuryani": { password: "2339", kasbon: 800000 },
"nurmala": { password: "2340", kasbon: 700000 },
"riana noprianti": { password: "2341", kasbon: 250000 },
"dwi mega novianty": { password: "2342", kasbon: 450000 },
"erica nayla maryam": { password: "2346", kasbon: 1000000 },
"sidik abdul rohman": { password: "2347", kasbon: 120000 },
"erni sukaesih": { password: "2348", kasbon: 400000 },
"m zhia rhamandha": { password: "2349", kasbon: 200000 },
"tiara delia nurfauziah junaedi": { password: "2350", kasbon: 300000 },
"anisya nurhaliza": { password: "2351", kasbon: 850000 },
"dara cynthia pasha": { password: "2352", kasbon: 250000 },
"eli ermawati": { password: "2354", kasbon: 250000 },
"ratnasari 04": { password: "2355", kasbon: 700000 },
"nezan nur risdiani": { password: "2362", kasbon: 500000 },
"ayang suryani": { password: "2363", kasbon: 300000 },
"erma rachmawati": { password: "2364", kasbon: 500000 },
"marsha ameldalia": { password: "2369", kasbon: 200000 },
"yusuf gunawan": { password: "2371", kasbon: 100000 },
"ramadani": { password: "2373", kasbon: 250000 },
"siti rohmah": { password: "2377", kasbon: 500000 },
"amelia putri": { password: "2380", kasbon: 300000 },
"muhammad faisal": { password: "2393", kasbon: 400000 },
"maulana yusuf": { password: "2394", kasbon: 200000 },
"mojang rucita wijaksana": { password: "2395", kasbon: 200000 },
"trisnawati dewi": { password: "2397", kasbon: 100000 },
"riska rismawati": { password: "2398", kasbon: 150000 },
"diah widaningsih": { password: "2406", kasbon: 300000 },
"fera permatasari": { password: "2407", kasbon: 100000 },
"nureina ardia kayla rahmani": { password: "2409", kasbon: 150000 },
"mita hafitya azzahra": { password: "2414", kasbon: 350000 },
"siti bilkis": { password: "2415", kasbon: 700000 },
"uci wulandari": { password: "2416", kasbon: 450000 },
"wini widiastuti": { password: "2423", kasbon: 150000 },
"susi susilawati": { password: "2424", kasbon: 350000 },
"silva rahayu": { password: "2428", kasbon: 150000 },
"muh latif asydik": { password: "2429", kasbon: 100000 },
"m dafa nugraha": { password: "2430", kasbon: 100000 },
"mela noviana": { password: "2431", kasbon: 200000 },

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
