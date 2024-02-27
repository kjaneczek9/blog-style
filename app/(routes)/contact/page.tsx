
export default function Page() {
  return (
    <div className="page-wrapper-about">
    <section className="flex ml-[40] border-12 justify-center">

        <div className="gradient-div flex-col items-top justify-center transform translate-y-1/2" style={{ width: '750px'}}>
          
          <div className="flex flex-col items-left relative">
            <div className="blob absolute transform translate-y-5 ml-5" style={{ width: '170px', height: '170px'}}/>
            <h1 className="font-medium text-5xl mb-4 mt-20 tracking-tighter pl-12">Celeste Bernstein</h1>
          </div>


            <div className='flex-col m-20'>
              <p style={{ wordWrap: 'break-word' }}>Email: </p>
            </div>
            <div className='flex-col m-20'>
              <p style={{ wordWrap: 'break-word' }}>Phone: </p>
            </div>
        </div>
    


    </section>
    </div>
  );
}