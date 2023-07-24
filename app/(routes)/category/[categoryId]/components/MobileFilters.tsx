"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import Button from "../../../../../components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "../../../../../components/ui/icon-button";
import Filter from "./Filter"

interface IMobileFilters {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<IMobileFilters> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className=" flex items-center gap-x-2 lg:hidden">
        {" "}
        FIlters <Plus />
      </Button>
      <Dialog
        open={open}
        as="div"
        className=" relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className=" relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className=" flex items-center justify-center px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
              <div className=" p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
