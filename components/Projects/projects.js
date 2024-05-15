const projects = [
  {
    id: 1,
    title: "Aplikasi E-PPID Online",
    img: "./project1.png",
    desc: "Aplikasi E-PPID Online mempermudah masyarakat dalam mengakses informasi publik secara transparan dan cepat."
  },
  {
    id: 2,
    title: "Aplikasi Kerjasama",
    img: "./project2.jpeg",
    desc: 'Aplikasi ini dirancang untuk memfasilitasi proses pengajuan dan penerimaan kerjasama secara efisien. '
  },
  {
    id: 3,
    title: "Website Admin Portal",
    img: "./project3.png",
    desc: 'Website Admin Portal adalah solusi komprehensif untuk manajemen administrasi yang lebih efektif.'
  },
  {
    id: 4,
    title: "Aplikasi E-ARCHIEVE ONLINE",
    img: "./project4.png",
    desc: ' Aplikasi E-ARCHIEVE ONLINE menawarkan solusi digital untuk pengarsipan dokumen secara efisien.'
  },
  {
    id: 5,
    title: "Sistem Penerimaan Peserta Didik Baru Sekolah",
    img: "./project5.png",
    desc:'Sistem ini dirancang khusus untuk memudahkan proses penerimaan peserta didik baru di Sekolah.'
  },
]

export default function ProjectSection() {
    return (
        <section id="projects" className="max-w-screen">
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center px-6 md:px-40 py-32 space-y-10">
          <h1 className="md:text-5xl text-4xl font-black uppercase">Projects</h1>
          <div className="grid items-center justify-center md:grid-cols-3 gap-10" >
            {projects.map((item) => (
            <div key={item.id} className="max-w-sm flex flex-col bg-hitamkedua cursor-pointer hover:bg-orange/80 transition-all rounded-xl shadow h-96">
              <div className='h-56 bg-cover bg-center rounded-t-xl' style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="p-5 ">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="">{item.desc}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
}