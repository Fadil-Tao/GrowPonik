import PriceCard from './PriceCard';

export default function PricesContainer() {
    return (
        <div className='flex justify-evenly flex-wrap items-center my-10'>
            <PriceCard
                title={'Lite'}
                desc={
                    'Untuk kalian yang sudah punya kebun hidroponik, paket ini hanya berisi IoT kit dan perlengkapannya'
                }
                price={'Rp1.000.000'}
            >
                <li>Akses Dashboard</li>
                <li>Akses Materi Pengantar</li>
                <li>Mentoring 3 jam perminggu</li>
                <li>IoT kit menggunakan Arduino</li>
            </PriceCard>
            <PriceCard
                title={'Komplit'}
                desc={
                    'Untuk kalian yang ingin memulai, paket ini adalah paket lengkap'
                }
                price={'Rp2.000.000'}
            >
                <li>Setup Kebun Hidroponik (Termasuk benih)</li>
                <li>Akses Materi Pengantar dan lanjutan</li>
                <li>Akses Mentoring Selamanya</li>
                <li>IoT kit menggunakan Arduino</li>
                <li>Free ikan mas jika mempunyai kolam</li>
            </PriceCard>
            <PriceCard
                title={'Free'}
                desc={'Untuk yang ingin mencari tau terlebih dahulu'}
                price={'Gratis'}
            >
                <li>Preview learning material</li>
                <li>IoT introduction</li>
                <li>Mentorship trial</li>
            </PriceCard>
        </div>
    );
}
