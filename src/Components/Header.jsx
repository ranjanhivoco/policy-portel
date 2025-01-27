import { UserDataContext } from "@/Context/UserDataContext";
import { ChevronDown, CircleUser } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

const Header = () => {
  const { data } = useContext(UserDataContext);

const userData = JSON.parse( localStorage.getItem("userData"));


console.log(userData);



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
        {/* <CircleUser size={36} /> */}

        <Image
          className=""
          src={"/images/user.svg"}
          width={36}
          height={37}
          alt="logo"
          priority
        />

        <div className="flex">
          <div>
            <h3
              className="
            text-base
            font-medium
            text-black
            "
            >
              {data.name}
            </h3>

            <span
              style={{ color: "#656565" }}
              className="
          text-[#656565]
            text-sm
            font-normal
            "
            >
              {data.email}
            </span>
          </div>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
