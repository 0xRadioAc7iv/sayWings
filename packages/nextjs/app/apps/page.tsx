import React from "react";
import { IoMdSwitch } from "react-icons/io";
import { RiSortAsc } from "react-icons/ri";
import LabelButton from "~~/components/buttons/LabelButton";
import Search from "~~/components/search/Search";
import AppDetailTable from "~~/components/tables/AppDetailTable";

const page = () => {
  return (
    <div className="px-32 h-[80vh] flex justify-center flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <LabelButton icon={<IoMdSwitch className="" />} text="Filter" />
          <LabelButton icon={<RiSortAsc className="" />} text="Sort" />
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="mt-8">
      <AppDetailTable />
      </div>
    </div>
  );
};

export default page;
