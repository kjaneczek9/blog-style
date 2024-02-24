export default function Page() {
  return (
    <div className="page-wrapper">
    <section className="flex justify-center mt-[40] mb-[20] border-12">
        <div className="mt-10">
          <h1 className="font-medium text-5xl mb-[10] tracking-tighter pl-11">About</h1>
        </div>
        </section>
        
        <section className="flex justify-center items-center relative">
          <div>
            <img src="/image2.png" className="ml-10 border-4 border-gray-300 rounded-lg" style={{ width: '400px', height: 'auto' }} />
          </div>
          
          <div className="flex flex-col justify-center items-center relative">
            <p className="pl-12 ml-[90]">Hi! I'm Celeste.</p>
          </div>

          <div className="mb-[30]">
            <img src="/image1.png" className="ml-10 border-4 border-gray-300 rounded-lg" style={{ width: '400px', height: 'auto' }} />
          </div>

    </section>
    </div>
  );
}