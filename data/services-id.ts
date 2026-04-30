import type { Service } from "./service-types";
import { homeHighlightedSlugs } from "./services-en";

export const servicesId: Service[] = [
  {
    slug: "ai-adoption-strategy",
    title: "Strategi Adopsi AI",
    description:
      "Menetapkan di mana AI menciptakan nilai bisnis, tim dan alur kerja mana yang diprioritaskan, serta bagaimana adopsi akan diukur dan ditata kelola.",
    detail:
      "Strategi di sini berarti jaring penghubung — bukan deck yang terpisah dari operasi. Kami membantu Anda memutuskan kasus penggunaan mana yang layak diinvestasikan sekarang, mana yang bergantung pada fondasi yang belum ada, dan bagaimana merencanakan urutan kerja agar adopsi bertambah kuat alih-alih terpecah antar silo. Hasilnya adalah peta jalan yang dapat dipertanggungjawabkan eksekutif dan dieksekusi tim.",
    bullets: [
      "Prioritisasi dan pengurutan kasus penggunaan",
      "KPI adopsi dan metrik keberhasilan",
      "Pemetaan pemangku kepentingan dan kesiapan",
    ],
    outcomes: [
      "Peta jalan adopsi berprioritas yang terikat pada hasil bisnis",
      "Definisi keberhasilan yang jelas melampaui peluncuran atau jumlah lisensi",
      "Bahasa bersama antara IT, bisnis, dan HR tentang arti “teradopsi”",
    ],
    engagementSnapshot:
      "Biasanya dimulai dengan sprint diagnostik dan desain bersama pemangku senior, diikuti peta jalan konkret dan kaitan tata kelola — disesuaikan dengan organisasi Anda, bukan templat generik.",
    clientExamples: [
      "Untuk bank global: mengurutkan kredit korporasi, tinjauan hukum, dan kasus cabang agar residensi data dan pintu risiko model selaras dengan gelombang peluncuran.",
      "Untuk sistem kesehatan: menghubungkan percobaan AI rawat jalan vs rawat inap dengan kedewasaan tata kelola klinis dan jadwal konsultasi serikat.",
      "Untuk manufaktur: memprioritaskan pemeliharaan prediktif dan asisten mutu hanya setelah silsilah data MES dan kendala Wi-Fi pabrik menjadi input perencanaan yang jujur.",
    ],
    indonesiaExample: {
      label: "Holding terdiversifikasi terdaftar di Jakarta (induk + anak usaha)",
      description:
        "Beberapa divisi ingin copilot gen-AI sekaligus — properti, ritel, dan infrastruktur — namun layanan bersama, residensi data, dan pelaporan dewan terpusat. Kami membantu holding merumuskan narasi adopsi tunggal, mengurutkan anak usaha menurut kesiapan dan paparan regulasi, serta menetapkan KPI yang dipakai dalam forum kepemimpinan berbahasa Indonesia dan Inggris agar anak usaha tidak berebut kapasitas data engineering yang sama.",
    },
  },
  {
    slug: "change-management",
    title: "Manajemen Perubahan",
    description:
      "Menata sisi manusia dari adopsi AI — melibatkan pemimpin, memperlengkap manajer, dan menggeser perilaku di tingkat tim.",
    detail:
      "Perubahan AI gagal jika diperlakukan sebagai komunikasi atau sekadar pelatihan. Kami merancang rantai sponsor, pemberdayaan manajer, dan ritual tim agar cara kerja baru bertahan. Perlawanan diantisipasi; kami mengungkapnya lebih awal dan membangun respons dalam rencana, bukan bereaksi setelah penggunaan merosot.",
    bullets: [
      "Penyelarasan sponsor dan mobilisasi kepemimpinan",
      "Analisis dampak perubahan dan resistensi",
      "Pemberdayaan manajer dan keterlibatan tim",
    ],
    outcomes: [
      "Pemimpin yang tahu mensponsori adopsi AI di fungsinya",
      "Manajer siap membimbing tim melalui perubahan alur kerja nyata",
      "Penggunaan berkelanjutan lebih tinggi karena perubahan perilaku dirancang, bukan diharapkan",
    ],
    engagementSnapshot:
      "Sering dipadukan dengan peluncuran atau tata kelola: kami menanamkan lead perubahan, menjalankan pemberdayaan terarah, dan menyesuaikan intervensi seiring data adopsi.",
    clientExamples: [
      "Buku panduan manajer untuk percakapan “AI + kinerja” agar lead tim menetapkan ekspektasi tanpa melebih-lebihkan otomatisasi.",
      "Memetakan resistensi per fungsi — misalnya hukum yang khawatir kutipan halusinasi vs penjualan yang khawatir alur melambat — lalu menyesuaikan intervensi.",
      "Merancang ritual tim (huddle, daftar periksa QA) agar penggunaan bertanggung jawab tersosialisasi antar rekan, tidak hanya top-down.",
    ],
    indonesiaExample: {
      label: "Produsen barang konsumen dengan pabrik di Jawa dan Sumatra",
      description:
        "Asisten SOP diperkenalkan di kantor pusat, namun supervisor pabrik kembali ke WhatsApp dan ceklis kertas. Kami menyelaraskan manajer pabrik dan pengurus serikat tentang perubahan briefing harian, membangun micro-learning berbahasa Indonesia untuk line lead, dan mengaitkan metrik adopsi dengan keselamatan dan mutu agar perubahan dibingkai sebagai konsistensi pekerjaan — bukan pengawasan.",
    },
  },
  {
    slug: "rollout-planning-and-execution",
    title: "Perencanaan dan Eksekusi Peluncuran",
    description:
      "Menerjemahkan strategi AI menjadi rencana peluncuran bertahap dengan tonggak, pemilik, dan jalur eskalasi yang jelas.",
    detail:
      "Peluncuran adalah pertemuan ambisi dengan kendala kapasitas. Kami menyusun rencana bertahap yang menghormati dependensi — data, akses, risiko, pelatihan — dan menetapkan kepemilikan jelas agar pekerjaan tidak macet di serah terima. Kemajuan dilacak dengan indikator adopsi dan risiko, bukan hanya tonggak proyek, sehingga koreksi arah dilakukan sebelum program kehilangan kredibilitas.",
    bullets: [
      "Perencanaan peluncuran bertahap",
      "Koordinasi lintas fungsi",
      "Pelacakan kemajuan dan koreksi arah",
    ],
    outcomes: [
      "Peluncuran berurutan dengan pemilik dan titik keputusan eksplisit",
      "Kejutan lebih sedikit saat skala naik karena dependensi dinamai di awal",
      "Visibilitas eksekutif terhadap kesehatan adopsi, bukan hanya status proyek hijau",
    ],
    engagementSnapshot:
      "Kami biasanya berperan sebagai lapisan eksekusi tipis bersama PMO atau kantor transformasi — cukup ketat untuk momentum, ringan agar tidak menduplikasi struktur yang ada.",
    clientExamples: [
      "Rencana gelombang untuk peluncuran copilot di 40 negara dengan kriteria “negara hijau” (IdP, logging, helpdesk).",
      "Integrasi kalender perubahan IT dengan titik pemeriksaan HR bisnis agar pelatihan tidak menjadi pikiran belakangan.",
      "Ruang perang adopsi mingguan dengan produk, risiko, dan komunikasi internal memakai dasbor bersama.",
    ],
    indonesiaExample: {
      label: "Bank ritel nasional yang meluncurkan copilot internal ke cabang",
      description:
        "Pilot berhasil di kantor pusat Jakarta, namun bandwidth cabang, kebijakan perangkat, dan eskalasi ke tim risiko selaras OJK belum jelas. Kami merancang gelombang per wilayah (Jabodetabek, lalu Jawa non-metro, lalu pulau luar), menyelaraskan dengan jendela rilis ITIL yang ada, dan menyiapkan skrip helpdesk berbahasa Indonesia untuk kegagalan umum — agar skala tidak melampaui dukungan atau ekspektasi audit.",
    },
  },
  {
    slug: "governance-and-responsible-use",
    title: "Tata Kelola dan Penggunaan Bertanggung Jawab",
    description:
      "Merancang dan menanamkan kerangka tata kelola yang praktis, proporsional, dan dipahami oleh orang yang harus menggunakannya.",
    detail:
      "Tata kelola hanya berjalan jika lebih mudah dipatuhi daripada diabaikan. Kami menerjemahkan maksud kebijakan menjadi panduan tingkat alur kerja: apa yang diperbolehkan, apa yang perlu tinjauan, dan bagaimana mengeskalasi ketika ada ketidakpastian. Proporsional berarti aturan berbeda untuk konteks risiko berbeda — bukan satu buku aturan datar yang diakali tim.",
    bullets: [
      "Desain kebijakan penggunaan bertanggung jawab",
      "Integrasi tata kelola ke alur kerja",
      "Definisi batas risiko dan desain eskalasi",
    ],
    outcomes: [
      "Kebijakan dan pagar yang benar-benar dirujuk dalam pekerjaan harian",
      "Jalur eskalasi jelas yang mengurangi penggunaan AI “bayangan”",
      "Jejak audit tanpa melumpuhkan inovasi",
    ],
    engagementSnapshot:
      "Keterlibatan sering memadukan hukum, risiko, IT, dan bisnis dalam sesi kerja agar tata kelola dimiliki bersama, bukan dibebankan ke satu fungsi.",
    clientExamples: [
      "Model bertingkat: bantuan penyusunan risiko rendah vs keputusan risiko tinggi dengan paraf manusia dan pencatatan.",
      "Bermitra dengan hukum untuk mewujudkan “tanpa pelatihan pada data klien” ke konfigurasi alat dan aturan DLP konkret.",
      "Buku panduan insiden ketika model mengeluarkan data terlindungi — siapa yang dihubungi, apa yang dipertahankan.",
    ],
    indonesiaExample: {
      label: "Fintech pengawas OJK dengan lalu lintas pelanggan Bahasa Indonesia dan Inggris",
      description:
        "Pemasaran ingin gen-AI cepat untuk kampanye; kepatuhan membutuhkan jejak dan penanganan PII selaras ekspektasi lokal. Kami merancang panduan penggunaan bertanggung jawab pendek berbahasa Indonesia untuk staf garis depan, memetakan prompt mana yang memerlukan pra-cek hukum, serta retensi dan eskalasi selaras selera risiko — agar tim berhenti memakai akun ChatGPT pribadi untuk pekerjaan teregulasi.",
    },
  },
  {
    slug: "enablement-and-training",
    title: "Pemberdayaan dan Pelatihan",
    description:
      "Membangun kapabilitas di setiap level — dari orientasi eksekutif hingga pelatihan praktis bagi tim yang menerapkan dan memakai alat AI.",
    detail:
      "Pembangunan kapabilitas harus cocok dengan cara dewasa belajar di peran sibuk: singkat, kontekstual, dan terikat alur kerja nyata. Kami merancang jalur per peran — eksekutif, manajer, praktisi — dan menyelaraskan konten dengan alat dan kasus penggunaan yang benar-benar diluncurkan, sehingga pelatihan tidak terasa abstrak.",
    bullets: [
      "Jalur pembelajaran berbasis peran",
      "Pelatihan praktis yang dikontekstualkan ke alur kerja",
      "Penilaian dan pelacakan kapabilitas",
    ],
    outcomes: [
      "Tenaga kerja yang tahu menerapkan AI dalam peran, bukan sekadar menekan tombol",
      "Aset pembelajaran yang tetap mutakhir saat alat dan kebijakan berubah",
      "Metrik yang menunjukkan pertumbuhan keterampilan bersama penggunaan",
    ],
    engagementSnapshot:
      "Kami dapat membangun kurikulum, model train-the-trainer, atau gelombang terarah — selalu terikat pada peta jalan adopsi dan batas tata kelola Anda.",
    clientExamples: [
      "Bantuan kerja “minggu pertama dengan copilot” terikat tiket nyata di ITSM, CRM, atau tinjauan kontrak.",
      "Sesi 90 menit untuk eksekutif tentang apa yang disponsori vs didelegasikan secara teknis.",
      "Rubrik kapabilitas per peran dengan ritme penyegaran saat model atau kebijakan berubah.",
    ],
    indonesiaExample: {
      label: "Operator telekomunikasi dengan pusat kontak di Surabaya dan Makassar",
      description:
        "Agen membutuhkan prompt konsisten dan eskalasi ketika model menyarankan promo atau jawaban kebijakan yang salah. Kami membangun kartu referensi cepat dwibahasa, latihan skenario untuk supervisor, dan model peer-coach agar jaminan kualitas dan pemberdayaan tidak hanya terpusat di Jakarta — mengurangi miskomunikasi aksen dan dialek sambil menjaga visibilitas tata kelola.",
    },
  },
  {
    slug: "stakeholder-alignment",
    title: "Penyelarasan Pemangku Kepentingan",
    description:
      "Menyelaraskan pemimpin, kepala fungsi, dan tim operasional pada pemahaman bersama tentang prioritas, ekspektasi, dan kemajuan AI.",
    detail:
      "Ketidakselarasan mahal: pilot ganda, pesan bertentangan, dan kelelahan. Kami menjalankan momen penyelarasan terstruktur — briefing, lokakarya, forum — agar prioritas, trade-off, dan timeline eksplisit. Tujuannya narasi bersama yang bertahan saat program menemui gesekan, bukan kesepakatan yang hilang setelah lokakarya.",
    bullets: [
      "Lokakarya dan briefing eksekutif",
      "Forum tata kelola lintas fungsi",
      "Perencanaan komunikasi dan arsitektur pesan",
    ],
    outcomes: [
      "Lebih sedikit narasi bersaing antar fungsi",
      "Keputusan lebih cepat karena trade-off diungkap lebih awal",
      "Tim memahami mengapa alur kerjanya dalam ruang lingkup — atau tidak — dan kapan",
    ],
    engagementSnapshot:
      "Sering dimuat di awal program dan diulang di gerbang fase besar agar penyelarasan bertahan meski pergantian pemimpin dan prioritas bergeser.",
    clientExamples: [
      "“North star” satu halaman ditandatangani CIO, CHRO, dan presiden bisnis dengan non-tujuan eksplisit.",
      "Forum triwulanan di mana produk, risiko, dan serikat mendengar metrik adopsi yang sama.",
      "Narasi untuk investor atau regulator yang selaras dengan kenyataan program internal.",
    ],
    indonesiaExample: {
      label: "Holding kelapa sawit dan merek konsumen",
      description:
        "Digitalisasi perkebunan, pemasaran konsumen, dan pelaporan ESG masing-mendorong agenda AI berbeda. Kami memfasilitasi leadership offsite yang mengurutkan fondasi data bersama, menyelaraskan arti “AI bertanggung jawab” untuk komunikasi ke pekebun kecil, dan menetapkan satu narasi sponsor eksekutif untuk dewan — mengurangi bukti vendor ganda dan pesan bertentangan ke pemerintah daerah dan LSM.",
    },
  },
  {
    slug: "adoption-readiness-and-diagnostics",
    title: "Kesiapan Adopsi & Diagnostik",
    description:
      "Membangun baseline yang jujur sebelum Anda berkomitmen pada program — pemangku, alur kerja, kasus penggunaan, risiko, dan hambatan yang biasanya menghentikan adopsi di perusahaan sejenis Anda.",
    detail:
      "Banyak program dimulai dengan optimisme dan kurang berinvestasi pada realitas baseline. Kami memetakan di mana adopsi cenderung patah — kualitas data, kesenjangan keterampilan, blokir politik, inisiatif bersaing — dan mengukur kesiapan agar rencana Anda kredibel bagi sponsor dan pendana. Bukan laporan panjang; melainkan hambatan berprioritas dengan implikasi urutan dan investasi.",
    bullets: [
      "Penilaian kesiapan dan hambatan lintas fungsi",
      "Peta panas kasus penggunaan dan alur kerja",
      "Pengungkapan risiko dan kendala untuk desain program",
    ],
    outcomes: [
      "Pandangan berbasis bukti tentang di mana adopsi akan sulit — sebelum Anda memperbesar pengeluaran",
      "Kasus penggunaan diurutkan menurut nilai dan kelayakan, bukan hype",
      "Hubungan eksplisit antara prasyarat teknis dan risiko adopsi",
    ],
    engagementSnapshot:
      "Biasanya diagnostik 3–6 minggu tergantung ukuran perusahaan, dengan wawancara, tinjauan dokumen, dan lokakarya terstruktur — keluarannya paket kesiapan ringkas dan bentuk program yang direkomendasikan.",
    clientExamples: [
      "Peta panas 30 kasus penggunaan yang diusulkan vs kedewasaan data dan kejenuhan perubahan.",
      "Sintesis wawancara yang menunjukkan di mana manajemen menengah diam-diam menghambat mandat alat.",
      "Membandingkan prasyarat adopsi dengan rekan sektor (anonim).",
    ],
    indonesiaExample: {
      label: "Logistik e-commerce / 3PL yang menjangkau Jawa dan pulau luar",
      description:
        "Kepemimpinan ingin optimasi rute dan asisten gudang, namun master data terpecah antara mitra waralaba dan TMS legasi. Kami menjalankan diagnostik yang menamai kesenjangan integrasi dan literasi per hub, memprioritaskan satu koridor untuk bukti ujung ke ujung, dan menandai di mana kualitas dokumentasi Bahasa Indonesia akan membatasi kegunaan model — agar bisnis kas mencerminkan realitas lapangan, bukan optimisme kantor pusat.",
    },
  },
  {
    slug: "ai-programme-and-operating-model",
    title: "Desain Program AI & Model Operasi",
    description:
      "Mengubah antusiasme eksekutif menjadi struktur jelas: siapa memutuskan, siapa memiliki hasil, bagaimana kemajuan diukur, dan bagaimana kerja AI berpadu dengan ritme operasi yang ada.",
    detail:
      "Antusiasme tanpa struktur menjadi tumpukan pilot. Kami merancang model kantor program atau jaringan, hak keputusan, dan ritme yang cocok dengan budaya Anda — ringan di beberapa organisasi, lebih formal di lingkungan teregulasi. Metrik keberhasilan menghubungkan penggunaan, nilai, dan risiko agar model operasi memperkuat perilaku yang diinginkan.",
    bullets: [
      "Kejelasan peran, hak keputusan, dan desain akuntabilitas",
      "Struktur program adopsi selaras politik dan kecepatan perusahaan",
      "Metrik keberhasilan yang mencerminkan penggunaan berkelanjutan, bukan sekadar aktivitas peluncuran",
    ],
    outcomes: [
      "Pemilik bernama untuk hasil adopsi, bukan hanya pengiriman teknologi",
      "Ritme rapat dan forum yang mempertahankan fokus setelah peluncuran",
      "Desain program yang dapat dijelaskan sponsor dalam satu cerita jelas",
    ],
    engagementSnapshot:
      "Kami codesain dengan HR, IT, risiko, dan pemimpin bisnis agar model hidup di lapangan, bukan dipaksakan — biasanya iteratif dalam beberapa sesi kerja.",
    clientExamples: [
      "RACI untuk pembaruan model, pustaka prompt, dan penanganan pengecualian.",
      "Model tim fusi vs AI CoE pusat — trade-off dijelaskan eksplisit.",
      "Mekanisme anggaran untuk pelatihan ulang dan pergantian vendor agar program tidak kekurangan sumber daya setelah tahun pertama.",
    ],
    indonesiaExample: {
      label: "Unit transformasi digital BUMN",
      description:
        "Beberapa kementerian dan direktorat internal mempengaruhi prioritisasi; siklus pengadaan panjang. Kami membantu mendefinisikan dewan program ringan dengan hak keputusan jelas, menyelaraskan inisiatif AI dengan OKR transformasi yang ada, dan menetapkan pelaporan yang dipakai pemangku teknis dan politik — agar inisiatif tidak macet menunggu konsensus bulat.",
    },
  },
  {
    slug: "pilot-exit-and-scale-readiness",
    title: "Keluar Pilot & Kesiapan Skala",
    description:
      "Menutup celah antara bukti konsep yang sukses dan jalur peluncuran perusahaan yang kredibel — pengurutan, dependensi, dan infrastruktur perubahan yang dibutuhkan untuk meluas.",
    detail:
      "Pilot berhasil di sudut yang ramah; skala mengekspos kesenjangan data, dukungan, dan perilaku. Kami mendefinisikan kriteria keluar pilot eksplisit, apa yang harus benar sebelum gelombang berikutnya, dan bagaimana dukungan serta tata kelola diskalakan dengan pertumbuhan pengguna. Tujuannya menghindari perangkap umum: POC yang dirayakan diikuti mandat perusahaan yang macet.",
    bullets: [
      "Definisi kriteria tinjauan pilot dan skala",
      "Desain peluncuran berurutan dengan dependensi realistis",
      "Gerbang kesiapan sebelum memperluas audiens atau kasus penggunaan",
    ],
    outcomes: [
      "Jalur terdokumentasi dari pilot ke peluncuran berbasis gelombang",
      "Pemeriksaan kesiapan yang mencegah skala prematur",
      "Keyakinan sponsor bahwa tranche berikutnya layak didanai dan dipertahankan",
    ],
    engagementSnapshot:
      "Sering dipicu di pertengahan atau akhir pilot — sesi kerja intensif dengan pemilik pengiriman, risiko, dan bisnis untuk mengunci kriteria skala dan pengurutan.",
    clientExamples: [
      "Daftar periksa: SSO, logging, DLP, skrip helpdesk tier-1, tingkat penyelesaian pelatihan manajer.",
      "Kriteria kill/pivot jika adopsi atau tingkat error melampaui ambang.",
      "Model keuangan untuk skala termasuk biaya inferensi dan FTE dukungan.",
    ],
    indonesiaExample: {
      label: "Perusahaan marketplace / teknologi Indonesia pasca-pilot",
      description:
        "Asisten gen-AI untuk merchant berhasil di beta Jakarta; beban dukungan dan kasus bahasa informal Indonesia melonjak saat pilot diperluas. Kami mendefinisikan gerbang skala pada latensi, tingkat serah terima manusia, dan keselaman konten, mengurutkan perluasan menurut tier merchant dan wilayah, serta menyelaraskan pemasaran produk dengan klaim kemampuan yang realistis — melindungi kepercayaan penjual dan konsumen.",
    },
  },
  {
    slug: "embedded-adoption-and-sustainment",
    title: "Adopsi Tersemat & Sustainment",
    description:
      "Mengintegrasikan adopsi ke cara organisasi benar-benar berjalan — kebiasaan manajer, forum operasional, dan siklus pembelajaran agar penggunaan tidak runtuh saat tim program mundur.",
    detail:
      "Tim program pada akhirnya turun; norma operasi harus membawa adopsi ke depan. Kami menanamkan ekspektasi ke dalam percakapan kinerja, tinjauan operasional, dan siklus pembelajaran sehingga penggunaan AI diperkuat manajer dan rekan, bukan hanya komunikasi pusat. Sustainment dirancang sebagai serah terima, bukan pikiran belakangan.",
    bullets: [
      "Menanamkan adopsi ke ritme dan tinjauan operasional",
      "Akuntabilitas manajer dan penguatan tingkat tim",
      "Perencanaan sustainment melampaui gelombang peluncuran awal",
    ],
    outcomes: [
      "Metrik adopsi yang tetap sehat setelah sumber daya program pusat berkurang",
      "Manajer yang memperlakukan kapabilitas AI sebagai bagian dari cara tim berjalan",
      "Kepemilikan jelas untuk penyegaran, pembaruan kebijakan, dan perubahan alat",
    ],
    engagementSnapshot:
      "Terbaik dimulai sebelum gelombang peluncuran akhir — kami membangun rencana serah terima dan mengujinya dengan subset fungsi sebelum transisi penuh.",
    clientExamples: [
      "Menanamkan tinjauan penggunaan AI ke tinjauan operasional bulanan bersama keselamatan dan mutu.",
      "Merotasi peran “juara AI” per departemen dengan alokasi waktu yang diakui HR.",
      "Menutup PMO pusat dengan pemilik terdokumentasi untuk prompt, model, dan pembaruan kebijakan.",
    ],
    indonesiaExample: {
      label: "Perusahaan energi/sumber daya dengan lokasi terpencil dan mitra JV",
      description:
        "Insinyur lapangan mengadopsi asisten selama gelombang peluncuran, namun penggunaan turun saat pelatih pusat pergi. Kami menanamkan segmen AI singkat ke rapat keselamatan dan produksi yang ada, menyelaraskan onboarding kontraktor dengan pagar yang sama dengan karyawan, dan menetapkan pemimpin sustainment regional di Balikpapan dan klaster lokasi — agar adopsi bertahan rotasi dan kompleksitas tata kelola joint venture.",
    },
  },
];

export function getServiceBySlugId(slug: string) {
  return servicesId.find((s) => s.slug === slug);
}

export function getHomeHighlightServicesId() {
  return homeHighlightedSlugs
    .map((slug) => getServiceBySlugId(slug))
    .filter((s): s is Service => s !== undefined);
}
