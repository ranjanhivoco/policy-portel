import React from "react";
import { Search } from "lucide-react";
import CompanyPolicyTable from "@/Components/CompanyPolicyTable";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../Components/Header'), { ssr: false });


const SingleEmployee = () => {
  return (
    <div>
      <Header />

      <section className="flex flex-col gap-y-7 pb-7 px-14">
        <div className="flex justify-between items-start   pt-14 pb-10">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl text-[1.75rem]  font-semibold text-black">
              Employee Name: Ananya Garg
            </h2>

            <span>Email Id: ananya.garg@hivoco.com</span>
          </div>

          <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-lg p-3 ">
            <Search size={28} />

            <input
              className="
            bg-transparent
            outline-none
            text-black
            border-b-2
          border-black
            w-80
          placeholder:text-[#656565]

                    [&:-webkit-autofill]:bg-transparent
          [&:-webkit-autofill:hover]:bg-transparent
          [&:-webkit-autofill:focus]:bg-transparent
          [&:-webkit-autofill:active]:bg-transparent
          [&:-webkit-autofill]:[transition-delay:9999s]
          [&:-webkit-autofill]:[-webkit-text-fill-color:inherit]

          "
              type="text"
              id="name"
              name="name"
              placeholder="Search policies.."
            />
          </div>
        </div>
      </section>

      <div className="mx-14 rounded-t-xl overflow-hidden">
        <CompanyPolicyTable />
      </div>
    </div>
  );
};

export default SingleEmployee;
