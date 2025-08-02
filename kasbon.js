document.getElementById("loginKasbonForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById("nama").value.toLowerCase();
  const password = document.getElementById("password").value;
  const hasilKasbon = document.getElementById("hasilKasbon");
  const kasbonText = document.getElementById("kasbonText");

  // Data karyawan (nama dan password dalam huruf kecil semua)
  const dataKasbon = {
  "rusdi rustiandi saputra": { password: "2222", kasbon: 150000 },
"febri adi fiansyah": { password: "2224", kasbon: 1100000 },
"haky tri eryawan": { password: "2225", kasbon: 600000 },
"ferdiansyah": { password: "2226", kasbon: 500000 },
"dede gunawan": { password: "2227", kasbon: 750000 },
"hari anggawijaya": { password: "2228", kasbon: 900000 },
"fikran s janual": { password: "2229", kasbon: 300000 },
"salsa nabila azahra": { password: "2231", kasbon: 600000 },
"refi saputra": { password: "2234", kasbon: 50000 },
"m. yusuf s nur": { password: "2235", kasbon: 300000 },
"muhammad fabil rasyid": { password: "2238", kasbon: 350000 },
"dede suryadin": { password: "2239", kasbon: 850000 },
"fauzan fuziansyah": { password: "2242", kasbon: 850000 },
"santi amelia": { password: "2243", kasbon: 1000000 },
"yanti sumiyanti": { password: "2246", kasbon: 850000 },
"nina agustina": { password: "2247", kasbon: 800000 },
"sopian jaelani": { password: "2250", kasbon: 1000000 },
"m faisal agasy": { password: "2251", kasbon: 50000 },
"arif setiawan": { password: "2252", kasbon: 1000000 },
"iman nurzaman": { password: "2255", kasbon: 700000 },
"neng sri anggraeni": { password: "2257", kasbon: 100000 },
"yesa mowina": { password: "2259", kasbon: 350000 },
"alludya rahaf aurasyifafa": { password: "2260", kasbon: 300000 },
"antia sini islami": { password: "2261", kasbon: 800000 },
"rina lestari": { password: "2262", kasbon: 900000 },
"ratnasari": { password: "2263", kasbon: 200000 },
"irmawati": { password: "2264", kasbon: 1250000 },
"nindia aprilianti": { password: "2266", kasbon: 650000 },
"siti maemunah oktavia": { password: "2267", kasbon: 1000000 },
"anggi permana": { password: "2268", kasbon: 400000 },
"santi": { password: "2269", kasbon: 150000 },
"nuraeni 03": { password: "2271", kasbon: 500000 },
"eneng sumyati": { password: "2272", kasbon: 1000000 },
"fanny fatwal cahyani": { password: "2274", kasbon: 700000 },
"rahma maulidha": { password: "2279", kasbon: 900000 },
"rika nurhayati": { password: "2280", kasbon: 800000 },
"ardi muhammad ayub": { password: "2281", kasbon: 500000 },
"jaya nugi nugraha": { password: "2282", kasbon: 550000 },
"wulandari meilani putri": { password: "2285", kasbon: 300000 },
"dewi sanjung": { password: "2286", kasbon: 500000 },
"ridwan muhammad": { password: "2289", kasbon: 350000 },
"heni anggraeni": { password: "2290", kasbon: 700000 },
"pahri husaeni": { password: "2291", kasbon: 250000 },
"muhammad eka astiyan": { password: "2292", kasbon: 400000 },
"tsania marwa": { password: "2293", kasbon: 350000 },
"gilar putra pangestu": { password: "2295", kasbon: 120000 },
"zilhan fauzi": { password: "2298", kasbon: 400000 },
"nendi supriyadi": { password: "2303", kasbon: 100000 },
"siti sarah": { password: "2304", kasbon: 1000000 },
"bagas rian nugraha": { password: "2306", kasbon: 400000 },
"dicky fadilah maulana": { password: "2308", kasbon: 110000 },
"gianti puspitasari": { password: "2310", kasbon: 900000 },
"hani natalia": { password: "2311", kasbon: 700000 },
"rineu": { password: "2315", kasbon: 250000 },
"neng andini noer habbibah": { password: "2316", kasbon: 650000 },
"intania": { password: "2318", kasbon: 500000 },
"herni sri lestari": { password: "2319", kasbon: 1000000 },
"muhammad nurjamil": { password: "2320", kasbon: 250000 },
"santi hermawanti": { password: "2321", kasbon: 900000 },
"silvia helen": { password: "2322", kasbon: 950000 },
"peni silviana erawan": { password: "2323", kasbon: 450000 },
"endra agustian": { password: "2333", kasbon: 400000 },
"ismi nur ajijah": { password: "2336", kasbon: 400000 },
"najwa zahiyyah hanun": { password: "2338", kasbon: 1500000 },
"nurmala": { password: "2340", kasbon: 800000 },
"riana noprianti": { password: "2341", kasbon: 700000 },
"faujiah isyuniarti": { password: "2343", kasbon: 800000 },
"trian argapura": { password: "2344", kasbon: 192500 },
"sidik abdul rohman": { password: "2347", kasbon: 400000 },
"erni sukaesih": { password: "2348", kasbon: 800000 },
"m zhia rhamandha": { password: "2349", kasbon: 150000 },
"tiara delia nurfauziah junaedi": { password: "2350", kasbon: 850000 },
"anisya nurhaliza": { password: "2351", kasbon: 700000 },
"dara cynthia pasha": { password: "2352", kasbon: 700000 },
"eli ermawati": { password: "2354", kasbon: 500000 },
"ratnasari 04": { password: "2355", kasbon: 750000 },
"muhamad sahrul ramadani": { password: "2356", kasbon: 400000 },
"nezan nur risdiani": { password: "2362", kasbon: 150000 },
"ayang suryani": { password: "2363", kasbon: 500000 },
"erma rachmawati": { password: "2364", kasbon: 900000 },
"ismah rojani": { password: "2365", kasbon: 450000 },
"rizwan": { password: "2366", kasbon: 135000 },
"marsha ameldalia": { password: "2369", kasbon: 600000 },
"yusuf gunawan": { password: "2371", kasbon: 300000 },
"ramadani": { password: "2373", kasbon: 250000 },
"hilma amalia": { password: "2376", kasbon: 500000 },
"taufik maulana nugraha": { password: "2378", kasbon: 103500 },
"nesa hardianty putri": { password: "2379", kasbon: 1002500 },
"amelia putri": { password: "2380", kasbon: 800000 },
"riva auliani": { password: "2383", kasbon: 300000 },
"nabilatul kamilah": { password: "2384", kasbon: 80000 },
"muhamad rijky alamsyah": { password: "2390", kasbon: 400000 },
"muhammad faisal": { password: "2393", kasbon: 300000 },
"maulana yusuf": { password: "2394", kasbon: 350000 },


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
