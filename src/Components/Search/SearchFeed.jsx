import Videos from "../Videos/Videos";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const { searchTerm } = useParams();

  const {
    error,
    isPending,
    data: videos,
  } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `search?part=snippet&q=${searchTerm}`
      );
      const data = response.data;
      return data.items;
    },
  });

  if (isPending) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  console.log(videos);

  return (
    <main className="lg:col-span-9 xl:col-span-10 lg:px-3">
      <section className="">
        <h1 className="text-3xl mt-4 lg:mt-1 text-center">
          Search Results for:
          <span className="text-red-600">{searchTerm}</span> Videos
        </h1>
      </section>
      <section>
        <Videos videos={videos} />
      </section>
    </main>
  );
}

export default SearchFeed;
