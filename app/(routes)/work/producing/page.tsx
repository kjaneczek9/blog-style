import VideoRow from 'app/components/video_row'

const width = 500;
const height = 400;

const videoRow1 = [
  { videoId: 'NyWSB6lXXf8', height:height, width:width },
  { videoId: 'LtAXgCr0IYo', height: height, width:width},
];

const videoRow2 = [
  { videoId: '20lEO-4ePLI', height: height, width:width},
  { videoId: 'bYl-0wzJ0pw', height: height, width:width},
]


export default function Page() {
  return (
    <section className="flex-col justify-center items-center mt-20 mb-20 page-wrapper-gallery">
      <VideoRow  videos={videoRow1}/>
      <VideoRow  videos={videoRow2}/>
    </section>
  );
}