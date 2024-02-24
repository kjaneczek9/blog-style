export default function Page() {
  return (
<div className="page-wrapper-home">
    <section className="flex justify-center items-center relative mb-[40]">
      <div className="flex flex-col justify-center items-center relative">
        {/* Blob */}
        <div className="blob w-80 h-80 absolute top-1/2 transform -translate-y-1/2 -translate-x-20"/>
        <h1 className="font-medium text-5xl mb-4 tracking-tighter pl-12">Celeste Bernstein</h1>
        <p className="pl-12">Actor. Writer. Singer. Producer.</p>

      </div>
      

      <div>
        <img src="/Headshot.jpg" alt="Description of the image" className="ml-10 mt-14 border-4 border-gray-300 rounded-lg" style={{ width: '500px', height: 'auto' }} />
      </div>
    </section>

</div> 

  );
}
