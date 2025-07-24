const users = [
{ nama: "rusdi rustiandi saputra", password: "2222", sisaGaji: 50000000, role: "admin" },
{ nama: "budiansyah", password: "2223", sisaGaji: 4400160, role: "karyawan" },
{ nama: "febri adi fiansyah", password: "2224", sisaGaji: 184769, role: "karyawan" },
{ nama: "haky tri eryawan", password: "2225", sisaGaji: -239365, role: "karyawan" },
{ nama: "ferdiansyah", password: "2226", sisaGaji: 148922, role: "karyawan" },
{ nama: "dede gunawan", password: "2227", sisaGaji: -8514, role: "karyawan" },
{ nama: "hari anggawijaya", password: "2228", sisaGaji: 262148, role: "karyawan" },
{ nama: "fikran s janual", password: "2229", sisaGaji: -57355, role: "karyawan" },
{ nama: "mutiara zahriatul pasya", password: "2230", sisaGaji: 36143, role: "karyawan" },
{ nama: "salsa nabila azahra", password: "2231", sisaGaji: 68905, role: "karyawan" },
{ nama: "muhamad febri sauri", password: "2232", sisaGaji: -66326, role: "karyawan" },
{ nama: "erik sopian", password: "2233", sisaGaji: -22616, role: "karyawan" },
{ nama: "refi saputra", password: "2234", sisaGaji: -42645, role: "karyawan" },
{ nama: "m. yusuf s nur", password: "2235", sisaGaji: 16156, role: "karyawan" },
{ nama: "risnawati", password: "2236", sisaGaji: 160523, role: "karyawan" },
{ nama: "sendi maulana", password: "2237", sisaGaji: 7821, role: "karyawan" },
{ nama: "muhammad fabil rasyid", password: "2238", sisaGaji: 4612, role: "karyawan" },
{ nama: "dede suryadin", password: "2239", sisaGaji: 182880, role: "karyawan" },
{ nama: "utari legistri", password: "2240", sisaGaji: -44990, role: "karyawan" },
{ nama: "gungun gunawan", password: "2241", sisaGaji: -11284, role: "karyawan" },
{ nama: "fauzan fuziansyah", password: "2242", sisaGaji: 155082, role: "karyawan" },
{ nama: "santi amelia", password: "2243", sisaGaji: 48164, role: "karyawan" },
{ nama: "nuraeni", password: "2244", sisaGaji: 119750, role: "karyawan" },
{ nama: "carla amalia arifani", password: "2245", sisaGaji: 2003276, role: "karyawan" },
{ nama: "yanti sumiyanti", password: "2246", sisaGaji: 4302, role: "karyawan" },
{ nama: "nina agustina", password: "2247", sisaGaji: 126578, role: "karyawan" },
{ nama: "dona nugraha", password: "2248", sisaGaji: -5855, role: "karyawan" },
{ nama: "taufik maulana", password: "2249", sisaGaji: -31650, role: "karyawan" },
{ nama: "sopian jaelani", password: "2250", sisaGaji: 6815, role: "karyawan" },
{ nama: "m faisal agasy", password: "2251", sisaGaji: -38373, role: "karyawan" },
{ nama: "arif setiawan", password: "2252", sisaGaji: -17430, role: "karyawan" },
{ nama: "melani azarina", password: "2253", sisaGaji: 279700, role: "karyawan" },
{ nama: "nazarulloh rizkisyah", password: "2254", sisaGaji: -41048, role: "karyawan" },
{ nama: "iman nurzaman", password: "2255", sisaGaji: 22369, role: "karyawan" },
{ nama: "veri irawan", password: "2256", sisaGaji: 9260, role: "karyawan" },
{ nama: "neng sri anggraeni", password: "2257", sisaGaji: 397567, role: "karyawan" },
{ nama: "anista yulianingsih", password: "2258", sisaGaji: 38973, role: "karyawan" },
{ nama: "yesa mowina", password: "2259", sisaGaji: 99516, role: "karyawan" },
{ nama: "alludya rahaf aurasyifafa", password: "2260", sisaGaji: 208641, role: "karyawan" },
{ nama: "antia sini islami", password: "2261", sisaGaji: 18124, role: "karyawan" },
{ nama: "rina lestari", password: "2262", sisaGaji: -53327, role: "karyawan" },
{ nama: "ratnasari", password: "2263", sisaGaji: 36681, role: "karyawan" },
{ nama: "irmawati", password: "2264", sisaGaji: 28586, role: "karyawan" },
{ nama: "resti hidayati putri", password: "2265", sisaGaji: -38320, role: "karyawan" },
{ nama: "nindia aprilianti", password: "2266", sisaGaji: 386518, role: "karyawan" },
{ nama: "siti maemunah oktavia", password: "2267", sisaGaji: 230304, role: "karyawan" },
{ nama: "anggi permana", password: "2268", sisaGaji: -7494, role: "karyawan" },
{ nama: "santi", password: "2269", sisaGaji: 906020, role: "karyawan" },
{ nama: "zaenal adi nugraha", password: "2270", sisaGaji: 48562, role: "karyawan" },
{ nama: "nuraeni 03", password: "2271", sisaGaji: -46637, role: "karyawan" },
{ nama: "eneng sumyati", password: "2272", sisaGaji: -20128, role: "karyawan" },
{ nama: "lisnawati", password: "2273", sisaGaji: 2274271, role: "karyawan" },
{ nama: "fanny fatwal cahyani", password: "2274", sisaGaji: 465367, role: "karyawan" },
{ nama: "neng juliawati", password: "2275", sisaGaji: -7006, role: "karyawan" },
{ nama: "fitria ambarwati", password: "2276", sisaGaji: -2153, role: "karyawan" },
{ nama: "andi rusyandi", password: "2277", sisaGaji: 122578, role: "karyawan" },
{ nama: "mohamad padil", password: "2278", sisaGaji: 425291, role: "karyawan" },
{ nama: "rahma maulidha", password: "2279", sisaGaji: 239987, role: "karyawan" },
{ nama: "rika nurhayati", password: "2280", sisaGaji: 65115, role: "karyawan" },
{ nama: "ardi muhammad ayub", password: "2281", sisaGaji: 20928, role: "karyawan" },
{ nama: "jaya nugi nugraha", password: "2282", sisaGaji: -11431, role: "karyawan" },
{ nama: "muhamad nasyath jauharin", password: "2283", sisaGaji: -58997, role: "karyawan" },
{ nama: "muhammad rifqi mustopa kamil", password: "2284", sisaGaji: -16605, role: "karyawan" },
{ nama: "wulandari meilani putri", password: "2285", sisaGaji: 89827, role: "karyawan" },
{ nama: "dewi sanjung", password: "2286", sisaGaji: -51518, role: "karyawan" },
{ nama: "sindi fitri aulia", password: "2287", sisaGaji: -23655, role: "karyawan" },
{ nama: "hilda mutiara utari", password: "2288", sisaGaji: -4587, role: "karyawan" },
{ nama: "ridwan muhammad", password: "2289", sisaGaji: -40370, role: "karyawan" },
{ nama: "heni anggraeni", password: "2290", sisaGaji: -25817, role: "karyawan" },
{ nama: "pahri husaeni", password: "2291", sisaGaji: 139888, role: "karyawan" },
{ nama: "muhammad eka astiyan", password: "2292", sisaGaji: -2998, role: "karyawan" },
{ nama: "tsania marwa", password: "2293", sisaGaji: 143056, role: "karyawan" },
{ nama: "muhammad ismul adam al alla", password: "2294", sisaGaji: 235561, role: "karyawan" },
{ nama: "gilar putra pangestu", password: "2295", sisaGaji: -19830, role: "karyawan" },
{ nama: "nabila patarani", password: "2296", sisaGaji: -51957, role: "karyawan" },
{ nama: "anisa permatasari", password: "2297", sisaGaji: -274178, role: "karyawan" },
{ nama: "zilhan fauzi", password: "2298", sisaGaji: 183230, role: "karyawan" },
{ nama: "ari hermawan", password: "2299", sisaGaji: -118459, role: "karyawan" },
{ nama: "aris sunandi", password: "2300", sisaGaji: -12325, role: "karyawan" },
{ nama: "sidiq maulana", password: "2301", sisaGaji: -7499, role: "karyawan" },
{ nama: "fatimah surahman", password: "2302", sisaGaji: 78840, role: "karyawan" },
{ nama: "nendi supriyadi", password: "2303", sisaGaji: -9524, role: "karyawan" },
{ nama: "siti sarah", password: "2304", sisaGaji: 232298, role: "karyawan" },
{ nama: "muhamad rizal firmansyah", password: "2305", sisaGaji: -43348, role: "karyawan" },
{ nama: "bagas rian nugraha", password: "2306", sisaGaji: -15212, role: "karyawan" },
{ nama: "muh rizki maulana", password: "2307", sisaGaji: 503768, role: "karyawan" },
{ nama: "dicky fadilah maulana", password: "2308", sisaGaji: 4281, role: "karyawan" },
{ nama: "selvarina pasya ramadhani", password: "2309", sisaGaji: 62487, role: "karyawan" },
{ nama: "gianti puspitasari", password: "2310", sisaGaji: 102224, role: "karyawan" },
{ nama: "hani natalia", password: "2311", sisaGaji: 438245, role: "karyawan" },
{ nama: "novia", password: "2312", sisaGaji: 1544767, role: "karyawan" },
{ nama: "eva puspita", password: "2313", sisaGaji: -11915, role: "karyawan" },
{ nama: "tita rosita", password: "2314", sisaGaji: 2160615, role: "karyawan" },
{ nama: "rineu", password: "2315", sisaGaji: 105136, role: "karyawan" },
{ nama: "neng andini noer habbibah", password: "2316", sisaGaji: 155192, role: "karyawan" },
{ nama: "desi dwiyanti", password: "2317", sisaGaji: 20124, role: "karyawan" },
{ nama: "intania", password: "2318", sisaGaji: -26104, role: "karyawan" },
{ nama: "herni sri lestari", password: "2319", sisaGaji: 102251, role: "karyawan" },
{ nama: "muhammad nurjamil", password: "2320", sisaGaji: -12776, role: "karyawan" },
{ nama: "santi hermawanti", password: "2321", sisaGaji: 132126, role: "karyawan" },
{ nama: "silvia helen", password: "2322", sisaGaji: 79546, role: "karyawan" },
{ nama: "peni silviana erawan", password: "2323", sisaGaji: -44068, role: "karyawan" },
{ nama: "felicia febrianti", password: "2324", sisaGaji: -23980, role: "karyawan" },
{ nama: "sahrul ramdani", password: "2325", sisaGaji: 1, role: "karyawan" },
{ nama: "muhammad abdul salam", password: "2326", sisaGaji: -1945, role: "karyawan" },
{ nama: "siti sarah 04", password: "2327", sisaGaji: -15308, role: "karyawan" },
{ nama: "saepul rahman", password: "2328", sisaGaji: 97670, role: "karyawan" },
{ nama: "suwandi", password: "2329", sisaGaji: 1070, role: "karyawan" },
{ nama: "melisa sabila", password: "2330", sisaGaji: 2715, role: "karyawan" },
{ nama: "ridwan maulana", password: "2331", sisaGaji: 30445, role: "karyawan" },
{ nama: "agil saparhan", password: "2332", sisaGaji: -31480, role: "karyawan" },
{ nama: "endra agustian", password: "2333", sisaGaji: 540, role: "karyawan" },
{ nama: "irgi sandini", password: "2334", sisaGaji: -51688, role: "karyawan" },
{ nama: "vella nandita desyana", password: "2335", sisaGaji: -21108, role: "karyawan" },
{ nama: "ismi nur ajijah", password: "2336", sisaGaji: 273856, role: "karyawan" },
{ nama: "widiawati ayu lestari", password: "2337", sisaGaji: 455847, role: "karyawan" },
{ nama: "najwa zahiyyah hanun", password: "2338", sisaGaji: 231021, role: "karyawan" },
{ nama: "rini nuryani", password: "2339", sisaGaji: 575063, role: "karyawan" },
{ nama: "nurmala", password: "2340", sisaGaji: 372317, role: "karyawan" },
{ nama: "riana noprianti", password: "2341", sisaGaji: 10071, role: "karyawan" },
{ nama: "dwi mega novianty", password: "2342", sisaGaji: 254942, role: "karyawan" },
{ nama: "faujiah isyuniarti", password: "2343", sisaGaji: 12330, role: "karyawan" },
{ nama: "trian argapura", password: "2344", sisaGaji: 68940, role: "karyawan" },
{ nama: "rikvie pratama gunawan", password: "2345", sisaGaji: 32300, role: "karyawan" },
{ nama: "erica nayla maryam", password: "2346", sisaGaji: 746555, role: "karyawan" },
{ nama: "sidik abdul rohman", password: "2347", sisaGaji: -7430, role: "karyawan" },
{ nama: "erni sukaesih", password: "2348", sisaGaji: 152635, role: "karyawan" },
{ nama: "m zhia rhamandha", password: "2349", sisaGaji: -103380, role: "karyawan" },
{ nama: "tiara delia nurfauziah junaedi", password: "2350", sisaGaji: 184555, role: "karyawan" },
{ nama: "anisya nurhaliza", password: "2351", sisaGaji: 1537629, role: "karyawan" },
{ nama: "dara cynthia pasha", password: "2352", sisaGaji: 39130, role: "karyawan" },
{ nama: "elisa", password: "2353", sisaGaji: -500, role: "karyawan" },
{ nama: "eli ermawati", password: "2354", sisaGaji: 950, role: "karyawan" },
{ nama: "ratnasari 04", password: "2355", sisaGaji: 730750, role: "karyawan" },
{ nama: "muhamad sahrul ramadani", password: "2356", sisaGaji: 3220, role: "karyawan" },
{ nama: "pegi anugrah jultiaman", password: "2357", sisaGaji: -15860, role: "karyawan" },
{ nama: "rina apriliana", password: "2358", sisaGaji: 10750, role: "karyawan" },
{ nama: "nasywa chaerunisa", password: "2359", sisaGaji: 29000, role: "karyawan" },
{ nama: "yuminarni", password: "2360", sisaGaji: 9580, role: "karyawan" },
{ nama: "aleandry kharisma putra s", password: "2361", sisaGaji: 190, role: "karyawan" },
{ nama: "nezan nur risdiani", password: "2362", sisaGaji: 545860, role: "karyawan" },
{ nama: "ayang suryani", password: "2363", sisaGaji: 420850, role: "karyawan" },
{ nama: "erma rachmawati", password: "2364", sisaGaji: 83480, role: "karyawan" },
{ nama: "ismah rojani", password: "2365", sisaGaji: -46700, role: "karyawan" },
{ nama: "rizwan", password: "2366", sisaGaji: -97430, role: "karyawan" },
{ nama: "saskia widya oktaviyani", password: "2367", sisaGaji: -15975, role: "karyawan" },
{ nama: "sandrika sarohani", password: "2368", sisaGaji: 1, role: "karyawan" },
{ nama: "marsha ameldalia", password: "2369", sisaGaji: 518480, role: "karyawan" },
{ nama: "rissal herdiansyah", password: "2370", sisaGaji: -28310, role: "karyawan" },
{ nama: "yusuf gunawan", password: "2371", sisaGaji: -13400, role: "karyawan" },
{ nama: "muhammad fauzi", password: "2372", sisaGaji: 1, role: "karyawan" },
{ nama: "ramadani", password: "2373", sisaGaji: -16280, role: "karyawan" },
{ nama: "restiana", password: "2374", sisaGaji: 166350, role: "karyawan" },
{ nama: "suwartati", password: "2375", sisaGaji: 70, role: "karyawan" },
{ nama: "hilma amalia", password: "2376", sisaGaji: -9250, role: "karyawan" },
{ nama: "siti rohmah", password: "2377", sisaGaji: 242625, role: "karyawan" },
{ nama: "taufik maulana nugraha", password: "2378", sisaGaji: -15900, role: "karyawan" },
{ nama: "nesa hardianty putri", password: "2379", sisaGaji: 153100, role: "karyawan" },
{ nama: "amelia putri", password: "2380", sisaGaji: 106870, role: "karyawan" },
{ nama: "sundari", password: "2381", sisaGaji: 14080, role: "karyawan" },
{ nama: "erika shiva nadira", password: "2382", sisaGaji: -11700, role: "karyawan" },
{ nama: "riva auliani", password: "2383", sisaGaji: 87144, role: "karyawan" },
{ nama: "nabilatul kamilah", password: "2384", sisaGaji: -39020, role: "karyawan" },
{ nama: "indri yulyanti", password: "2385", sisaGaji: -22920, role: "karyawan" },
{ nama: "erna maulani", password: "2386", sisaGaji: 34600, role: "karyawan" },
{ nama: "putri zalfa buhadisa", password: "2387", sisaGaji: 137320, role: "karyawan" },
{ nama: "sulastri", password: "2388", sisaGaji: 3500, role: "karyawan" },
{ nama: "anggun sri lestari", password: "2389", sisaGaji: 300, role: "karyawan" },
{ nama: "muhamad rijky alamsyah", password: "2390", sisaGaji: -58040, role: "karyawan" },
{ nama: "angga prayoga", password: "2391", sisaGaji: -43200, role: "karyawan" },
{ nama: "rifki ikhsan nabil", password: "2392", sisaGaji: 155300, role: "karyawan" },
{ nama: "muhammad faisal", password: "2393", sisaGaji: 17480, role: "karyawan" },
{ nama: "maulana yusuf", password: "2394", sisaGaji: -3300, role: "karyawan" },
{ nama: "mojang rucita wijaksana", password: "2395", sisaGaji: 124120, role: "karyawan" },
{ nama: "vella salsabila", password: "2396", sisaGaji: 1840, role: "karyawan" },
{ nama: "trisnawati dewi", password: "2397", sisaGaji: -52736, role: "karyawan" },
{ nama: "riska rismawati", password: "2398", sisaGaji: 183060, role: "karyawan" },
{ nama: "diaz hermayadi", password: "2399", sisaGaji: -1130, role: "karyawan" },
{ nama: "rahma fazriawati", password: "2400", sisaGaji: -7000, role: "karyawan" },
{ nama: "sefti nur amelia", password: "2401", sisaGaji: -7000, role: "karyawan" },
{ nama: "adelia", password: "2402", sisaGaji: 1, role: "karyawan" },
{ nama: "rahmi hilmansyah", password: "2403", sisaGaji: -9300, role: "karyawan" },
{ nama: "shienby khaila paujia", password: "2404", sisaGaji: 33640, role: "karyawan" },
{ nama: "ita nurlita", password: "2405", sisaGaji: 50550, role: "karyawan" },
{ nama: "diah widaningsih", password: "2406", sisaGaji: 203700, role: "karyawan" },
{ nama: "fera permatasari", password: "2407", sisaGaji: 123060, role: "karyawan" },
{ nama: "muhammad adli zhafiri", password: "2408", sisaGaji: 16030, role: "karyawan" },
{ nama: "nureina ardia kayla rahmani", password: "2409", sisaGaji: 148380, role: "karyawan" },
{ nama: "nazira syahwal", password: "2410", sisaGaji: 4350, role: "karyawan" },
{ nama: "rizki", password: "2411", sisaGaji: -3500, role: "karyawan" },
{ nama: "alpain kamaludin", password: "2412", sisaGaji: 84450, role: "karyawan" },
{ nama: "saripah fatmawati", password: "2413", sisaGaji: -27616, role: "karyawan" },
{ nama: "mita hafitya azzahra", password: "2414", sisaGaji: 373800, role: "karyawan" },
{ nama: "siti bilkis", password: "2415", sisaGaji: 521426, role: "karyawan" },
{ nama: "uci wulandari", password: "2416", sisaGaji: 278050, role: "karyawan" },
{ nama: "m. pahra prayoga", password: "2417", sisaGaji: 33350, role: "karyawan" },
{ nama: "dika setiawan", password: "2418", sisaGaji: 450, role: "karyawan" },
{ nama: "cikal firgina tasya", password: "2419", sisaGaji: -29200, role: "karyawan" },
{ nama: "restu muhamad dikri", password: "2420", sisaGaji: -1650, role: "karyawan" },
{ nama: "ade saepul rahmat", password: "2421", sisaGaji: 850, role: "karyawan" },
{ nama: "varlita divani", password: "2422", sisaGaji: 3030, role: "karyawan" },
{ nama: "wini widiastuti", password: "2423", sisaGaji: -7494, role: "karyawan" },
{ nama: "susi susilawati", password: "2424", sisaGaji: -46625, role: "karyawan" },
{ nama: "nurmilah", password: "2425", sisaGaji: 159100, role: "karyawan" },
{ nama: "hasna habibah az zahra", password: "2426", sisaGaji: 1350, role: "karyawan" },
{ nama: "ichdal husnaya", password: "2427", sisaGaji: -12670, role: "karyawan" },
{ nama: "silva rahayu", password: "2428", sisaGaji: -35350, role: "karyawan" },
{ nama: "muh latif asydik", password: "2429", sisaGaji: -21250, role: "karyawan" },
{ nama: "m dafa nugraha", password: "2430", sisaGaji: 12470, role: "karyawan" },
{ nama: "mela noviana", password: "2431", sisaGaji: 74326, role: "karyawan" },
{ nama: "yusanti", password: "2432", sisaGaji: -13986, role: "karyawan" },
{ nama: "bambang rizki rijaldi", password: "2433", sisaGaji: 2150, role: "karyawan" },
{ nama: "fadly resta putra", password: "2434", sisaGaji: 6710, role: "karyawan" },
{ nama: "ester felisia", password: "2435", sisaGaji: 140, role: "karyawan" },
{ nama: "moch dani apriadi", password: "2436", sisaGaji: 30, role: "karyawan" },
{ nama: "yana supriatna", password: "2437", sisaGaji: -5786, role: "karyawan" },
{ nama: "ernawati", password: "2438", sisaGaji: 150, role: "karyawan" },
{ nama: "siti nurholisoh", password: "2439", sisaGaji: 230, role: "karyawan" },
{ nama: "m.fikri abdurrahman", password: "2440", sisaGaji: 6050, role: "karyawan" },
{ nama: "dede suparman", password: "2440", sisaGaji: 6050, role: "karyawan" },

];
function login() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  const user = users.find(u => u.nama === username && u.password === password);

  if (user) {
    document.getElementById("gaji-info").style.display = "block";
    document.getElementById("gaji-text").innerText =
      `Halo, ${user.nama.toUpperCase()}. Sisa gaji kamu adalah Rp${user.sisaGaji.toLocaleString()}`;
    document.getElementById("error-msg").innerText = "";

    document.getElementById("username").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("catatan").style.display = "block";

    // Jika admin, tampilkan fitur admin
    if (user.role === "admin") {
      showAdminMenu();
    }
  } else {
    document.getElementById("error-msg").innerText = "Nama atau password salah!";
    document.getElementById("gaji-info").style.display = "none";
  }
}

// Tambahkan fungsi untuk fitur admin
function showAdminMenu() {
  // Contoh: tampilkan alert atau menu khusus
  alert("Selamat datang Admin! Fitur admin aktif.");
  // Anda bisa menambahkan elemen HTML khusus admin di sini
}

function logout() {
  // tampilkan kembali form login
  document.getElementById("username").style.display = "block";
  document.getElementById("password").style.display = "block";
  document.querySelector("button").style.display = "block";

  // sembunyikan info gaji
  document.getElementById("gaji-info").style.display = "none";
  document.getElementById("gaji-text").innerText = "";

  // sembunyikan catatan
  document.getElementById("catatan").style.display = "none";

  // kosongkan input
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
