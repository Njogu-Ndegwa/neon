import Image from 'next/image'
import TestimonialsImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialsImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialsImage03 from '@/public/images/testimonial-03.jpg'
import TestimonialsImage04 from '@/public/images/testimonial-04.jpg'
import TestimonialsImage05 from '@/public/images/testimonial-05.jpg'
import TestimonialsImage06 from '@/public/images/testimonial-06.jpg'
import TestimonialsImage07 from '@/public/images/testimonial-07.jpg'
import TestimonialsImage08 from '@/public/images/testimonial-08.jpg'
import TestimonialsImage09 from '@/public/images/testimonial-09.jpg'

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Bg gradient: top */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg gradient: bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-[15rem] pointer-events-none z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans">Testimonials</h2>
          </div>
          {/* Testimonials container */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start" data-aos-id-testimonials>
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage01} width={48} height={48} alt="Testimonial 01" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The hands-on experience I gained, especially in web development, was instrumental in helping me land my first job as a front-end developer.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Sarah Kimani</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Web Development Graduate</a>
              </footer>
            </article>
            {/* 2nd Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="100">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage02} width={48} height={48} alt="Testimonial 02" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">I came into the program with zero tech experience, but the personalized learning paths and constant support from instructors made all the difference. Now, I’m developing mobile apps for clients worldwide.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Mark Kimani</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Mobile App Development Graduate</a>
              </footer>
            </article>
            {/* 3rd Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="200">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage03} width={48} height={48} alt="Testimonial 03" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The real-world projects here mirror what I do in my job as a data analyst. I was ready to hit the ground running!</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">David Maina</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Data Science Graduate</a>
              </footer>
            </article>
            {/* 4th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="300">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage04} width={48} height={48} alt="Testimonial 04" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The tech school offers more than just coding skills—it teaches you how to think like a developer. The problem-solving mindset I developed here has been invaluable in my day-to-day work.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Andrew Mueni</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0"> Software Engineering Graduate</a>
              </footer>
            </article>
            {/* 5th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="400">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage05} width={48} height={48} alt="Testimonial 05" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The instructors were always available to answer questions, and their real-world insights made the lessons so much more impactful.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Rebecca Wanjiru</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">DevOps Engineering Graduate</a>
              </footer>
            </article>
            {/* 6th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="500">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage06} width={48} height={48} alt="Testimonial 06" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The curriculum focus on both speed and quality gave me confidence to work on larger, scalable projects.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Jessica Mwende</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Data Science Graduate</a>
              </footer>
            </article>
            {/* 7th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="600">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage07} width={48} height={48} alt="Testimonial 07" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">The structured learning paths were a game-changer. I knew exactly what to focus on in each stage of the course, and by the end, I had a portfolio of projects that impressed potential employers.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Eliud Chege</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Mobile App Development Graduate</a>
              </footer>
            </article>
            {/* 8th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="700">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage08} width={48} height={48} alt="Testimonial 08" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">I went from novice to leading tech projects thanks to the school's practical, real-world training.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Andrew Rotich</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Web Development Graduate</a>
              </footer>
            </article>
            {/* 9th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="800">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src={TestimonialsImage09} width={48} height={48} alt="Testimonial 09" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Expert instructor feedback made learning smooth and prepared me for real-world challenges. I now feel ready for anything in the tech industry.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Kevin Kibwasi</span> - <a className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Full-Stack Development Graduate</a>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}