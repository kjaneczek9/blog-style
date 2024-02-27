import VideoRow from 'app/components/video_row'

const width = 500;
const height = 400;

const videoRow1 = [
  { videoId: 'WMlixkoMXJA', height:height, width:width },
  { videoId: 'aVaTTCYHAF8', height: height, width:width},
];

const videoRow2 = [
  { videoId: '20lEO-4ePLI', height: height, width:width},
  { videoId: 'bYl-0wzJ0pw', height: height, width:width},
]


export default function Page() {
  return (
    <section className="relative"> 
      <div className="flex-col justify-center items-center mt-20 mb-20 page-wrapper-gallery">
        <VideoRow videos={videoRow1} />
        <VideoRow videos={videoRow2} />
      </div>
      {/* <div className="grid-blob w-80 h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
    </section>
  );
}
