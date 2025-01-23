import AdminTable from '@/Components/AdminTable';
import Header from '@/Components/Header'
import { Search } from 'lucide-react'
import React from 'react'

const AdminInfo = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-between items-center  px-14 pt-14 pb-10">
        <h2 className="text-2xl text-[1.75rem]  font-semibold text-black">Admin Dashboard</h2>

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
            placeholder="Search Employee by Name.."
          />
        </div>
      </div>

      <div className="mx-20 rounded-t-xl overflow-hidden">
        <AdminTable />
      </div>
    </div>
  );
}

export default AdminInfo
