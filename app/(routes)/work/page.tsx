import PageLink from '../../components/work_pagelink'


export default function Page() {
  return (
    <section className='relative flex justify-center items-center page-wrapper-home'>
      <div className="flex-col justify-center items-center">
        <PageLink thumbnailPath='/produce.png' title='Producing' pageLink='/work/producing'/>
        <PageLink thumbnailPath='/seagull3.png' title='Acting' pageLink='/work/acting'/>
        <PageLink thumbnailPath='/music.png' title='Music' pageLink='/work/music'/>
      </div>
    </section>
  );
}
