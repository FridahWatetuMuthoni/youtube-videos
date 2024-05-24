import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import {
  demoChannelTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
} from "../Utils/constants";

function VideoCard({ video }) {
  const {
    id: { videoId },
    snippet,
  } = video;
  return (
    <div className="rounded overflow-hidden shadow-2xl">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative">
          <img
            className="w-full h-52 object-cover"
            src={
              snippet?.thumbnails?.high?.url ||
              snippet?.thumbnails?.medium?.url ||
              snippet?.thumbnails?.default?.url
            }
            alt={snippet?.title}
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      </Link>

      <div className="px-1 py-4">
        <p className="my-2 text-sm">
          {snippet?.title.slice(0, 60) || demoVideoTitle}
        </p>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          className="text-sm hover:text-indigo-600 flex items-center gap-2"
        >
          {snippet?.channelTitle || demoChannelTitle}
          <FaCheckCircle />
        </Link>
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object,
};
export default VideoCard;
