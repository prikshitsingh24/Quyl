import Image from "next/image";
import Table from "./components/table/table"
import AddStudentButton from "./components/buttons/AddStudentButton";
import Alert from "./components/alert/alert";

export default function Home() {
  
  return (
    <div className="h-screen w-full overflow-hidden bg-background grid grid-cols-[1fr_6fr] gap-2 text-black">
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
      <div className="flex flex-col">
        <div className="h-[48px] w-full mt-5 flex flex-row justify-between">
          <div className=" w-[300px]  screen-1280:w-1/2 h-full flex flex-row items-center bg-foreground rounded-[12px] pl-4">
           <Image src={"/search.png"} className="h-[18px]" width={18} height={18}  alt="searchIcon"></Image>
           <input type="text" placeholder="Search your course" className="w-full h-full rounded-[12px] outline-none p-2"/>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_4fr] screen-1280:grid-cols-[1fr_1fr_1fr_1fr_4fr] screen-1512:grid-cols-[1.5fr_1fr_1.5fr_1.5fr_4fr] screen-1680:grid-cols-[2fr_2fr_2fr_2fr_4fr] gap-4 items-center ml-4 mr-10">
            <div className="w-fit">
              <Image src={"/help.png"} alt="helpIcon" width={24} height={24} ></Image>
            </div>
            <div>
            <Image src={"/message.png"} alt="messageIcon" width={24} height={24} ></Image>
            </div>
            <div>
            <Image src={"/setting.png"} alt="settingsIcon" width={24} height={24} ></Image>
            </div>
            <div>
            <Image src={"/notification.png"} alt="notificationIcon" width={24} height={24} ></Image>
            </div>
            <div className="flex flex-row items-center">
            <Image src={"/userPic.png"} alt="userPicIcon" width={40} height={40} ></Image>
            <div className="text-[18px] ml-5 text-usernameText font-semibold">
            Adeline H. Dancy
            </div>
            </div>
          </div>
        </div>
        <div className="bg-foreground mt-[20px] h-full rounded-[12px] pl-[15px] pr-[15px] pt-[7px] mr-10">
          <div className="flex flex-col h-full">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row">
                <div className="h-full w-[149px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px]">
                <select className="h-full w-full outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold">
                <option value="AY 2024-25">AY 2024-25</option>
                </select>
                </div>
                <div className="h-full w-[117px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px] ml-[15px]">
                <select className="h-full w-full outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold">
                <option value="CBSE 9">CBSE 9</option>
                </select>
                </div>
              </div>
              <Alert/>
              <AddStudentButton/>
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
}
