import { ChevronDown, CircleUser } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="py-9 px-14 flex justify-between items-center 
    shadow-[0px_1.12px_13.47px_0px__#0000001A]
    "
    >
      <Image
        className=""
        src={"/images/hivoco-studios.png"}
        width={202}
        height={34}
        alt="logo"
        priority
      />

      <div className="flex items-center gap-2">
        <CircleUser size={36} />

        <div className="flex">
          <div>
            <h3
              className="
            text-base
            font-medium
            text-black
            "
            >
              Ananya Garg
            </h3>

            <span
            // style={{color:"#656565"}}
            className="
          text-[#656565]
            text-sm
            font-normal
            "
            >
              ananya.garg@hivoco.com
            </span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
