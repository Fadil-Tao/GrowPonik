import PriceCard from './PriceCard';

export default function PricesContainer() {
    return (
        <div className='flex justify-evenly flex-wrap items-center my-10'>
            <PriceCard>
                <li>Akses Dashboard</li>
                <li>Akses Materi Pengantar</li>
                <li>Mentoring 3 jam perminggu</li>
                <li>IoT kit menggunakan Arduino</li>
            </PriceCard>
            <PriceCard>
                <li>Setup Kebun Hidroponik (Termasuk benih)</li>
                <li>Akses Materi Pengantar dan lanjutan</li>
                <li>Akses Mentoring Selamanya</li>
                <li>IoT kit menggunakan Arduino</li>
                <li>Free ikan mas jika mempunyai kolam</li>
            </PriceCard>
            <PriceCard>
                <li>Preview learning material</li>
                <li>IoT introduction</li>
                <li>Mentorship trial</li>
            </PriceCard>
        </div>
    );
}
