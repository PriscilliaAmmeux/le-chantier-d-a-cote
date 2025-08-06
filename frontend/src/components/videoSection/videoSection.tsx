import SubSubtitle from "../../ui/subSubtitle/subSubtitle";
import "./VideoSection.css";

interface VideoData {
  id: string;
  title: string;
  subtitle: string;
}

interface VideoSectionProps {
  videos: VideoData[];
}

export default function VideoSection({ videos }: VideoSectionProps) {
  return (
    <div className="videos-grid">
      {videos.map((video) => (
        <section key={video.id} className="video-item">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <SubSubtitle subSubtitle={video.subtitle} />
        </section>
      ))}
    </div>
  );
}
