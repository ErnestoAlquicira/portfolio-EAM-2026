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
import img12 from "../assets/img/freelance/12.jpg"
import heroWeb from "../assets/img/webdesign/hero.jpg"
export default function Freelance() {
  return (
    <div className="bg-white text-black min-h-screen mt-20">

      {/* Gallery placeholder */}
      <section className="max-w-6xl mx-auto px-6 pb-40">
       <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

<div className="md:col-span-2">
  <img src={img01} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img02} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img03} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img04} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img08} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img09} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img10} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img11} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
</div>
<div className="md:col-span-2">
  <img src={img12} alt="Editorial layout study" className="w-full rounded-lg mb-4" />
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
</div>

      </section>
    </div>
  )
}
