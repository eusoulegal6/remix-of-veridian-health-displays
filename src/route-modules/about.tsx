import About from "@/pages/About";
import { createPageLinks, createPageMeta } from "./shared";

export const meta = () => createPageMeta("about");

export const links = () => createPageLinks("about");

export default About;
