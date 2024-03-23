import LandingContent from './LandingContent';
import CommunityImg from '../../assets/Community.png';
import Content1 from '../../assets/Content1.png';
import Content2 from '../../assets/Content2.png';

export default function ContentContainer() {
    return (
        <div id='tentang' className='md:px-28 px-4'>
            <LandingContent
                title='Rumah Bagi Para Pemula'
                desc='Baru dalam dunia pertanian khsususnya hidroponik? Tenang saja ! Kami menyediakan bimbingan suportif untuk anda! Dimulai dengan materi hingga video praktek'
                img={Content1}
            />
            <LandingContent
                title='Dipandu oleh Profesional'
                desc='Dari materi belajar dunia nyata hingga dukungan mentorship , dukungan kami lengkap dan nyata'
                img={Content2}
            />
            <LandingContent
                title='Jelajahi Komunitas  Petani Yang Luas'
                desc='Dimana para petani dari berbagai kalangan berbagi cerita , pengetahuan dan banyak lagi! '
                img={CommunityImg}
            />
        </div>
    );
}
