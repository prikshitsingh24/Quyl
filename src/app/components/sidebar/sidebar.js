
import Image from "next/image";

export default function Sidebar(){
    return(
        <div className="bg-foreground">
        <div className="mt-[30px] ml-[12px] mr-[12px] flex flex-col">
        <div className="mb-[30px]">
        <Image src={"/logo.png"} alt="logoIcon" width={98} height={42} ></Image>
        </div>
        <div className="grid grid-rows-6 gap-2">
          <div className="flex flex-row h-[48px] hover:bg-gray-50  text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/dashboard.png"} className="h-[18px] w-[18px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className="font-bold ">
            Dashboard
          </div>
          </div>
          <div className="flex flex-row h-[48px] hover:bg-gray-50 text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/student.png"} className="h-[18px] w-[18px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className=" font-semibold">
            Student
          </div>
          </div>
          <div className="flex flex-row h-[48px] hover:bg-gray-50 text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/chapter.png"} className="h-[18px] w-[18px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className="font-semibold">
            Chapter
          </div>
          </div>
          <div className="flex flex-row h-[48px] hover:bg-gray-50 text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/help.png"} className="h-[21px] w-[21px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className="font-semibold">
            Help
          </div>
          </div>
          <div className="flex flex-row h-[48px] hover:bg-gray-50 text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/report.png"} className="h-[21px] w-[21px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className="font-semibold">
            Report
          </div>
          </div>
          <div className="flex flex-row h-[48px] hover:bg-gray-50 text-dashboardText hover:text-sidebarHoverTextColor cursor-pointer items-center pl-2 rounded-[6px]">
          <Image src={"/settings.png"} className="h-[18px] w-[18px] mr-2" width={18} height={18}  alt="logoIcon"></Image>
          <div className="font-semibold">
            Settings
          </div>
          </div>
        </div>
        </div>
      </div>
    )
}