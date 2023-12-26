import RenderNavLinks from "../components/Nav/RenderNavLinks";
import { navLinksArray } from "../constants/constants";
import { FiShoppingCart } from "react-icons/fi";

export default function Nav() {
  return (
    <nav className="flex text-white max-w-[1100px] border-[#FFFFFF] border-opacity-10 mx-auto justify-between items-center border-b h-10 py-12">
      <figure>
        <img src="/images/shared/desktop/logo.svg " alt="" />
      </figure>
      <div className="flex items-center gap-x-8">
        {navLinksArray.map((link) => {
          return <RenderNavLinks key={link} link={link} />;
        })}
      </div>
      <div>
        <FiShoppingCart className="text-2xl" />
      </div>
    </nav>
  );
}
