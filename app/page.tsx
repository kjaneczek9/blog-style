export default function Page() {
  return (
    <section className="flex">
      <div className="flex flex-col mr-auto">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Celeste Bernstein</h1>
      <p className="prose prose-neutral dark:prose-invert">
        Blah.
      </p>
      </div>
      <div>
        <img src="/Headshot.jpg" alt="Description of the image" className="ml-4"
          style={{ width: '400px', height: 'auto' }} />
      </div>
    </section>
  );
}
