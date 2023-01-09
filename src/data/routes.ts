const routes = [
  {
    title: 'Beranda',
    path: '/',
  },
  {
    title: 'Pemakaian Huruf',
    path: '/huruf',
    tree: [
      {
        title: 'Huruf Abjad',
        path: '/abjad',
      },
      {
        title: 'Huruf Vokal',
        path: '/vokal',
      },
      {
        title: 'Huruf Konsonan',
        path: '/konsonan',
      },
      {
        title: 'Huruf Diftong',
        path: '/diftong',
      },
      {
        title: 'Gabungan Huruf Konsonan',
        path: '/gabungan',
      },
      {
        title: 'Huruf Kapital',
        path: '/kapital',
      },
      {
        title: 'Huruf Miring',
        path: '/miring',
      },
      {
        title: 'Huruf Tebal',
        path: '/tebal',
      },
    ],
  },
  {
    title: 'Penulisan Kata',
    path: '/kata',
    tree: [
      {
        title: 'Kata Dasar',
        path: '/dasar',
      },
      {
        title: 'Kata Berimbuhan',
        path: '/berimbuhan',
      },
      {
        title: 'Bentuk Ulang',
        path: '/ulang',
      },
      {
        title: 'Gabungan Kata',
        path: '/gabungan',
      },
      {
        title: 'Pemenggalan Kata',
        path: '/pemenggalan',
      },
      {
        title: 'Kata Depan',
        path: '/depan',
      },
      {
        title: 'Partikel',
        path: '/partikel',
      },
      {
        title: 'Singkatan dan Akronim',
        path: '/singkatan',
      },
      {
        title: 'Angka dan Bilangan',
        path: '/angka',
      },
      {
        title: 'Kata Ganti',
        path: '/ganti',
      },
      {
        title: 'Kata Sandang',
        path: '/sandang',
      },
    ],
  },
  {
    title: 'Pemakaian Tanda Baca',
    path: '/tanda',
    tree: [
      {
        title: 'Tanda Titik (.)',
        path: '/titik',
      },
      {
        title: 'Tanda Koma (,)',
        path: '/koma',
      },
      {
        title: 'Tanda Titik Koma (;)',
        path: '/titik-koma',
      },
      {
        title: 'Tanda Titik Dua (:)',
        path: '/titik-dua',
      },
      {
        title: 'Tanda Hubung (-)',
        path: '/hubung',
      },
      {
        title: 'Tanda Pisah (—)',
        path: '/pisah',
      },
      {
        title: 'Tanda Tanya (?)',
        path: '/tanya',
      },
      {
        title: 'Tanda Seru (!)',
        path: '/seru',
      },
      {
        title: 'Tanda Elipsis (...)',
        path: '/elipsis',
      },
      {
        title: 'Tanda Petik ("...")',
        path: '/petik',
      },
      {
        title: "Tanda Petik Tunggal ('...')",
        path: '/petik-tunggal',
      },
      {
        title: 'Tanda Kurung ((...))',
        path: '/kurung',
      },
      {
        title: 'Tanda Kurung Siku ([...])',
        path: '/kurung-siku',
      },
      {
        title: 'Tanda Garis Miring (/)',
        path: '/garis-miring',
      },
      {
        title: "Tanda Penyingkat (')",
        path: '/penyingkat',
      },
    ],
  },
  {
    title: 'Penulisan Unsur Serapan',
    path: '/unsur-serapan',
  },
]

export default routes
