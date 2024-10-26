import React, { useState } from "react";
import { FaPenFancy } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdSnooze } from "react-icons/md";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";
import { MdExpandMore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";


const sidebarItems = [
    {
      icon:<MdForwardToInbox />,
      text:"Inbox"
    },
    {
      icon:<FaRegStar />,
      text:"Starred"
    },
    {
      icon:<MdSnooze />,
      text:"Snoozed"
    },
    {
      icon:<IoArrowForwardCircleOutline />,
      text:"Sent"
    },
    {
      icon:<RiDraftLine />,
      text:"Drafts"
    },
    {
      icon:<MdExpandMore />,
      text:"More"
    },
  ]


const Sidebar = () => {
 // const [open, setopen] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className="w-[15%]">
      <div className=" p-3">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md">
          <FaPenFancy size={"24px"} />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
      {
        sidebarItems.map((items, index)=>(
          <div key={index} className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2  hover:cursor-pointer">
          {items.icon}
          <p>{items.text}</p>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default Sidebar;
