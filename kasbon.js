document.getElementById("loginKasbonForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById("nama").value.toLowerCase();
  const password = document.getElementById("password").value;
  const hasilKasbon = document.getElementById("hasilKasbon");
  const kasbonText = document.getElementById("kasbonText");

  // Data karyawan (nama dan password dalam huruf kecil semua)
  const dataKasbon = {
"rusdi rustiandi saputra": { password: "2222", kasbon: 3350000 },
"budiansyah": { password: "2223", kasbon: 502500 },
"febri adi fiansyah": { password: "2224", kasbon: 500000 },
"haky tri eryawan": { password: "2225", kasbon: 350000 },
"ferdiansyah": { password: "2226", kasbon: 500000 },
"dede gunawan": { password: "2227", kasbon: 400000 },
"hari anggawijaya": { password: "2228", kasbon: 700000 },
"fikran s janual": { password: "2229", kasbon: 300000 },
"mutiara zahriatul pasya": { password: "2230", kasbon: 2800000 },
"salsa nabila azahra": { password: "2231", kasbon: 1500000 },
"refi saputra": { password: "2234", kasbon: 250000 },
"m. yusuf s nur": { password: "2235", kasbon: 250000 },
"risnawati": { password: "2236", kasbon: 2200000 },
"muhammad fabil rasyid": { password: "2238", kasbon: 350000 },
"dede suryadin": { password: "2239", kasbon: 450000 },
"fauzan fuziansyah": { password: "2242", kasbon: 600000 },
"santi amelia": { password: "2243", kasbon: 500000 },
"yanti sumiyanti": { password: "2246", kasbon: 550000 },
"nina agustina": { password: "2247", kasbon: 350000 },
"m faisal agasy": { password: "2251", kasbon: 150000 },
"arif setiawan": { password: "2252", kasbon: 500000 },
"iman nurzaman": { password: "2255", kasbon: 500000 },
"neng sri anggraeni": { password: "2257", kasbon: 200000 },
"yesa mowina": { password: "2259", kasbon: 350000 },
"alludya rahaf aurasyifafa": { password: "2260", kasbon: 450000 },
"rina lestari": { password: "2262", kasbon: 1150000 },
"ratnasari": { password: "2263", kasbon: 350000 },
"irmawati": { password: "2264", kasbon: 700000 },
"nindia aprilianti": { password: "2266", kasbon: 250000 },
"siti maemunah oktavia": { password: "2267", kasbon: 600000 },
"anggi permana": { password: "2268", kasbon: 350000 },
"eneng sumyati": { password: "2272", kasbon: 300000 },
"andi rusyandi": { password: "2277", kasbon: 200000 },
"mohamad padil": { password: "2278", kasbon: 400000 },
"rahma maulidha": { password: "2279", kasbon: 800000 },
"ardi muhammad ayub": { password: "2281", kasbon: 100000 },
"jaya nugi nugraha": { password: "2282", kasbon: 150000 },
"muhammad rifqi mustopa kamil": { password: "2284", kasbon: 100000 },
"wulandari meilani putri": { password: "2285", kasbon: 500000 },
"dewi sanjung": { password: "2286", kasbon: 400000 },
"heni anggraeni": { password: "2290", kasbon: 350000 },
"pahri husaeni": { password: "2291", kasbon: 250000 },
"tsania marwa": { password: "2293", kasbon: 350000 },
"gilar putra pangestu": { password: "2295", kasbon: 150000 },
"siti sarah": { password: "2304", kasbon: 300000 },
"bagas rian nugraha": { password: "2306", kasbon: 50000 },
"gianti puspitasari": { password: "2310", kasbon: 450000 },
"hani natalia": { password: "2311", kasbon: 400000 },
"novia": { password: "2312", kasbon: 1000000 },
"rineu": { password: "2315", kasbon: 100000 },
"neng andini noer habbibah": { password: "2316", kasbon: 400000 },
"intania": { password: "2318", kasbon: 450000 },
"herni sri lestari": { password: "2319", kasbon: 450000 },
"santi hermawanti": { password: "2321", kasbon: 450000 },
"silvia helen": { password: "2322", kasbon: 200000 },
"peni silviana erawan": { password: "2323", kasbon: 400000 },
"muhammad abdul salam": { password: "2326", kasbon: 130000 },
"saepul rahman": { password: "2328", kasbon: 250000 },
"melisa sabila": { password: "2330", kasbon: 1000000 },
"endra agustian": { password: "2333", kasbon: 160000 },
"ismi nur ajijah": { password: "2336", kasbon: 350000 },
"najwa zahiyyah hanun": { password: "2338", kasbon: 1100000 },
"nurmala": { password: "2340", kasbon: 300000 },
"riana noprianti": { password: "2341", kasbon: 350000 },
"dwi mega novianty": { password: "2342", kasbon: 450000 },
"faujiah isyuniarti": { password: "2343", kasbon: 500000 },
"erica nayla maryam": { password: "2346", kasbon: 350000 },
"sidik abdul rohman": { password: "2347", kasbon: 200000 },
"erni sukaesih": { password: "2348", kasbon: 450000 },
"m zhia rhamandha": { password: "2349", kasbon: 150000 },
"tiara delia nurfauziah junaedi": { password: "2350", kasbon: 400000 },
"anisya nurhaliza": { password: "2351", kasbon: 400000 },
"dara cynthia pasha": { password: "2352", kasbon: 350000 },
"eli ermawati": { password: "2354", kasbon: 250000 },
"nezan nur risdiani": { password: "2362", kasbon: 100000 },
"ayang suryani": { password: "2363", kasbon: 300000 },
"erma rachmawati": { password: "2364", kasbon: 500000 },
"marsha ameldalia": { password: "2369", kasbon: 1000000 },
"rissal herdiansyah": { password: "2370", kasbon: 100000 },
"yusuf gunawan": { password: "2371", kasbon: 102500 },
"ramadani": { password: "2373", kasbon: 100000 },
"siti rohmah": { password: "2377", kasbon: 550000 },
"nesa hardianty putri": { password: "2379", kasbon: 450000 },
"muhamad rijky alamsyah": { password: "2390", kasbon: 200000 },
"maulana yusuf": { password: "2394", kasbon: 150000 },
"mojang rucita wijaksana": { password: "2395", kasbon: 800000 },
"trisnawati dewi": { password: "2397", kasbon: 300000 },
"riska rismawati": { password: "2398", kasbon: 250000 },
"diaz hermayadi": { password: "2399", kasbon: 150000 },
"ita nurlita": { password: "2405", kasbon: 150000 },
"diah widaningsih": { password: "2406", kasbon: 600000 },
"fera permatasari": { password: "2407", kasbon: 350000 },
"nazira syahwal": { password: "2410", kasbon: 330000 },
"saripah fatmawati": { password: "2413", kasbon: 250000 },
"siti bilkis": { password: "2415", kasbon: 300000 },
"cikal firgina tasya": { password: "2419", kasbon: 150000 },
"wini widiastuti": { password: "2423", kasbon: 250000 },
"silva rahayu": { password: "2428", kasbon: 250000 },
"muh latif asydik": { password: "2429", kasbon: 200000 },
"m dafa nugraha": { password: "2430", kasbon: 50000 },
"mela noviana": { password: "2431", kasbon: 300000 },
"ester felisia": { password: "2435", kasbon: 118000 },



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
