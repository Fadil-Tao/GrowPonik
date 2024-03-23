import LandingContent from './LandingContent';

export default function ContentContainer() {
    return (
        <div id='tentang' className='md:px-28 px-4'>
            <LandingContent
                title={'Belajar Berkebun bersama Growponik'}
                desc={
                    'Pemula dalam berkebun hidroponik ? Mari memulai langkah bersama Growponik, Kami akan membantumu belajar from zero to hero'
                }
            />
            <LandingContent
                title={'Belajar dari Profesional'}
                desc={
                    'Bingung mencari sumber belajar yang terpercaya ? Bersama kami, anda bisa belajar langsung bersama profesional'
                }
            />
            <LandingContent
                title={'Mudahkan Kehidupan Berkebunmu dengan IoT kit Kami'}
                desc={
                    'Lelah melakukan pemeliharaan yang intensif ? Buat hidup anda lebih mudah dengan IoT kit kami yang akan memudahkan anda mengawasi tanaman tanaman anda'
                }
            />
        </div>
    );
}
