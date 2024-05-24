import VideoCard from "./VideoCard";
import ChannelCard from "../Channels/ChannelCard";
import PropTypes from "prop-types";

function Videos({ videos }) {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-10">
        {videos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard details={item} />}
            {item.id.playlistId && <ChannelCard details={item} />}
          </div>
        ))}
      </div>
    </div>
  );
}

Videos.propTypes = {
  videos: PropTypes.array,
};

export default Videos;
