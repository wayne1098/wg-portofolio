import profilepic from '../assets/profile-pic (13) - Salin.png';
import GitHub from '../assets/github.png';
// import Resume from '../assets/resume.png';


export const About = () => {
    return (
      <section id='About' className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">WAWAN GUNAWAN
          </h1>
          <p className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
           Junior Web Developer
            </p>
            <br />
            <a href='https://drive.google.com/file/d/1VeLV6kL2f49wWjuFb_wMTk6OaBpOTnqS/view?usp=sharing'>
                         <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Resume</button>
                         </a>        
          <br />
          <p className="mb-8 leading-relaxed">Saya adalah seorang junior fullstack web developer. Saya belajar mengenai teknologi MERN selama 5 bulan di Eduwork.id. Saya memiliki 1 project website ecommerce dengan menerapkan React JS untuk frontend, redux untuk state management, Node JS dan Express JS untuk backend serta MongoDB sebagai database.</p>
          <div className="flex justify-center">

          <a
                href="https://github.com/wayne1098"
                className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
              >
                <img className='w-20 mx-auto' src={GitHub} alt="Git icon" />
              </a>
              
                           </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={profilepic} />
        </div>
      </div>
    </section>
    );
  };