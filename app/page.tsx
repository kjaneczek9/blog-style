export default function Page() {
  return (
    <div className="page-wrapper">
      <section className="flex relative">
        <div className="flex flex-col justify-center items-center z-10">
          {/* Pink circle background aligned with the text */}
          <div className="w-60 h-80 bg-pink rounded-full opacity-25 absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/5"></div>

          <h1 className="font-medium text-5xl mb-4 tracking-tighter">Celeste Bernstein</h1>
          <p className="prose prose-neutral dark:prose-invert">Blah blah blah blah.</p>
        </div>

        <div>
          <img src="/Headshot.jpg" alt="Description of the image" className="ml-4" style={{ width: '400px', height: 'auto' }} />
        </div>
      </section>
    </div>
  );
}
