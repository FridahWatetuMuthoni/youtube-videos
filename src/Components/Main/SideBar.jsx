import { categories } from "../Utils/constants";
import PropTypes from "prop-types";

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className=" lg:col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className=" hidden lg:block space-y-1 py-4 px-2 lg:py-0 lg:px-0 lg:pb-8 ">
          {categories.map((category) => {
            let active =
              selectedCategory === category.name
                ? "bg-red-600 text-white"
                : "text-muted";
            return (
              <a
                onClick={() => setSelectedCategory(category.name)}
                href="#"
                className={` ${active} hover:bg-red-600 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
                key={category.name}
              >
                <span
                  className=" flex-shrink-0 -ml-1 mr-2 lg:mr-3  "
                  style={{ fontSize: "1.5em" }}
                >
                  {category.icon}
                </span>
                <span className="truncate ">{category.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

SideBar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

export default SideBar;
