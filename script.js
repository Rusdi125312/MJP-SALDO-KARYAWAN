// Data karyawan (simulasi database)
const users = [
  { nama: "budi", password: "budi123", sisaGaji: 3000000 },
  { nama: "carla", password: "6666", sisaGaji: 2500000 },
  { nama: "sari", password: "ab12cd", sisaGaji: 1800000 },
  { nama: "budi", password: "budi123", sisaGaji: 3000000 },
  { nama: "erica",password: "12345", sisaGaji: 2200000},
  { nama: "anisya", password: "599", sisaGaji: 500000 },
  { nama: "rusdi", password: "rusdi123", sisaGaji: 50000000},
 { nama:"rusdiru", password: "2222", sisaGaji: 88992 },
{ nama: "rusdirustiandisaputra", password: "2222", sisaGaji: 88992 },
{ nama: "budiansyah", password: "2223", sisaGaji: 4400160 },
{ nama: "febriadifiansyah", password: "2224", sisaGaji: 184769 },
{ nama: "hakytrieryawan", password: "2225", sisaGaji: -239365 },
{ nama: "ferdiansyah", password: "2226", sisaGaji: 148922 },
{ nama: "dedegunawan", password: "2227", sisaGaji: -8514 },
{ nama: "harianggawijaya", password: "2228", sisaGaji: 262148 },
{ nama: "fikransjanual", password: "2229", sisaGaji: -57355 },
{ nama: "mutiarazahriatulpasya", password: "2230", sisaGaji: 36143 },
{ nama: "salsanabilaazahra", password: "2231", sisaGaji: 68905 },
{ nama: "muhamadfebrisauri", password: "2232", sisaGaji: -66326 },
{ nama: "eriksopian", password: "2233", sisaGaji: -22616 },
{ nama: "refisaputra", password: "2234", sisaGaji: -42645 },
{ nama: "m.yusufsnur", password: "2235", sisaGaji: 16156 },
{ nama: "risnawati", password: "2236", sisaGaji: 160523 },
{ nama: "sendimaulana", password: "2237", sisaGaji: 7821 },
{ nama: "muhammadfabilrasyid", password: "2238", sisaGaji: 4612 },
{ nama: "dedesuryadin", password: "2239", sisaGaji: 182880 },
{ nama: "utarilegistri", password: "2240", sisaGaji: -44990 },
{ nama: "gungungunawan", password: "2241", sisaGaji: -11284 },
{ nama: "fauzanfuziansyah", password: "2242", sisaGaji: 155082 },
{ nama: "santiamelia", password: "2243", sisaGaji: 48164 },
{ nama: "nuraeni", password: "2244", sisaGaji: 119750 },
{ nama: "carlaamaliaarifani", password: "2245", sisaGaji: 2003276 },
{ nama: "yantisumiyanti", password: "2246", sisaGaji: 4302 },
{ nama: "ninaagustina", password: "2247", sisaGaji: 126578 },
{ nama: "donanugraha", password: "2248", sisaGaji: -5855 },
{ nama: "taufikmaulana", password: "2249", sisaGaji: -31650 },
{ nama: "sopianjaelani", password: "2250", sisaGaji: 6815 },
{ nama: "mfaisalagasy", password: "2251", sisaGaji: -38373 },
{ nama: "arifsetiawan", password: "2252", sisaGaji: -17430 },
{ nama: "melaniazarina", password: "2253", sisaGaji: 279700 },
{ nama: "nazarullohrizkisyah", password: "2254", sisaGaji: -41048 },
{ nama: "imannurzaman", password: "2255", sisaGaji: 22369 },
{ nama: "veriirawan", password: "2256", sisaGaji: 9260 },
{ nama: "nengsrianggraeni", password: "2257", sisaGaji: 397567 },
{ nama: "anistayulianingsih", password: "2258", sisaGaji: 38973 },
{ nama: "yesamowina", password: "2259", sisaGaji: 99516 },
{ nama: "alludyarahafaurasyifafa", password: "2260", sisaGaji: 208641 },
{ nama: "antiasiniislami", password: "2261", sisaGaji: 18124 },
{ nama: "rinalestari", password: "2262", sisaGaji: -53327 },
{ nama: "ratnasari", password: "2263", sisaGaji: 36681 },
{ nama: "irmawati", password: "2264", sisaGaji: 28586 },
{ nama: "restihidayatiputri", password: "2265", sisaGaji: -38320 },
{ nama: "nindiaaprilianti", password: "2266", sisaGaji: 386518 },
{ nama: "sitimaemunahoktavia", password: "2267", sisaGaji: 230304 },
{ nama: "anggipermana", password: "2268", sisaGaji: -7494 },
{ nama: "santi", password: "2269", sisaGaji: 906020 },
{ nama: "zaenaladinugraha", password: "2270", sisaGaji: 48562 },
{ nama: "nuraeni03", password: "2271", sisaGaji: -46637 },
{ nama: "enengsumyati", password: "2272", sisaGaji: -20128 },
{ nama: "lisnawati", password: "2273", sisaGaji: 2274271 },
{ nama: "fannyfatwalcahyani", password: "2274", sisaGaji: 465367 },
{ nama: "nengjuliawati", password: "2275", sisaGaji: -7006 },
{ nama: "fitriaambarwati", password: "2276", sisaGaji: -2153 },
{ nama: "andirusyandi", password: "2277", sisaGaji: 122578 },
{ nama: "mohamadpadil", password: "2278", sisaGaji: 425291 },
{ nama: "rahmamaulidha", password: "2279", sisaGaji: 239987 },
{ nama: "rikanurhayati", password: "2280", sisaGaji: 65115 },
{ nama: "ardimuhammadayub", password: "2281", sisaGaji: 20928 },
{ nama: "jayanuginugraha", password: "2282", sisaGaji: -11431 },
{ nama: "muhamadnasyathjauharin", password: "2283", sisaGaji: -58997 },
{ nama: "muhammadrifqimustopakamil", password: "2284", sisaGaji: -16605 },
{ nama: "wulandarimeilaniputri", password: "2285", sisaGaji: 89827 },
{ nama: "dewisanjung", password: "2286", sisaGaji: -51518 },
{ nama: "sindifitriaulia", password: "2287", sisaGaji: -23655 },
{ nama: "hildamutiarautari", password: "2288", sisaGaji: -4587 },
{ nama: "ridwanmuhammad", password: "2289", sisaGaji: -40370 },
{ nama: "henianggraeni", password: "2290", sisaGaji: -25817 },
{ nama: "pahrihusaeni", password: "2291", sisaGaji: 139888 },
{ nama: "muhammadekaastiyan", password: "2292", sisaGaji: -2998 },
{ nama: "tsaniamarwa", password: "2293", sisaGaji: 143056 },
{ nama: "muhammadismuladamalalla", password: "2294", sisaGaji: 235561 },
{ nama: "gilarputrapangestu", password: "2295", sisaGaji: -19830 },
{ nama: "nabilapatarani", password: "2296", sisaGaji: -51957 },
{ nama: "anisapermatasari", password: "2297", sisaGaji: -274178 },
{ nama: "zilhanfauzi", password: "2298", sisaGaji: 183230 },
{ nama: "arihermawan", password: "2299", sisaGaji: -118459 },
{ nama: "arissunandi", password: "2300", sisaGaji: -12325 },
{ nama: "sidiqmaulana", password: "2301", sisaGaji: -7499 },
{ nama: "fatimahsurahman", password: "2302", sisaGaji: 78840 },
{ nama: "nendisupriyadi", password: "2303", sisaGaji: -9524 },
{ nama: "sitisarah", password: "2304", sisaGaji: 232298 },
{ nama: "muhamadrizalfirmansyah", password: "2305", sisaGaji: -43348 },
{ nama: "bagasriannugraha", password: "2306", sisaGaji: -15212 },
{ nama: "muhrizkimaulana", password: "2307", sisaGaji: 503768 },
{ nama: "dickyfadilahmaulana", password: "2308", sisaGaji: 4281 },
{ nama: "selvarinapasyaramadhani", password: "2309", sisaGaji: 62487 },
{ nama: "giantipuspitasari", password: "2310", sisaGaji: 102224 },
{ nama: "haninatalia", password: "2311", sisaGaji: 438245 },
{ nama: "novia", password: "2312", sisaGaji: 1544767 },
{ nama: "evapuspita", password: "2313", sisaGaji: -11915 },
{ nama: "titarosita", password: "2314", sisaGaji: 2160615 },
{ nama: "rineu", password: "2315", sisaGaji: 105136 },
{ nama: "nengandininoerhabbibah", password: "2316", sisaGaji: 155192 },
{ nama: "desidwiyanti", password: "2317", sisaGaji: 20124 },
{ nama: "intania", password: "2318", sisaGaji: -26104 },
{ nama: "hernisrilestari", password: "2319", sisaGaji: 102251 },
{ nama: "muhammadnurjamil", password: "2320", sisaGaji: -12776 },
{ nama: "santihermawanti", password: "2321", sisaGaji: 132126 },
{ nama: "silviahelen", password: "2322", sisaGaji: 79546 },
{ nama: "penisilvianaerawan", password: "2323", sisaGaji: -44068 },
{ nama: "feliciafebrianti", password: "2324", sisaGaji: -23980 },
{ nama: "sahrulramdani", password: "2325", sisaGaji: 1 },
{ nama: "muhammadabdulsalam", password: "2326", sisaGaji: -1945 },
{ nama: "sitisarah04", password: "2327", sisaGaji: -15308 },
{ nama: "saepulrahman", password: "2328", sisaGaji: 97670 },
{ nama: "suwandi", password: "2329", sisaGaji: 1070 },
{ nama: "melisasabila", password: "2330", sisaGaji: 2715 },
{ nama: "ridwanmaulana", password: "2331", sisaGaji: 30445 },
{ nama: "agilsaparhan", password: "2332", sisaGaji: -31480 },
{ nama: "endraagustian", password: "2333", sisaGaji: 540 },
{ nama: "irgisandini", password: "2334", sisaGaji: -51688 },
{ nama: "vellananditadesyana", password: "2335", sisaGaji: -21108 },
{ nama: "isminurajijah", password: "2336", sisaGaji: 273856 },
{ nama: "widiawatiayulestari", password: "2337", sisaGaji: 455847 },
{ nama: "najwazahiyyahhanun", password: "2338", sisaGaji: 231021 },
{ nama: "rininuryani", password: "2339", sisaGaji: 575063 },
{ nama: "nurmala", password: "2340", sisaGaji: 372317 },
{ nama: "riananoprianti", password: "2341", sisaGaji: 10071 },
{ nama: "dwimeganovianty", password: "2342", sisaGaji: 254942 },
{ nama: "faujiahisyuniarti", password: "2343", sisaGaji: 12330 },
{ nama: "trianargapura", password: "2344", sisaGaji: 68940 },
{ nama: "rikviepratamagunawan", password: "2345", sisaGaji: 32300 },
{ nama: "ericanaylamaryam", password: "2346", sisaGaji: 746555 },
{ nama: "sidikabdulrohman", password: "2347", sisaGaji: -7430 },
{ nama: "ernisukaesih", password: "2348", sisaGaji: 152635 },
{ nama: "mzhiarhamandha", password: "2349", sisaGaji: -103380 },
{ nama: "tiaradelianurfauziahjunaedi", password: "2350", sisaGaji: 184555 },
{ nama: "anisyanurhaliza", password: "2351", sisaGaji: 1537629 },
{ nama: "daracynthiapasha", password: "2352", sisaGaji: 39130 },
{ nama: "elisa", password: "2353", sisaGaji: -500 },
{ nama: "eliermawati", password: "2354", sisaGaji: 950 },
{ nama: "ratnasari04", password: "2355", sisaGaji: 730750 },
{ nama: "muhamadsahrulramadani", password: "2356", sisaGaji: 3220 },
{ nama: "pegianugrahjultiaman", password: "2357", sisaGaji: -15860 },
{ nama: "rinaapriliana", password: "2358", sisaGaji: 10750 },
{ nama: "nasywachaerunisa", password: "2359", sisaGaji: 29000 },
{ nama: "yuminarni", password: "2360", sisaGaji: 9580 },
{ nama: "aleandrykharismaputras", password: "2361", sisaGaji: 190 },
{ nama: "nezannurrisdiani", password: "2362", sisaGaji: 545860 },
{ nama: "ayangsuryani", password: "2363", sisaGaji: 420850 },
{ nama: "ermarachmawati", password: "2364", sisaGaji: 83480 },
{ nama: "ismahrojani", password: "2365", sisaGaji: -46700 },
{ nama: "rizwan", password: "2366", sisaGaji: -97430 },
{ nama: "saskiawidyaoktaviyani", password: "2367", sisaGaji: -15975 },
{ nama: "sandrikasarohani", password: "2368", sisaGaji: 1 },
{ nama: "marshaameldalia", password: "2369", sisaGaji: 518480 },
{ nama: "rissalherdiansyah", password: "2370", sisaGaji: -28310 },
{ nama: "yusufgunawan", password: "2371", sisaGaji: -13400 },
{ nama: "muhammadfauzi", password: "2372", sisaGaji: 1 },
{ nama: "ramadani", password: "2373", sisaGaji: -16280 },
{ nama: "restiana", password: "2374", sisaGaji: 166350 },
{ nama: "suwartati", password: "2375", sisaGaji: 70 },
{ nama: "hilmaamalia", password: "2376", sisaGaji: -9250 },
{ nama: "sitirohmah", password: "2377", sisaGaji: 242625 },
{ nama: "taufikmaulananugraha", password: "2378", sisaGaji: -15900 },
{ nama: "nesahardiantyputri", password: "2379", sisaGaji: 153100 },
{ nama: "ameliaputri", password: "2380", sisaGaji: 106870 },
{ nama: "sundari", password: "2381", sisaGaji: 14080 },
{ nama: "erikashivanadira", password: "2382", sisaGaji: -11700 },
{ nama: "rivaauliani", password: "2383", sisaGaji: 87144 },
{ nama: "nabilatulkamilah", password: "2384", sisaGaji: -39020 },
{ nama: "indriyulyanti", password: "2385", sisaGaji: -22920 },
{ nama: "ernamaulani", password: "2386", sisaGaji: 34600 },
{ nama: "putrizalfabuhadisa", password: "2387", sisaGaji: 137320 },
{ nama: "sulastri", password: "2388", sisaGaji: 3500 },
{ nama: "anggunsrilestari", password: "2389", sisaGaji: 300 },
{ nama: "muhamadrijkyalamsyah", password: "2390", sisaGaji: -58040 },
{ nama: "anggaprayoga", password: "2391", sisaGaji: -43200 },
{ nama: "rifkiikhsannabil", password: "2392", sisaGaji: 155300 },
{ nama: "muhammadfaisal", password: "2393", sisaGaji: 17480 },
{ nama: "maulanayusuf", password: "2394", sisaGaji: -3300 },
{ nama: "mojangrucitawijaksana", password: "2395", sisaGaji: 124120 },
{ nama: "vellasalsabila", password: "2396", sisaGaji: 1840 },
{ nama: "trisnawatidewi", password: "2397", sisaGaji: -52736 },
{ nama: "riskarismawati", password: "2398", sisaGaji: 183060 },
{ nama: "diazhermayadi", password: "2399", sisaGaji: -1130 },
{ nama: "rahmafazriawati", password: "2400", sisaGaji: -7000 },
{ nama: "seftinuramelia", password: "2401", sisaGaji: -7000 },
{ nama: "adelia", password: "2402", sisaGaji: 1 },
{ nama: "rahmihilmansyah", password: "2403", sisaGaji: -9300 },
{ nama: "shienbykhailapaujia", password: "2404", sisaGaji: 33640 },
{ nama: "itanurlita", password: "2405", sisaGaji: 50550 },
{ nama: "diahwidaningsih", password: "2406", sisaGaji: 203700 },
{ nama: "ferapermatasari", password: "2407", sisaGaji: 123060 },
{ nama: "muhammadadlizhafiri", password: "2408", sisaGaji: 16030 },
{ nama: "nureinaardiakaylarahmani", password: "2409", sisaGaji: 148380 },
{ nama: "nazirasyahwal", password: "2410", sisaGaji: 4350 },
{ nama: "rizki", password: "2411", sisaGaji: -3500 },
{ nama: "alpainkamaludin", password: "2412", sisaGaji: 84450 },
{ nama: "saripahfatmawati", password: "2413", sisaGaji: -27616 },
{ nama: "mitahafityaazzahra", password: "2414", sisaGaji: 373800 },
{ nama: "sitibilkis", password: "2415", sisaGaji: 521426 },
{ nama: "uciwulandari", password: "2416", sisaGaji: 278050 },
{ nama: "m.pahraprayoga", password: "2417", sisaGaji: 33350 },
{ nama: "dikasetiawan", password: "2418", sisaGaji: 450 },
{ nama: "cikalfirginatasya", password: "2419", sisaGaji: -29200 },
{ nama: "restumuhamaddikri", password: "2420", sisaGaji: -1650 },
{ nama: "adesaepulrahmat", password: "2421", sisaGaji: 850 },
{ nama: "varlitadivani", password: "2422", sisaGaji: 3030 },
{ nama: "winiwidiastuti", password: "2423", sisaGaji: -7494 },
{ nama: "susisusilawati", password: "2424", sisaGaji: -46625 },
{ nama: "nurmilah", password: "2425", sisaGaji: 159100 },
{ nama: "hasnahabibahazzahra", password: "2426", sisaGaji: 1350 },
{ nama: "ichdalhusnaya", password: "2427", sisaGaji: -12670 },
{ nama: "silvarahayu", password: "2428", sisaGaji: -35350 },
{ nama: "muhlatifasydik", password: "2429", sisaGaji: -21250 },
{ nama: "mdafanugraha", password: "2430", sisaGaji: 12470 },
{ nama: "melanoviana", password: "2431", sisaGaji: 74326 },
{ nama: "yusanti", password: "2432", sisaGaji: -13986 },
{ nama: "bambangrizkirijaldi", password: "2433", sisaGaji: 2150 },
{ nama: "fadlyrestaputra", password: "2434", sisaGaji: 6710 },
{ nama: "esterfelisia", password: "2435", sisaGaji: 140 },
{ nama: "mochdaniapriadi", password: "2436", sisaGaji: 30 },
{ nama: "yanasupriatna", password: "2437", sisaGaji: -5786 },
{ nama: "ernawati", password: "2438", sisaGaji: 150 },
{ nama: "sitinurholisoh", password: "2439", sisaGaji: 230 },
{ nama: "m.fikriabdurrahman", password: "2440", sisaGaji: 6050 },
{ nama: "dedefikri", password: "2223", sisaGaji: 7100 },
];
function login() {
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value;

  const user = users.find(u => u.nama === username && u.password === password);

  if (user) {
    document.getElementById("gaji-info").style.display = "block";
    document.getElementById("gaji-text").innerText = `Halo, ${user.nama.toUpperCase()}. Sisa gaji kamu adalah Rp${user.sisaGaji.toLocaleString()}`;
    document.getElementById("error-msg").innerText = "";
    // Sembunyikan form login
    document.getElementById("username").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.querySelector("button").style.display = "none";
  // 👇 tampilkan catatan
  document.getElementById("catatan").style.display = "block";
}
  }  {
    document.getElementById("error-msg").innerText = "Nama atau password salah!";
    document.getElementById("gaji-info").style.display = "none";
  }

function logout() {
  // Tampilkan kembali form login
  document.getElementById("username").style.display = "block";
  document.getElementById("password").style.display = "block";
  document.querySelector("button").style.display = "block";
  // sembunyikan catattan
  document.getElementById("catatan").style.display = "none";
  // sembunyikan form update gaji
  document.getElementById("update-form").style.display = "none";
document.getElementById("update-msg").innerText = "";

function updateGaji() {
  const nama = document.getElementById("update-nama").value.trim().toLowerCase();
  const gajiBaru = parseInt(document.getElementById("update-gaji").value);

  const user = users.find(u => u.nama.toLowerCase() === nama);

  if (user && !isNaN(gajiBaru)) {
    user.sisaGaji = gajiBaru;
    document.getElementById("update-msg").innerText =
      `✅ Gaji ${user.nama} berhasil diperbarui jadi Rp${gajiBaru.toLocaleString()}`;
    document.getElementById("update-msg").style.color = "green";

    // Jika user yang sedang login adalah yang diupdate, tampilkan ulang
    const loginNama = document.getElementById("username").value.trim().toLowerCase();
    if (user.nama.toLowerCase() === loginNama) {
      document.getElementById("gaji-text").innerText =
        `Halo, ${user.nama.toUpperCase()}. Sisa gaji kamu adalah Rp${user.sisaGaji.toLocaleString()}`;
    }

  } else {
    document.getElementById("update-msg").innerText = "❌ Nama tidak ditemukan atau gaji tidak valid.";
    document.getElementById("update-msg").style.color = "red";
  }
}

  // Sembunyikan info gaji
  document.getElementById("gaji-info").style.display = "none";
  document.getElementById("gaji-text").innerText = "";

  // Kosongkan input
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}