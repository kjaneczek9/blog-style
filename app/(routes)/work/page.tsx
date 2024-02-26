import PageLink from '../../components/work_pagelink'


export default function Page() {
  return (
    <section className="flex justify-center items-center mb-20 mt-40 page-wrapper-home">
      <PageLink thumbnailPath='/seagull3.png' title='Acting' pageLink='/work/acting'/>
      <PageLink thumbnailPath='/music.png' title='Music' pageLink='/work/music'/>
      <PageLink thumbnailPath='/produce.png' title='Producing' pageLink='/work/producing'/>
    </section>
  );
}
