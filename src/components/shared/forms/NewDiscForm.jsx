export default function NewDiscussionForms() {
    return (
        <div className=' bg-white w-[30rem] font-poppins rounded-md p-6'>
            <h2 className='text-2xl font-semibold'>Buat Diskusi Baru</h2>
            <form action=''>
                <div className='grid'>
                    <label htmlFor='opsi'>Jenis Diskusi</label>
                    <select name='opsi' id='opsi' className='px-2'>
                        <option value=''>Umum</option>
                        <option value=''>Teknikal</option>
                        <option value=''>Pengetahuan</option>
                        <option value=''>Sharing</option>
                    </select>
                </div>
                <div className='grid'>
                    <label htmlFor='judul'>Judul Diskusi</label>
                    <input
                        type='text'
                        className='border-2 rounded-md p-2'
                        placeholder='Judul Pertanyaan Anda'
                    />
                </div>
                <div>
                    <label htmlFor='deskripsi'>Deskripsi Diskusi</label>
                    <textarea
                        name='deskripsi'
                        id=''
                        cols='30'
                        rows='10'
                        placeholder='Deskripsi Diskusi anda disini'
                        className='border-2'
                    ></textarea>
                </div>
                <div className='flex justify-end my-2'>
                    <button
                        type='submit'
                        className=' bg-primaryGreen rounded-lg text-white p-3'
                    >
                        Buat Diskusi
                    </button>
                </div>
            </form>
        </div>
    );
}
