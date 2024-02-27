import YouTubeVideo from "app/components/video_player";
import SpotifyProfile from "app/components/spotify";

export default function Page() {
  return (
    <section className="page-wrapper-music">
      <div className="flex justify-center">
      {/* <h1 className="mt-10 text-5xl font-bold" style={{ background: 'linear-gradient(45deg, #ff0000, #0000ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>friends of sage</h1> */}
      </div>
      <div className="flex flex-col mt-5 items-center justify-center">
        <YouTubeVideo videoId={'98NKBajbOxI'} width={600} height={300}/>
        <SpotifyProfile profileUrl="https://open.spotify.com/embed/artist/51sGbp7whonL3N5ZliectH" />
      </div>
    </section>
  );
}