import Image from 'next/image';

const logo = [
  {
    link: './html.png',
    title: 'HTML',
  },
  {
    link: './css.png',
    title: 'css',
  },
  {
    link: './js.png',
    title: 'js',
  },
  {
    link: './php.png',
    title: 'php',
  },
  {
    link: './mysql.png',
    title: 'mysql',
  },
  {
    link: './reactjs.png',
    title: 'reactjs',
  },
  {
    link: './nextjs.png',
    title: 'nextjs',
  },
  {
    link: './vuejs.png',
    title: 'vuejs',
  },
  {
    link: './laravel.png',
    title: 'laravel',
  },
];

export default function SkillSection() {
  return (
    <section className='py-10 max-w-screen'>
      <div data-aos="fade-right" className="grid items-center justify-center grid-cols-3 md:grid-cols-9 gap-6 py-10 md:mx-16" >
        {logo.map((item) => (
          <div key={item.title} className="w-full cursor-pointer">
            <img src={item.link} width={100} height={100} alt={item.title} className='hover:-translate-y-1 hover:scale-110 transition-all duration-200'/>
          </div>
        ))}
      </div>
    </section>
  
  );
}
