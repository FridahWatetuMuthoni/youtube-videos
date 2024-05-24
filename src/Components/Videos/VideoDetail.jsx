import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import Videos from "./Videos";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const {
    error,
    isPending,
    data: videos,
  } = useQuery({
    queryKey: ["images", id],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      const data = response.data;
      return data.items;
    },
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(response.data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id, setVideoDetail]);

  if (isPending || !videoDetail?.snippet) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="flex w-full p-3 gap-4 items-center flex-col">
      <div className="flex justify-center w-full mx-auto h-[88vh] md:h-[83vh] shadow-lg rounded-lg ">
        <div className=" w-full h-[65vh]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
            width="100%"
            height="100%"
          />
          <div className="px-3 py-3">
            <p className="my-2 text-sm">{title}</p>
            <Link
              to={`/channel/${channelId}`}
              className="text-sm hover:text-indigo-600 flex items-center gap-2"
            >
              {channelTitle}
              <FaCheckCircle />
            </Link>
            <section className="text-sm text-indigo-500 flex font-semibold gap-5 mt-3">
              <p>{parseInt(viewCount).toLocaleString()} Views</p>
              <p>{parseInt(likeCount).toLocaleString()} Likes</p>
            </section>
          </div>
        </div>
      </div>

      <section className="mt-2">
        {videos?.length > 0 ? <Videos videos={videos} /> : null}
      </section>
    </div>
  );
}

export default VideoDetail;
