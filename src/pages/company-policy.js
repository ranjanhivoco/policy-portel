import CompanyPolicyTable from '@/Components/CompanyPolicyTable';
import { UserDataContext } from '@/Context/UserDataContext';
import { Search } from 'lucide-react'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../Components/Header'), { ssr: false });

import React, { useContext, useEffect } from 'react'

const CompanyPolicy = () => {

    const {data}=useContext(UserDataContext)
    console.log(data);
    

  
  return (
    <div className='pb-4'>
      <Header  />

      <section className="flex flex-col gap-y-7 pb-7 px-14">
        <div className="flex justify-between items-center   pt-14 pb-10">
          <h2 className="text-2xl text-[1.75rem]  font-semibold text-black">
            Company Policies
          </h2>

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

        <p className="text-lg leading-6 ">
          Here you’ll find all the company policies designed to maintain a
          professional and transparent environment.
        </p>
      </section>

      <div className="mx-14 rounded-t-xl overflow-hidden">
        <CompanyPolicyTable />
      </div>
    </div>
  );
}

export default CompanyPolicy
