import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import Videos from "../Videos/Videos";
import { FaCheckCircle } from "react-icons/fa";

function ChannelDetail() {
  let { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const {
    error,
    isPending,
    data: videos,
  } = useQuery({
    queryKey: ["images", id],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `search?channelId=${id}&part=snippet&order=date`
      );
      const data = response.data;
      return data.items;
    },
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `channels?part=snippet&id=${id}`
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
    snippet: { title, channelId, country, description },
    statistics: { viewCount, videoCount },
  } = videoDetail;

  id = id || channelId;

  return (
    <section>
      <section>
        <>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            rel="stylesheet"
          />
          <div className="antialiased ">
            <div className=" min-h-[40vh]  w-full lg:w-3/4 mx-auto p-8 flex items-center justify-center ">
              <div className="w-full rounded-lg overflow-hidden shadow-2xl ">
                <img
                  className="h-48 w-full object-cover object-end"
                  src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
                  alt="Home in Countryside"
                />
                <div className="p-6">
                  <div className="flex items-baseline">
                    <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                      {title}
                    </span>
                  </div>

                  <div className="px-3 py-3">
                    <Link
                      to={`/channel/${id}`}
                      className="text-sm hover:text-indigo-600 flex items-center gap-2"
                    >
                      {title}
                      <FaCheckCircle />
                    </Link>

                    <p className="my-2 text-sm">{country}</p>
                    <p className="my-2 text-sm">{description}</p>
                    <section className="text-sm text-indigo-500 flex font-semibold gap-5 mt-3">
                      <p>{parseInt(viewCount).toLocaleString()} Views</p>
                      <p>{parseInt(videoCount).toLocaleString()} Likes</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
      <Videos videos={videos} />
    </section>
  );
}

export default ChannelDetail;
