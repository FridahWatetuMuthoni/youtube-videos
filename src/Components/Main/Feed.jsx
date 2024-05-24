import Videos from "../Videos/Videos";
import PropTypes from "prop-types";

function Feed({ selectedCategory, videos }) {
  return (
    <main className="lg:col-span-9 xl:col-span-10 lg:px-3">
      <section className="hidden lg:block">
        <h1 className="text-3xl mt-4 lg:mt-1 text-center">
          <span className="text-red-600">{selectedCategory}</span> Videos
        </h1>
      </section>
      <section>
        <Videos videos={videos} />
      </section>
    </main>
  );
}

Feed.propTypes = {
  selectedCategory: PropTypes.string,
  videos: PropTypes.array,
};

export default Feed;
