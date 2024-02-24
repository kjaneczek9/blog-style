import Component from '../../components/pdf_viewer';
import SocialBar from '../../components/social_bar'

export default function Page() {
  return (
    <div className="page-wrapper-about">
    <section className="flex justify-center mt-[40] mb-[20] border-12">
        <div className="mt-10">
          <div className="flex justify-center items-center relative">
          < Component thumbnailPath='/english.jpg' title='English Resume' pdfPath='/english.pdf'/>
          < Component thumbnailPath='/french.jpg' title='Français CV' pdfPath='french.pdf'/>
          </div>
        </div>
    </section>
    </div>
  );
}
