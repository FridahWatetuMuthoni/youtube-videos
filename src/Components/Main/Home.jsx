import Feed from "./Feed";
import SideBar from "./SideBar";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const { error, isPending, data } = useQuery({
    queryKey: ["images", selectedCategory],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `search?part=snippet&q=${selectedCategory}`
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

  return (
    <div className="min-h-full">
      <div className="py-8">
        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-4">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Feed selectedCategory={selectedCategory} videos={data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
