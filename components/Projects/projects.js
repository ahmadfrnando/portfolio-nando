const projects = [
  {
    id: 1,
    title: "Website PPID Pengadilan Negeri Medan",
    img: "./project1.png",
  },
  {
    id: 2,
    title: "Website Penerima Kerjasama UNPAB",
    img: "./project2.jpeg",
  },
  {
    id: 3,
    title: "Website Admin Portal IMAKOM UNPAB",
    img: "./project3.png",
  }
]

export default function ProjectSection() {
    return (
        <section id="projects" className="max-w-screen">
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center px-6 md:px-40 py-32 space-y-10">
          <h1 className="md:text-5xl text-4xl font-black uppercase">Projects</h1>
          <div className="grid items-center justify-center md:grid-cols-3 gap-10" >
            {projects.map((item) => (
            <div key={item.id} className="max-w-sm bg-hitamkedua cursor-pointer hover:bg-orange/80 transition-all rounded-xl shadow h-96">
              <div className='h-56 bg-cover bg-center rounded-t-xl' style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    );
}