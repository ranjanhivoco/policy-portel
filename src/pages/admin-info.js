import AdminTable from '@/Components/AdminTable';
import Header from '@/Components/Header'
import { Search } from 'lucide-react'
import React from 'react'

const AdminInfo = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-between px-14 pt-14 pb-10">
        <h2 className="text-2xl text-black">Admin Dashboard</h2>

        <div className="flex gap-1">
          <Search size={28} />

          <input
            className="
            outline-none
            text-black
            border-b-2
          border-black
            w-80
          placeholder:text-[#656565]
          "
            type="text"
            id="name"
            name="name"
            placeholder="Search Employee by Name.."
          />
        </div>
      </div>

      <div className="mx-14 rounded-t-xl overflow-hidden">
        <AdminTable />
      </div>
    </div>
  );
}

export default AdminInfo
