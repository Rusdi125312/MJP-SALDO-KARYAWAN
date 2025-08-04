const users = [
{ nama: "rusdi rustiandi saputra", password: "2222", sisaGaji: 52960700, role: "admin" },
{ nama: "budiansyah", password: "2223", sisaGaji: 5627130, role: "karyawan" },
{ nama: "febri adi fiansyah", password: "2224", sisaGaji: -138484, role: "karyawan" },
{ nama: "haky tri eryawan", password: "2225", sisaGaji: 142355, role: "karyawan" },
{ nama: "ferdiansyah", password: "2226", sisaGaji: 241240, role: "karyawan" },
{ nama: "dede gunawan", password: "2227", sisaGaji: 131986, role: "karyawan" },
{ nama: "hari anggawijaya", password: "2228", sisaGaji: 168598, role: "karyawan" },
{ nama: "fikran s janual", password: "2229", sisaGaji: -104907, role: "karyawan" },
{ nama: "mutiara zahriatul pasya", password: "2230", sisaGaji: 1603307, role: "karyawan" },
{ nama: "salsa nabila azahra", password: "2231", sisaGaji: 113905, role: "karyawan" },
{ nama: "muhamad febri sauri", password: "2232", sisaGaji: -78826, role: "karyawan" },
{ nama: "erik sopian", password: "2233", sisaGaji: -13748, role: "karyawan" },
{ nama: "refi saputra", password: "2234", sisaGaji: -57277, role: "karyawan" },
{ nama: "m. yusuf s nur", password: "2235", sisaGaji: 96456, role: "karyawan" },
{ nama: "risnawati", password: "2236", sisaGaji: 904611, role: "karyawan" },
{ nama: "sendi maulana", password: "2237", sisaGaji: 7821, role: "karyawan" },
{ nama: "muhammad fabil rasyid", password: "2238", sisaGaji: -5870, role: "karyawan" },
{ nama: "dede suryadin", password: "2239", sisaGaji: -33520, role: "karyawan" },
{ nama: "utari legistri", password: "2240", sisaGaji: -57490, role: "karyawan" },
{ nama: "gungun gunawan", password: "2241", sisaGaji: -11284, role: "karyawan" },
{ nama: "fauzan fuziansyah", password: "2242", sisaGaji: 149782, role: "karyawan" },
{ nama: "santi amelia", password: "2243", sisaGaji: 427652, role: "karyawan" },
{ nama: "nuraeni", password: "2244", sisaGaji: 119750, role: "karyawan" },
{ nama: "carla amalia arifani", password: "2245", sisaGaji: 3708876, role: "karyawan" },
{ nama: "yanti sumiyanti", password: "2246", sisaGaji: 115602, role: "karyawan" },
{ nama: "nina agustina", password: "2247", sisaGaji: 193342, role: "karyawan" },
{ nama: "dona nugraha", password: "2248", sisaGaji: -5855, role: "karyawan" },
{ nama: "taufik maulana", password: "2249", sisaGaji: -33350, role: "karyawan" },
{ nama: "sopian jaelani", password: "2250", sisaGaji: 101085, role: "karyawan" },
{ nama: "m faisal agasy", password: "2251", sisaGaji: -16473, role: "karyawan" },
{ nama: "arif setiawan", password: "2252", sisaGaji: -28042, role: "karyawan" },
{ nama: "melani azarina", password: "2253", sisaGaji: 1700, role: "karyawan" },
{ nama: "nazarulloh rizkisyah", password: "2254", sisaGaji: -53548, role: "karyawan" },
{ nama: "iman nurzaman", password: "2255", sisaGaji: 128471, role: "karyawan" },
{ nama: "veri irawan", password: "2256", sisaGaji: 9260, role: "karyawan" },
{ nama: "neng sri anggraeni", password: "2257", sisaGaji: 145547, role: "karyawan" },
{ nama: "anista yulianingsih", password: "2258", sisaGaji: 38973, role: "karyawan" },
{ nama: "yesa mowina", password: "2259", sisaGaji: 396754, role: "karyawan" },
{ nama: "alludya rahaf aurasyifafa", password: "2260", sisaGaji: 125141, role: "karyawan" },
{ nama: "antia sini islami", password: "2261", sisaGaji: 69844, role: "karyawan" },
{ nama: "rina lestari", password: "2262", sisaGaji: 491723, role: "karyawan" },
{ nama: "ratnasari", password: "2263", sisaGaji: 382749, role: "karyawan" },
{ nama: "irmawati", password: "2264", sisaGaji: 92406, role: "karyawan" },
{ nama: "resti hidayati putri", password: "2265", sisaGaji: -50820, role: "karyawan" },
{ nama: "nindia aprilianti", password: "2266", sisaGaji: 348768, role: "karyawan" },
{ nama: "siti maemunah oktavia", password: "2267", sisaGaji: 107624, role: "karyawan" },
{ nama: "anggi permana", password: "2268", sisaGaji: 189838, role: "karyawan" },
{ nama: "santi", password: "2269", sisaGaji: 1866170, role: "karyawan" },
{ nama: "zaenal adi nugraha", password: "2270", sisaGaji: 36062, role: "karyawan" },
{ nama: "nuraeni 03", password: "2271", sisaGaji: 189131, role: "karyawan" },
{ nama: "eneng sumyati", password: "2272", sisaGaji: 149572, role: "karyawan" },
{ nama: "lisnawati", password: "2273", sisaGaji: 3914491, role: "karyawan" },
{ nama: "fanny fatwal cahyani", password: "2274", sisaGaji: 14531, role: "karyawan" },
{ nama: "neng juliawati", password: "2275", sisaGaji: -7006, role: "karyawan" },
{ nama: "fitria ambarwati", password: "2276", sisaGaji: 1150467, role: "karyawan" },
{ nama: "andi rusyandi", password: "2277", sisaGaji: 116778, role: "karyawan" },
{ nama: "mohamad padil", password: "2278", sisaGaji: 433491, role: "karyawan" },
{ nama: "rahma maulidha", password: "2279", sisaGaji: 241927, role: "karyawan" },
{ nama: "rika nurhayati", password: "2280", sisaGaji: 59315, role: "karyawan" },
{ nama: "ardi muhammad ayub", password: "2281", sisaGaji: 117642, role: "karyawan" },
{ nama: "jaya nugi nugraha", password: "2282", sisaGaji: 389, role: "karyawan" },
{ nama: "muhamad nasyath jauharin", password: "2283", sisaGaji: -71497, role: "karyawan" },
{ nama: "muhammad rifqi mustopa kamil", password: "2284", sisaGaji: -26505, role: "karyawan" },
{ nama: "wulandari meilani putri", password: "2285", sisaGaji: 926298, role: "karyawan" },
{ nama: "dewi sanjung", password: "2286", sisaGaji: 51682, role: "karyawan" },
{ nama: "sindi fitri aulia", password: "2287", sisaGaji: -36155, role: "karyawan" },
{ nama: "hilda mutiara utari", password: "2288", sisaGaji: -17087, role: "karyawan" },
{ nama: "ridwan muhammad", password: "2289", sisaGaji: -103950, role: "karyawan" },
{ nama: "heni anggraeni", password: "2290", sisaGaji: 135233, role: "karyawan" },
{ nama: "pahri husaeni", password: "2291", sisaGaji: 152206, role: "karyawan" },
{ nama: "muhammad eka astiyan", password: "2292", sisaGaji: 142322, role: "karyawan" },
{ nama: "tsania marwa", password: "2293", sisaGaji: 380124, role: "karyawan" },
{ nama: "muhammad ismul adam al alla", password: "2294", sisaGaji: 235561, role: "karyawan" },
{ nama: "gilar putra pangestu", password: "2295", sisaGaji: -12512, role: "karyawan" },
{ nama: "nabila patarani", password: "2296", sisaGaji: -64457, role: "karyawan" },
{ nama: "anisa permatasari", password: "2297", sisaGaji: -271578, role: "karyawan" },
{ nama: "zilhan fauzi", password: "2298", sisaGaji: 15918, role: "karyawan" },
{ nama: "ari hermawan", password: "2299", sisaGaji: -130959, role: "karyawan" },
{ nama: "aris sunandi", password: "2300", sisaGaji: 516275, role: "karyawan" },
{ nama: "sidiq maulana", password: "2301", sisaGaji: -7499, role: "karyawan" },
{ nama: "fatimah surahman", password: "2302", sisaGaji: 70440, role: "karyawan" },
{ nama: "nendi supriyadi", password: "2303", sisaGaji: -4824, role: "karyawan" },
{ nama: "siti sarah", password: "2304", sisaGaji: 57062, role: "karyawan" },
{ nama: "muhamad rizal firmansyah", password: "2305", sisaGaji: -43348, role: "karyawan" },
{ nama: "bagas rian nugraha", password: "2306", sisaGaji: -13412, role: "karyawan" },
{ nama: "muh rizki maulana", password: "2307", sisaGaji: 1905401, role: "karyawan" },
{ nama: "dicky fadilah maulana", password: "2308", sisaGaji: 20281, role: "karyawan" },
{ nama: "selvarina pasya ramadhani", password: "2309", sisaGaji: 62487, role: "karyawan" },
{ nama: "gianti puspitasari", password: "2310", sisaGaji: 65088, role: "karyawan" },
{ nama: "hani natalia", password: "2311", sisaGaji: 539177, role: "karyawan" },
{ nama: "novia", password: "2312", sisaGaji: 2153585, role: "karyawan" },
{ nama: "eva puspita", password: "2313", sisaGaji: -11915, role: "karyawan" },
{ nama: "tita rosita", password: "2314", sisaGaji: 3532335, role: "karyawan" },
{ nama: "rineu", password: "2315", sisaGaji: 923600, role: "karyawan" },
{ nama: "neng andini noer habbibah", password: "2316", sisaGaji: 17892, role: "karyawan" },
{ nama: "desi dwiyanti", password: "2317", sisaGaji: 20124, role: "karyawan" },
{ nama: "intania", password: "2318", sisaGaji: 149528, role: "karyawan" },
{ nama: "herni sri lestari", password: "2319", sisaGaji: 75471, role: "karyawan" },
{ nama: "muhammad nurjamil", password: "2320", sisaGaji: -36776, role: "karyawan" },
{ nama: "santi hermawanti", password: "2321", sisaGaji: 134190, role: "karyawan" },
{ nama: "silvia helen", password: "2322", sisaGaji: 46010, role: "karyawan" },
{ nama: "peni silviana erawan", password: "2323", sisaGaji: 104132, role: "karyawan" },
{ nama: "felicia febrianti", password: "2324", sisaGaji: -27180, role: "karyawan" },
{ nama: "sahrul ramdani", password: "2325", sisaGaji: 0, role: "karyawan" },
{ nama: "muhammad abdul salam", password: "2326", sisaGaji: 126455, role: "karyawan" },
{ nama: "siti sarah 04", password: "2327", sisaGaji: -15308, role: "karyawan" },
{ nama: "saepul rahman", password: "2328", sisaGaji: 90370, role: "karyawan" },
{ nama: "suwandi", password: "2329", sisaGaji: 1070, role: "karyawan" },
{ nama: "melisa sabila", password: "2330", sisaGaji: 406783, role: "karyawan" },
{ nama: "ridwan maulana", password: "2331", sisaGaji: 30445, role: "karyawan" },
{ nama: "agil saparhan", password: "2332", sisaGaji: -43980, role: "karyawan" },
{ nama: "endra agustian", password: "2333", sisaGaji: -8192, role: "karyawan" },
{ nama: "irgi sandini", password: "2334", sisaGaji: -51688, role: "karyawan" },
{ nama: "vella nandita desyana", password: "2335", sisaGaji: -21108, role: "karyawan" },
{ nama: "ismi nur ajijah", password: "2336", sisaGaji: 344500, role: "karyawan" },
{ nama: "widiawati ayu lestari", password: "2337", sisaGaji: 931667, role: "karyawan" },
{ nama: "najwa zahiyyah hanun", password: "2338", sisaGaji: 225541, role: "karyawan" },
{ nama: "rini nuryani", password: "2339", sisaGaji: 717683, role: "karyawan" },
{ nama: "nurmala", password: "2340", sisaGaji: 105881, role: "karyawan" },
{ nama: "riana noprianti", password: "2341", sisaGaji: 34291, role: "karyawan" },
{ nama: "dwi mega novianty", password: "2342", sisaGaji: 921406, role: "karyawan" },
{ nama: "faujiah isyuniarti", password: "2343", sisaGaji: 424594, role: "karyawan" },
{ nama: "trian argapura", password: "2344", sisaGaji: -9360, role: "karyawan" },
{ nama: "rikvie pratama gunawan", password: "2345", sisaGaji: 40500, role: "karyawan" },
{ nama: "erica nayla maryam", password: "2346", sisaGaji: 1069949, role: "karyawan" },
{ nama: "sidik abdul rohman", password: "2347", sisaGaji: 126406, role: "karyawan" },
{ nama: "erni sukaesih", password: "2348", sisaGaji: 203355, role: "karyawan" },
{ nama: "m zhia rhamandha", password: "2349", sisaGaji: -43580, role: "karyawan" },
{ nama: "tiara delia nurfauziah junaedi", password: "2350", sisaGaji: 85055, role: "karyawan" },
{ nama: "anisya nurhaliza", password: "2351", sisaGaji: 1692029, role: "karyawan" },
{ nama: "dara cynthia pasha", password: "2352", sisaGaji: 62706, role: "karyawan" },
{ nama: "elisa", password: "2353", sisaGaji: -500, role: "karyawan" },
{ nama: "eli ermawati", password: "2354", sisaGaji: 192350, role: "karyawan" },
{ nama: "ratnasari 04", password: "2355", sisaGaji: 467800, role: "karyawan" },
{ nama: "muhamad sahrul ramadani", password: "2356", sisaGaji: 117464, role: "karyawan" },
{ nama: "pegi anugrah jultiaman", password: "2357", sisaGaji: -21660, role: "karyawan" },
{ nama: "rina apriliana", password: "2358", sisaGaji: 10750, role: "karyawan" },
{ nama: "nasywa chaerunisa", password: "2359", sisaGaji: 29000, role: "karyawan" },
{ nama: "yuminarni", password: "2360", sisaGaji: 9580, role: "karyawan" },
{ nama: "aleandry kharisma putra s", password: "2361", sisaGaji: 190, role: "karyawan" },
{ nama: "nezan nur risdiani", password: "2362", sisaGaji: 1249324, role: "karyawan" },
{ nama: "ayang suryani", password: "2363", sisaGaji: 335482, role: "karyawan" },
{ nama: "erma rachmawati", password: "2364", sisaGaji: 131544, role: "karyawan" },
{ nama: "ismah rojani", password: "2365", sisaGaji: 34800, role: "karyawan" },
{ nama: "rizwan", password: "2366", sisaGaji: -10530, role: "karyawan" },
{ nama: "saskia widya oktaviyani", password: "2367", sisaGaji: -35975, role: "karyawan" },
{ nama: "sandrika sarohani", password: "2368", sisaGaji: 0, role: "karyawan" },
{ nama: "marsha ameldalia", password: "2369", sisaGaji: 1069344, role: "karyawan" },
{ nama: "rissal herdiansyah", password: "2370", sisaGaji: -35410, role: "karyawan" },
{ nama: "yusuf gunawan", password: "2371", sisaGaji: -10500, role: "karyawan" },
{ nama: "muhammad fauzi", password: "2372", sisaGaji: 0, role: "karyawan" },
{ nama: "ramadani", password: "2373", sisaGaji: 26288, role: "karyawan" },
{ nama: "restiana", password: "2374", sisaGaji: 166350, role: "karyawan" },
{ nama: "suwartati", password: "2375", sisaGaji: 70, role: "karyawan" },
{ nama: "hilma amalia", password: "2376", sisaGaji: 561810, role: "karyawan" },
{ nama: "siti rohmah", password: "2377", sisaGaji: 386225, role: "karyawan" },
{ nama: "taufik maulana nugraha", password: "2378", sisaGaji: 15700, role: "karyawan" },
{ nama: "nesa hardianty putri", password: "2379", sisaGaji: 359220, role: "karyawan" },
{ nama: "amelia putri", password: "2380", sisaGaji: 214446, role: "karyawan" },
{ nama: "sundari", password: "2381", sisaGaji: 14080, role: "karyawan" },
{ nama: "erika shiva nadira", password: "2382", sisaGaji: -11700, role: "karyawan" },
{ nama: "riva auliani", password: "2383", sisaGaji: 305544, role: "karyawan" },
{ nama: "nabilatul kamilah", password: "2384", sisaGaji: -7620, role: "karyawan" },
{ nama: "indri yulyanti", password: "2385", sisaGaji: -22920, role: "karyawan" },
{ nama: "erna maulani", password: "2386", sisaGaji: 34600, role: "karyawan" },
{ nama: "putri zalfa buhadisa", password: "2387", sisaGaji: 137320, role: "karyawan" },
{ nama: "sulastri", password: "2388", sisaGaji: 3500, role: "karyawan" },
{ nama: "anggun sri lestari", password: "2389", sisaGaji: 300, role: "karyawan" },
{ nama: "muhamad rijky alamsyah", password: "2390", sisaGaji: 52224, role: "karyawan" },
{ nama: "angga prayoga", password: "2391", sisaGaji: -43200, role: "karyawan" },
{ nama: "rifki ikhsan nabil", password: "2392", sisaGaji: 155300, role: "karyawan" },
{ nama: "muhammad faisal", password: "2393", sisaGaji: 119448, role: "karyawan" },
{ nama: "maulana yusuf", password: "2394", sisaGaji: -18550, role: "karyawan" },
{ nama: "mojang rucita wijaksana", password: "2395", sisaGaji: 312816, role: "karyawan" },
{ nama: "vella salsabila", password: "2396", sisaGaji: 1840, role: "karyawan" },
{ nama: "trisnawati dewi", password: "2397", sisaGaji: 58144, role: "karyawan" },
{ nama: "riska rismawati", password: "2398", sisaGaji: 392480, role: "karyawan" },
{ nama: "diaz hermayadi", password: "2399", sisaGaji: 31970, role: "karyawan" },
{ nama: "rahma fazriawati", password: "2400", sisaGaji: -7000, role: "karyawan" },
{ nama: "sefti nur amelia", password: "2401", sisaGaji: -7000, role: "karyawan" },
{ nama: "adelia", password: "2402", sisaGaji: 0, role: "karyawan" },
{ nama: "rahmi hilmansyah", password: "2403", sisaGaji: -9300, role: "karyawan" },
{ nama: "shienby khaila paujia", password: "2404", sisaGaji: 33640, role: "karyawan" },
{ nama: "ita nurlita", password: "2405", sisaGaji: 225550, role: "karyawan" },
{ nama: "diah widaningsih", password: "2406", sisaGaji: 453264, role: "karyawan" },
{ nama: "fera permatasari", password: "2407", sisaGaji: 511948, role: "karyawan" },
{ nama: "muhammad adli zhafiri", password: "2408", sisaGaji: 16030, role: "karyawan" },
{ nama: "nureina ardia kayla rahmani", password: "2409", sisaGaji: 36880, role: "karyawan" },
{ nama: "nazira syahwal", password: "2410", sisaGaji: 389414, role: "karyawan" },
{ nama: "rizki", password: "2411", sisaGaji: -3500, role: "karyawan" },
{ nama: "alpain kamaludin", password: "2412", sisaGaji: 84450, role: "karyawan" },
{ nama: "saripah fatmawati", password: "2413", sisaGaji: 171720, role: "karyawan" },
{ nama: "mita hafitya azzahra", password: "2414", sisaGaji: 710000, role: "karyawan" },
{ nama: "siti bilkis", password: "2415", sisaGaji: 86620, role: "karyawan" },
{ nama: "uci wulandari", password: "2416", sisaGaji: 194750, role: "karyawan" },
{ nama: "m. pahra prayoga", password: "2417", sisaGaji: -2350, role: "karyawan" },
{ nama: "dika setiawan", password: "2418", sisaGaji: 450, role: "karyawan" },
{ nama: "cikal firgina tasya", password: "2419", sisaGaji: 141400, role: "karyawan" },
{ nama: "restu muhamad dikri", password: "2420", sisaGaji: -1650, role: "karyawan" },
{ nama: "ade saepul rahmat", password: "2421", sisaGaji: 850, role: "karyawan" },
{ nama: "varlita divani", password: "2422", sisaGaji: 3030, role: "karyawan" },
{ nama: "wini widiastuti", password: "2423", sisaGaji: 98018, role: "karyawan" },
{ nama: "susi susilawati", password: "2424", sisaGaji: 72275, role: "karyawan" },
{ nama: "nurmilah", password: "2425", sisaGaji: 97600, role: "karyawan" },
{ nama: "hasna habibah az zahra", password: "2426", sisaGaji: 1350, role: "karyawan" },
{ nama: "ichdal husnaya", password: "2427", sisaGaji: -12670, role: "karyawan" },
{ nama: "silva rahayu", password: "2428", sisaGaji: -22750, role: "karyawan" },
{ nama: "muh latif asydik", password: "2429", sisaGaji: -26850, role: "karyawan" },
{ nama: "m dafa nugraha", password: "2430", sisaGaji: 16670, role: "karyawan" },
{ nama: "mela noviana", password: "2431", sisaGaji: 21706, role: "karyawan" },
{ nama: "yusanti", password: "2432", sisaGaji: -13986, role: "karyawan" },
{ nama: "bambang rizki rijaldi", password: "2433", sisaGaji: 4750, role: "karyawan" },
{ nama: "fadly resta putra", password: "2434", sisaGaji: 8530, role: "karyawan" },
{ nama: "ester felisia", password: "2435", sisaGaji: 169056, role: "karyawan" },
{ nama: "moch dani apriadi", password: "2436", sisaGaji: 30, role: "karyawan" },
{ nama: "yana supriatna", password: "2437", sisaGaji: -10368, role: "karyawan" },
{ nama: "ernawati", password: "2438", sisaGaji: 150, role: "karyawan" },
{ nama: "siti nurholisoh", password: "2439", sisaGaji: 230, role: "karyawan" },
{ nama: "m.fikri abdurrahman", password: "2440", sisaGaji: 6050, role: "karyawan" },
{ nama: "dede fikri", password: "2223", sisaGaji: 7100, role: "karyawan" },

];

let loggedInUsers = [];

function login() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  const user = users.find(u => u.nama === username && u.password === password);

  if (user) {
    if (!loggedInUsers.includes(user.nama)) {
      loggedInUsers.push(user.nama);
    }

    document.getElementById("gaji-info").style.display = "block";
    document.getElementById("gaji-text").innerText =
      `Halo, ${user.nama.toUpperCase()}. Sisa gaji kamu adalah Rp${user.sisaGaji.toLocaleString()}`;
    document.getElementById("error-msg").innerText = "";

    document.getElementById("username").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("catatan").style.display = "block";
    document.getElementById("next-page").style.display = "block";


    // Tombol ke halaman berikutnya
  const tombolLanjut = document.createElement("button");
  tombolLanjut.innerText = "Lanjut ke Halaman Berikutnya";
  tombolLanjut.style.marginTop = "20px";
  tombolLanjut.onclick = function() {
    window.location.href = "index2.html";
  };
  document.getElementById("gaji-info").appendChild(tombolLanjut);


    if (user.role === "admin") {
      showAdminMenu();
    }
  } else {
    document.getElementById("error-msg").innerText = "Nama atau password salah!";
    document.getElementById("error-msg").style.color = "red";
    document.getElementById("gaji-info").style.display = "none";

  }
}

function logout() {
  document.getElementById("username").style.display = "block";
  document.getElementById("password").style.display = "block";
  document.querySelector("button").style.display = "block";

  document.getElementById("gaji-info").style.display = "none";
  document.getElementById("gaji-text").innerText = "";
  document.getElementById("catatan").style.display = "none";
  document.getElementById("next-page").style.display = "none";
  document.getElementById("chat-container").style.display = "none";
  document.getElementById("chat-box").innerHTML = "";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
function showAdminMenu() {
  alert("Selamat datang Admin!");
}
function goToNextPage() {
  window.location.href = "index2.html"; // Ganti ke nama halaman tujuan
}



