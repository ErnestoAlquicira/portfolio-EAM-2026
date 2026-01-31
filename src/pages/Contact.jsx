import profilepic from "../assets/img/profile.jpg"
export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">

          {/* Text column */}
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-light mb-8">
              Let’s work together
            </h1>

            <p className="text-lg leading-relaxed text-gray-700 max-w-xl mb-12">
              I design and build digital experiences with a focus on clarity,
              usability, and long-term value. My background spans design,
              frontend development, and work within regulated industries.
            </p>

            {/* Social links */}
            <div className="space-y-3 text-lg">
              <a
                href="mailto:ernestoa.madrazo@gmail.com"
                className="block hover:underline"
              >
                Email
              </a>
              <a
                href="https://github.com/ErnestoAlquicira"
                className="block hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/ernestoalquicira"
                className="block hover:underline"
              >
                LinkedIn
              </a>
            </div>

            {/* Client logos placeholder */}
          </div>

          {/* Image column */}
          <div className="md:col-span-2">
            <div className="">
               <img src={profilepic} alt="Experimental composition study" className="w-full rounded-lg mb-4" />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
