"use client"
import Image from "next/image";
import Table from "./components/table/table"
import AddStudentButton from "./components/buttons/AddStudentButton";
import Alert from "./components/alert/alert";
import Sidebar from "./components/sidebar/sidebar";

export default function Home() {
  function isPhone() {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      // Checks for iPhone, iPod, Android, and some other mobile devices
      return /iphone|ipod|Android|windows phone|blackberry|mobile/i.test(userAgent);
      }
   
}
  if(isPhone()){
    return(
      <div className={`h-screen w-screen overflow-x-hidden overflow-y-hidden bg-background text-black`}>
       {/* <Sidebar/> */}
      <div className="flex flex-col">
        <div className="h-[48px] w-full mt-5 flex flex-row justify-start items-center">
          <Image src={"/menu.png"} className="mr-4 ml-2 cursor-pointer" width={32} height={32}  alt="searchIcon"></Image>
          <div className=" w-full h-full mr-2 flex flex-row items-center bg-foreground rounded-[12px]">
           <Image src={"/search.png"} className="ml-2" width={18} height={18}  alt="searchIcon"></Image>
           <input type="text" placeholder="Search your course" className="w-full h-full rounded-[12px] outline-none p-2"/>
          </div>
      
            {/* <div className="w-fit">
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
            </div> */}
           <Image src={"/userPic.png"} className="mr-2" alt="userPicIcon" width={80} height={48} ></Image>
        </div>
        <div className="bg-foreground mt-[20px] h-full rounded-[12px] pl-[15px] pr-[15px] pt-[7px] mr-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-col ">
              <div className="flex flex-row mb-4">
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
    )
  }
  
  else{
    return (
      <div className={`h-screen w-full overflow-hidden bg-background grid grid-cols-[1fr_6fr] gap-2 text-black`}>
         <Sidebar/>
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
}
