import img01 from "../assets/img/freelance/1.jpg"
import img02 from "../assets/img/freelance/2.jpg"
import img03 from "../assets/img/freelance/3.jpg"
import img04 from "../assets/img/freelance/4.jpg"
import img05 from "../assets/img/freelance/5.jpg"
import img06 from "../assets/img/freelance/6.jpg"
import img07 from "../assets/img/freelance/7.jpg"
import img08 from "../assets/img/freelance/8.jpg"
import img09 from "../assets/img/freelance/9.jpg"
import img10 from "../assets/img/freelance/10.jpg"
import img11 from "../assets/img/freelance/11.jpg"
export default function Freelance() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl md:text-5xl font-light mb-10">
          Freelance & Concepts
        </h1>

        <p className="text-lg leading-relaxed max-w-2xl">
          Independent visual work exploring typography, layout, motion, and
          narrative beyond client constraints.
        </p>
      </section>

      {/* Gallery placeholder */}
      <section className="max-w-6xl mx-auto px-6 pb-40">
       <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
  <div className="md:col-span-4">
  <img src={img01} alt="Concept visual identity study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Concept project exploring visual identity and motion.
  </p>
</div>
<div className="md:col-span-2">
  <img src={img02} alt="Experimental composition study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Experimental study focused on composition and balance.
  </p>
</div>
<div className="md:col-span-3">
  <img src={img03} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Editorial layout study exploring typography and hierarchy.
  </p>
</div>
<div className="md:col-span-3">
  <img src={img04} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Editorial layout study exploring typography and hierarchy.
  </p>
</div>
<div className="md:col-span-2">
  <img src={img05} alt="Experimental composition study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Experimental study focused on composition and balance.
  </p>
</div>
<div className="md:col-span-2">
<img src={img06} alt="Experimental composition study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Experimental study focused on composition and balance.
  </p>
</div>
<div className="md:col-span-2">
<img src={img07} alt="Experimental composition study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Experimental study focused on composition and balance.
  </p>
</div>
<div className="md:col-span-3">
  <img src={img08} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Editorial layout study exploring typography and hierarchy.
  </p>
</div>
<a
  href="https://www.behance.net/digjunkie"
  target="_blank"
  rel="noreferrer"
  className="md:col-span-3 group"
>
  <img
  src={img09}
  alt="Selected visual studies"
  className="w-full rounded-lg mb-4 group-hover:opacity-90 transition"
  loading="lazy"
/>
  <p className="text-sm leading-relaxed">
    Selected visual studies — extended work on Behance.
  </p>
</a>
<div className="md:col-span-4">
 <img src={img10} alt="Concept motion and identity study" className="w-full rounded-lg mb-4" />
  <p className="text-sm leading-relaxed">
    Concept project exploring visual identity and motion.
  </p>
</div>

<div className="md:col-span-2">
<img src={img11} alt="Experimental composition study" className="w-full rounded-lg mb-4" />

  <p className="text-sm leading-relaxed">
    Experimental study focused on composition and balance.
  </p>
</div>

</div>

      </section>
    </div>
  )
}
