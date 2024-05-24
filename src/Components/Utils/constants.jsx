//ICONS
import { FaHome, FaCode, FaMusic } from "react-icons/fa";
import {
  MdOutlineGraphicEq,
  MdOutlineLiveTv,
  MdCheckroom,
  MdOutlineFaceRetouchingNatural,
  MdTheaterComedy,
  MdDeveloperMode,
} from "react-icons/md";
import {
  IoIosSchool,
  IoLogoGameControllerB,
  IoIosFitness,
} from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import logo_image from "../../assets/logo.png";
import course_image from "../../assets/API-Course.png";
import person_image from "../../assets/buddy_sample.png";

export const logo = logo_image;

export const categories = [
  { name: "New", icon: <FaHome /> },
  { name: "JS Mastery", icon: <FaCode /> },
  { name: "Coding", icon: <FaCode /> },
  { name: "ReactJS", icon: <FaCode /> },
  { name: "NextJS", icon: <FaCode /> },
  { name: "Music", icon: <FaMusic /> },
  { name: "Education", icon: <IoIosSchool /> },
  { name: "Podcast", icon: <MdOutlineGraphicEq /> },
  { name: "Movie", icon: <BiSolidMoviePlay /> },
  { name: "Gaming", icon: <IoLogoGameControllerB /> },
  { name: "Live", icon: <MdOutlineLiveTv /> },
  { name: "Sport", icon: <IoIosFitness /> },
  { name: "Fashion", icon: <MdCheckroom /> },
  { name: "Beauty", icon: <MdOutlineFaceRetouchingNatural /> },
  { name: "Comedy", icon: <MdTheaterComedy /> },
  { name: "Gym", icon: <IoIosFitness /> },
  { name: "Crypto", icon: <MdDeveloperMode /> },
];

export const demoThumbnailUrl = course_image;
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture = person_image;
