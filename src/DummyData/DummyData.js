import Pengenalanimg from '../assets/Pengenalan.png';
import Method from '../assets/Method.png';
import wickImg from '../assets/Img2.png';
import Blogimg1 from '../assets/Blogimg1.png';
import Blogimg2 from '../assets/Blogimg2.png';
import Blogimg3 from '../assets/Blogimg3.png';

export const pengenalan = [
    {
        title: 'Pengenalan Hidroponik',
        desc: 'Topik ini berisi mengenai pengenalan hidroponik, Manfaat Hidroponik, dan jenis tanaman hidroponik',
        to: 'introduction',
        img: Pengenalanimg,
    },
];

export const metode = [
    {
        title: 'Metode Penanaman dengan Hidroponik',
        desc: 'Topik ini berisi mengenai berbagai macam teknik penanaman dengan Hidroponik.',
        to: 'method',
        img: Method,
    },
    {
        title: 'Menanam dengan teknik Wick System',
        desc: 'Topik ini membahas suatu teknik penanaman hidroponik yang bernama wick system.',
        to: 'wicksystem',
        img: wickImg,
    },
]

export const pengelolaan = [
    {
        title:"Pemeriksaan dan Persiapan Tanah serta Air",
        desc:"Topik Ini membahas tentang bagaimana langkah tepat untuk menentukan jenis tanah dan air yang tepat untuk hidroponik",
        to:'inspection',
        img:wickImg
    }
]

export const blogData = [
    {
        img: Blogimg1,
        title: 'Hidroponik di mata guru besar teknik pangan',
        desc: 'Dilihat dari perspektif seorang guru besar teknik pangan, hidroponik muncul sebagai pendekatan yang menjanjikan dalam memperkuat ketahanan pangan, meningkatkan kualitas produk pangan, dan memberikan kontribusi terhadap inovasi dalam pengembangan sistem pertanian yang berkelanjutan.',
    },
    {
        img: Blogimg2,
        title: 'Prospek Hidroponik dallam 10 tahun ke depan',
        desc: 'Dengan perkembangan teknologi dan kesadaran akan pentingnya pertanian yang berkelanjutan, prospek hidroponik dalam 10 tahun ke depan menjanjikan inovasi yang lebih maju, penerapan yang lebih luas, dan kontribusi yang signifikan terhadap pemenuhan kebutuhan pangan dunia.',
    },
    {
        img: Blogimg3,
        title: 'Sejarah Hidroponik sampai Sekarang',
        desc: 'Sejak penemuan awalnya pada abad ke-17 hingga perkembangan teknologi modern saat ini, sejarah hidroponik mencerminkan evolusi yang luar biasa dalam pertanian tanpa tanah yang semakin penting dalam konteks pertanian berkelanjutan dan pemanfaatan ruang terbatas.',
    },
];
