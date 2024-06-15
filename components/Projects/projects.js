import Link from "next/link";
const projects = [
  {
    id: 1,
    title: "E-PPID Online",
    img: "./project1.png",
    desc: "The E-PPID Online application makes it easier for the public to access public information transparently and quickly.",
    link: "#"
  },
  {
    id: 2,
    title: "Application for Cooperations",
    img: "./project2.jpeg",
    desc: 'This application is designed to facilitate the process of applying for and receiving cooperation efficiently.',
    link: "#"
  },
  {
    id: 3,
    title: "Website Admin Portal IMAKOM",
    img: "./project3.png",
    desc: 'Website Admin Portal is a comprehensive solution for more effective administration management.',
    link: "#"
  },
  {
    id: 4,
    title: "Aplication of E-ARCHIEVE ONLINE",
    img: "./project4.png",
    desc: ' The E-ARCHIEVE ONLINE application offers a digital solution for efficient document archiving.',
    link: "#"
  },
  {
    id: 5,
    title: "Application of E-ADMISSION ONLINE",
    img: "./project5.png",
    desc:'This system is specifically designed to facilitate the process of accepting new students at the school.',
    link: "#"
  },
  {
    id: 6,
    title: "E-Commerce Nanshop",
    img: "./project6.png",
    desc:'This application is designed to sell products online in an efficient way.',
    link: "https://ahmadfrnando.github.io/ecommerce/"
  },
  {
    id: 7,
    title: "Neighborgood",
    img: "./project7.png",
    desc:'This application is designed to make profile company.',
    link: "https://ahmadfrnando.github.io/landing-page/"
  },
]

export default function ProjectSection() {
    return (
        <section id="projects" className="max-w-screen">
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center px-6 md:px-40 py-32 space-y-10">
          <h1 className="md:text-5xl text-4xl font-black uppercase">Projects</h1>
          <div className="grid items-center justify-center md:grid-cols-3 gap-10" >
            {projects.map((item) => (
            <Link href={item.link} target="_blank" key={item.id} className="max-w-sm flex flex-col bg-hitamkedua cursor-pointer hover:bg-orange/80 transition-all rounded-xl shadow h-96">
              <div className='h-56 bg-cover bg-center rounded-t-xl' style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="p-5 ">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <p className="">{item.desc}</p>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </section>
    );
}