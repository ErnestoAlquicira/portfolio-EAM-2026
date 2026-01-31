export default function Postproduction() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative h-screen w-full overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="src/assets/img/IM4.webm"
    autoPlay
    muted
    loop
    playsInline
  />

  <div className="absolute inset-0 bg-black/30" />

  <a
    href="https://vimeo.com/ernestoalquicira"
    target="_blank"
    rel="noreferrer"
    className="relative z-10 h-full flex items-center justify-center"
  >
    <span className="text-lg tracking-wide border border-white/50 px-8 py-4 hover:bg-white hover:text-black transition">
      View on Vimeo
    </span>
  </a>
</section>

    </div>
  )
}
