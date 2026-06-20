export const site = {
  name: 'Achmad Fauzi',
  /** Upload foto ke `public/profile.jpg` (format JPG/PNG, persegi, min. 400×400 px) */
  photo: {
    src: 'profile.jpg',
    alt: 'Foto Achmad Fauzi — Operational Excellence & System Development Specialist',
  },
  title: 'Operational Excellence & System Development Specialist',
  tagline:
    'Mengelola data operasional, kepatuhan regulasi, dan mengembangkan sistem web yang memberikan dampak nyata di lingkungan manufaktur.',
  email: 'achmadfauzi987@gmail.com',
  phone: '+62 85771813550',
  phoneHref: 'tel:+6285771813550',
  location: 'Bekasi, Jawa Barat, Indonesia',
  portfolio: 'https://ziidat.github.io',
  availability: 'PERUM PERURI · Manufaktur & Compliance',
  yearsExperience: '8+',
  about: [
    'Operational Excellence & System Development Specialist dengan pengalaman lebih dari 8 tahun dalam pengelolaan data operasional, pengendalian waste, kepatuhan regulasi, dan pengembangan sistem berbasis web di lingkungan manufaktur. Berpengalaman mengelola data menggunakan SAP ERP dan Microsoft Excel, serta menjadi representatif departemen dalam audit rutin Direktorat Jenderal Bea dan Cukai.',
    'Memiliki rekam jejak memimpin tim operasional, menjalankan program Kaizen dan Continuous Improvement, serta menerjemahkan kebutuhan bisnis menjadi solusi digital. Berhasil mengembangkan Smart Evaluation System (SIRINE) sebagai Full Stack Developer yang menghasilkan efisiensi operasional sebesar Rp4,7 miliar per tahun. Pemegang 2 Hak Kekayaan Intelektual (HAKI) yang berfokus pada inovasi proses dan peningkatan kinerja organisasi.',
  ],
  achievements: [
    'Berkontribusi pada 10 proyek inovasi dan Kaizen tentang transformasi digital, smart manufacturing, dan peningkatan kinerja operasional dengan berbagai penghargaan tingkat perusahaan (2019–2026).',
    'Mengimplementasikan berbagai inisiatif Kaizen dan Continuous Improvement untuk meningkatkan efisiensi operasional.',
    'Mengembangkan Smart Evaluation System (SIRINE) yang menghasilkan efisiensi operasional sebesar Rp4,7 miliar per tahun.',
    'Memperoleh 2 Hak Kekayaan Intelektual (HAKI) dari inovasi yang diterapkan dalam proses bisnis perusahaan.',
  ],
  education: {
    school: 'Universitas Pelita Bangsa',
    degree: 'Teknik Informatika',
    gpa: 'IPK 3.34',
    period: '2017 — 2021',
  },
  languages: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/ziidat', icon: 'github' as const },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ziidat', icon: 'linkedin' as const },
    { label: 'Portfolio', href: 'https://ziidat.github.io', icon: 'portfolio' as const },
    { label: 'Instagram', href: 'https://instagram.com/ziidat', icon: 'instagram' as const },
    { label: 'Facebook', href: 'https://facebook.com/ziidat', icon: 'facebook' as const },
  ],
  nav: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Keahlian', href: '#keahlian' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Pengalaman', href: '#pengalaman' },
    { label: 'Sertifikasi', href: '#sertifikasi' },
    { label: 'Kontak', href: '#kontak' },
  ],
  skills: [
    {
      category: 'ERP & Data',
      items: ['SAP ERP', 'Microsoft Excel', 'Data Analysis'],
    },
    {
      category: 'Programming',
      items: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'Git'],
    },
    {
      category: 'Process Improvement',
      items: ['Kaizen', 'Continuous Improvement', 'Root Cause Analysis'],
    },
    {
      category: 'Compliance',
      items: ['Regulatory Compliance', 'Audit Preparation'],
    },
  ],
  projects: [
    {
      title: 'Sistem Scan Barcode Pengelolaan HCTS (Hasil Cetak Tidak Sempurna) Pita Cukai',
      role: 'Creator and Administrator',
      description:
        'Sistem scan barcode pengelolaan hasil kemas harian (HCTS) pita cukai berbasis Microsoft Excel dengan memanfaatkan rumus Excel, scan dan data muncul otomatis',
      highlights: [
        'Merancang sistem scan barcode pengelolaan hasil kemas harian (HCTS) pita cukai berbasis Microsoft Excel.',
        'Basis data master HCTS menggunakan data tarikan dari SAP.',
        'Menggunakan rumus VLOOKUP, XLOOKUP, INDEX MATCH, IF dan rumus Excel lainnya.',
      ],
      tags: ['Microsoft Excel', 'VLOOKUP', 'XLOOKUP', 'INDEX MATCH', 'SAP'],
      href: null,
      live: null,
      featured: true,
      impact: 'IAKA 2019 - Gold Medal',
    },
    {
      title: 'Sistem Informasi Kinerja (SIRINE)',
      role: 'Full Stack Developer & Administrator',
      description:
        'Smart Evaluation System — sistem evaluasi kinerja berbasis web dengan dashboard monitoring, evaluasi otomatis, dan reporting.',
      highlights: [
        'Menganalisis kebutuhan bisnis dan merancang sistem evaluasi berbasis web.',
        'Mengembangkan backend Laravel dan frontend Livewire.',
        'Mengimplementasikan dashboard monitoring, evaluasi otomatis, dan reporting system.',
        'Menghasilkan efisiensi operasional sebesar Rp4,7 miliar per tahun.',
        'Mengelola pemeliharaan aplikasi, bug fixing, dan pengembangan fitur.',
        'Memberikan dukungan teknis dan pelatihan kepada pengguna sistem.',
      ],
      tags: ['Laravel', 'Livewire', 'MySQL', 'PHP'],
      href: null,
      live: null,
      featured: true,
      impact: 'HAKI 2023',
    },
    {
      title: 'Sistem Scan Hasil Kemas Harian',
      role: 'Full Stack Developer & Administrator',
      description:
        'Aplikasi scan barcode hasil kemas harian berbasis web dengan dashboard monitoring dan reporting system.',
      highlights: [
        'Merancang aplikasi scan barcode hasil kemas harian berbasis web.',
        'Mengembangkan backend Laravel dan frontend Livewire.',
        'Mengimplementasikan dashboard monitoring dan reporting system.',
        'Mengelola pemeliharaan aplikasi, bug fixing, dan pengembangan fitur.',
        'Memberikan dukungan teknis dan pelatihan kepada pengguna sistem.',
      ],
      tags: ['Laravel', 'Livewire', 'MySQL', 'PHP'],
      href: null,
      live: null,
      featured: false,
      impact: 'HAKI 2019',
    },
    {
      title: 'Inzitation.id',
      role: 'Digital Invitation Event',
      description:
        'Digital Invitation Event berbasis web Digunakan untuk membuat undangan digital untuk acara yang akan datang.',
      highlights: [
        'Merancang digital invitation event berbasis web.',
        'Mengembangkan frontend HTML, CSS, dan JavaScript.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      href: null,
      live: null,
      featured: false,
      impact: 'Bisnis Digital',
    },
  ],
  experience: [
    {
      role: 'Pengelolaan Hasil Cetak Tidak Sempurna Produk Pita Cukai',
      subtitle: 'Waste Data Management & Compliance Officer',
      company: 'PERUM PERURI',
      period: '2018 — Sekarang',
      highlights: [
        'Memastikan kesesuaian data dan fisik waste pada proses produksi pita cukai dengan volume produksi berskala nasional.',
        'Menjadi auditee utama dalam audit bulanan Direktorat Jenderal Bea dan Cukai — kesiapan data, dokumen, dan kesesuaian fisik terhadap sistem.',
        'Memimpin tim 8 orang dalam pengendalian data, verifikasi fisik, dan pelaksanaan program perbaikan berkelanjutan.',
        'Berkontribusi pada proyek digitalisasi proses bisnis yang meningkatkan akurasi data, efisiensi operasional, dan pengambilan keputusan berbasis data.',
      ],
    },
    {
      role: 'Merchandiser Display',
      subtitle: 'Marketing Division',
      company: 'MILAN KERAMIK',
      period: '2016 — 2017',
      highlights: [
        'Menyiapkan, mengirim, dan memasang display keramik di toko dan pameran keramik.',
      ],
    },
    {
      role: 'Packer',
      subtitle: 'Minuman Kaleng Production',
      company: 'PT SINDE BUDI SENTOSA',
      period: '2015 — 2016',
      highlights: [
        'Operator mesin pengemas minuman kaleng',
        'Mengoperasikan dan memelihara mesin pengemas untuk memastikan kualitas dan efisiensi proses produksi.',
        'Mengoperasikan dan memelihara forklift untuk memastikan keselamatan dan efisiensi proses produksi.',
      ],
    },
  ],
  innovationAwards: [
    {
      event: 'IAKA',
      year: '2026',
      project: 'Integrated Counting Data Pita Cukai',
      description: 'Sistem integrasi data pita cukai yang memungkinkan pengelolaan data pita cukai secara efisien dan akurat.',
      result: 'Ongoing',
    },
    {
      event: 'IAKA',
      year: '2024',
      project: 'Smart Factory Produk Pita Cukai',
      description: 'Sistem smart factory produk pita cukai yang memungkinkan pengelolaan produk pita cukai secara efisien dan akurat.',
      result: 'Bronze',
    },
    {
      event: 'IAKA',
      year: '2023',
      project: 'Smart Evaluation System (SIRINE)',
      description: 'Sistem evaluasi kinerja yang memungkinkan pengelolaan kinerja secara efisien dan akurat.',
      result: '2nd Runner Up',
    },
    {
      event: 'IAKA',
      year: '2022',
      project: 'Sistem Informasi Kinerja (SIRINE)',
      description: 'Sistem informasi kinerja yang memungkinkan pengelolaan kinerja secara efisien dan akurat.',
      result: 'Gold',
    },
    {
      event: 'IAKA',
      year: '2022',
      project: 'Aligator Labeling Generator',
      description: 'Sistem labeling generator yang memungkinkan pengelolaan labeling secara efisien dan akurat.',
      result: 'Silver',
    },
    {
      event: 'IAKA',
      year: '2022',
      project: 'Tjapri Peruri Marketplace',
      description: 'Sistem tjapri peruri marketplace yang memungkinkan pengelolaan marketplace secara efisien dan akurat.',
      result: 'Participant',
    },
    {
      event: 'IAKA',
      year: '2022',
      project: 'Efisiensi Bahan Penunjang Menggunakan Limbah',
      description: 'Sistem efisiensi bahan penunjang menggunakan limbah yang memungkinkan pengelolaan bahan penunjang menggunakan limbah secara efisien dan akurat.',
      result: 'Silver',
    },
    {
      event: 'Innovation Award',
      year: '2020',
      project: 'Sistem Scan Produksi Harian',
      description: 'Sistem scan produksi harian yang memungkinkan pengelolaan produksi harian secara efisien dan akurat.',
      result: 'Participant',
    },
    {
      event: 'Innovation Award',
      year: '2019',
      project: 'Sistem Scan Barcode HCTS',
      description: 'Sistem scan barcode hcts yang memungkinkan pengelolaan barcode hcts secara efisien dan akurat.',
      result: 'Gold',
    },
    {
      event: 'PSS GKM',
      year: '2019',
      project: 'Digitalisasi Hasil Produksi',
      description: 'Sistem digitalisasi hasil produksi yang memungkinkan pengelolaan hasil produksi secara efisien dan akurat.',
      result: 'Bronze',
    },
  ],
  certifications: [
    'Certified Secure Computer User (CSCU) – EC-Council',
    'PERURI Digital Innovation Program Participant',
    'Innovation & Kaizen Award Recipient (2019–2026)',
  ],
  intellectualProperty: [
    {
      title: 'Sistem Informasi Kinerja (SIRINE)',
      type: 'Hak Cipta Aplikasi',
      year: '2023',
    },
    {
      title: 'Aplikasi Scan Barcode HCTS Pita Cukai',
      type: 'Hak Cipta Sistem Informasi',
      year: '2019',
    },
  ],
  /** Letakkan file gambar di `public/certificates/` */
  certificationGallery: [
    {
      title: 'Certified Secure Computer User (CSCU) – EC-Council',
      image: 'certificates/Certificate1.JPG',
    },
    {
      title: 'PERURI Innovation Award 2019',
      image: 'certificates/Certificate2.jpg',
    },
    {
      title: 'Peruri Digital Inovator Program Participant',
      image: 'certificates/Certificate3.JPG',
    },
    {
      title: 'Peruri Digital Inovator Program Participant',
      image: 'certificates/Certificate4.JPG',
    },
  ],
  stats: [
    { value: '8+', label: 'Tahun pengalaman' },
    { value: '10', label: 'Proyek inovasi & Kaizen' },
    { value: 'Rp4,7M', label: 'Efisiensi/tahun (SIRINE)' },
    { value: '2', label: 'HAKI terdaftar' },
  ],
} as const;
