import MentorContent from '../components/_mentor-page/MentorContent';
import girlDesigner from '../assets/girlDesigner.png';
import OLimg from '../assets/OnlineLearning.png';
import MentorsContainer from '../components/_mentor-page/MentorsContainer';

export default function MentorshipPage() {
    return (
        <div className='md:px-28 px-2 py-10'>
            <MentorContent
                title={'Mengapa Mentorship Penting?'}
                img={OLimg}
                desc={
                    'Mentorship bukan hanya tentang belajar, tapi juga tentang pertumbuhan. Dengan memiliki seorang mentor, Anda memiliki seseorang yang dapat memberikan pandangan baru, bimbingan berharga, dan dukungan tanpa syarat. Mentorship membuka pintu untuk peluang baru, mempercepat pembelajaran, dan membantu Anda mencapai potensi penuh Anda.'
                }
            />
            <MentorContent
                title={'Percayakan Pada Mentor Kami'}
                img={girlDesigner}
                desc={
                    'Dalam perjalanan Anda belajar hidroponik, memiliki mentor yang berpengalaman adalah kunci kesuksesan. Kami hadir dengan tim mentor terbaik, siap membimbing Anda melalui setiap langkah dalam memahami dan menguasai seni bertani tanpa tanah. Dapatkan bimbingan langsung, pengetahuan mendalam, dan inspirasi dari para ahli kami. Bergabunglah dengan kami hari ini dan rasakan perbedaannya!'
                }
            />
            <MentorsContainer />
        </div>
    );
}
