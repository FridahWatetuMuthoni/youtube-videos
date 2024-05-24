import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../Utils/constants";

function ChannelCard({ details }) {
  return (
    <div className="rounded overflow-hidden shadow-lg ">
      <Link to={`/channel/${details?.id?.channelId}`}>
        <div className="relative">
          <img
            className="w-full h-52 object-cover "
            src={
              details?.snippet?.thumbnails?.high?.url ||
              details?.snippet?.thumbnails?.medium?.url ||
              details?.snippet?.thumbnails?.default?.url ||
              demoProfilePicture
            }
            alt={details?.snippet?.title}
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
      </Link>

      <div className="px-1 py-4">
        <p className="my-2 text-sm">{details?.snippet?.title}</p>
        <p className="my-2 text-sm text-muted">
          {details?.snippet?.channelTitle} Channel
        </p>
        <Link
          to={
            details?.channelId
              ? `channel/${details?.snippet?.channelId}`
              : demoChannelUrl
          }
          className="text-sm hover:text-indigo-600 flex items-center gap-2"
        >
          {details?.snippet?.channelTitle || demoChannelTitle}
          <FaCheckCircle />
        </Link>
      </div>
    </div>
  );
}

ChannelCard.propTypes = {
  details: PropTypes.object,
};

export default ChannelCard;
