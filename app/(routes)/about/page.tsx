import PdfView from '../../components/pdf_viewer';
import SocialBar from '../../components/social_bar'
import {aboutMeParagraphEnglish, aboutMeParagraphFrench} from './constants';

export default function Page() {
  return (
    <div className="page-wrapper-about">
    <section className="flex mt-[40] mb-[20] border-12">

        <div className="flex translate-y-20">
          <div className="flex-col ml-5 mt-5">
            < PdfView thumbnailPath='/english.jpg' title='English Resume' pdfPath='/english.pdf'/>
            <p className='mb-20'></p>
            < PdfView thumbnailPath='/french.jpg' title='Français CV' pdfPath='french.pdf'/>
          </div>
        </div>


        <div className="gradient-div flex-col items-top justify-left transform translate-x-1/5 mt-20" style={{ width: '750px'}}>
          
        <div className="flex flex-col items-left relative">
          <div className="blob absolute transform translate-y-5 ml-5" style={{ width: '170px', height: '170px'}}/>
          <h1 className="font-medium text-5xl mb-4 mt-20 tracking-tighter pl-12">Hey, I'm Celeste</h1>
        </div>


          <div className='flex-col m-20'>
            <p style={{ wordWrap: 'break-word' }}>{aboutMeParagraphEnglish}</p>
          </div>
          <div className='flex-col m-20'>
            <h2>Salut, je suis Celeste</h2>
            <p style={{ wordWrap: 'break-word' }}>{aboutMeParagraphFrench}</p>
          </div>
        </div>
    


    </section>
    </div>
  );
}
