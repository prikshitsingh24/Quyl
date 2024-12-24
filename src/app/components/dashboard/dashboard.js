"use client"
import Image from "next/image";
import Table from "../table/table"
import AddStudentButton from "../buttons/AddStudentButton";
import Alert from "../alert/alert";
import Sidebar from "../sidebar/sidebar";
import { useState,useEffect,useRef } from "react";
import { useStore } from "@/app/store";
 

export default function Dashboard(){
    const [isPhone,setIsPhone] = useState(false);
    const handleIsPhoneStatus = useStore((state)=>state.handleIsPhoneStatus);
    const [sidebarOpen, setSidebarOpen] = useState(false); 
    const sidebarRef = useRef(null);
    const [cohortData,setCohortData] = useState([]);
    const [classData,setClassData] = useState([]);
    const handleCohortFilter = useStore((state)=>state.handleCohortFilter);
    const handleClassFilter = useStore((state)=>state.handleClassFilter);
    const handleSearchQuery = useStore((state)=>state.handleSearchQuery);

    const fetchCohortData=async()=>{
      const response = await fetch('api/getCohort');
      if(response.ok){
        const data = await response.json();
        setCohortData(data.cohort);
      }
    }
    
    const fetchClassData = async () =>{
      const response = await fetch('api/getSubject');
      if(response.ok){
        const data = await response.json();
        setClassData(data.courseClass);
      }
    }
    
    useEffect(() => {
        const handleIsPhoneCheck=()=>{
            if (typeof navigator !== "undefined") {
                const userAgent = navigator.userAgent.toLowerCase();
                const isPhoneDevice = /iphone|ipod|android|windows phone|blackberry|mobile/i.test(userAgent);
                const isSmallScreen = window.innerWidth < 800;

                return (isPhoneDevice || isSmallScreen)
            }
        }
        if(handleIsPhoneCheck()){
            setIsPhone(true);
            handleIsPhoneStatus();
        }else{
            return
        }
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              setSidebarOpen(false); 
            }
          };
      
          document.addEventListener('click', handleClickOutside);
          
      
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, []);


    useEffect(()=>{
      fetchClassData();
      fetchCohortData();
    },[])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar state
      };

    
      const handleClassFilterChange = (e) => {
        handleClassFilter(e.target.value);
      }  


    const handleCohortFilterChange = (e) => {
      handleCohortFilter(e.target.value);
    }

    const handleSearchChange=(e)=>{
      handleSearchQuery(e.target.value);
    }

   if(isPhone){
    return(
        <div className={`h-screen w-screen overflow-x-hidden overflow-y-hidden bg-background text-black`}>
       <div className={`transition-transform duration-300 z-10 ease-in-out fixed top-20 left-0 h-full w-40 bg-foreground shadow-lg  ${sidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>   
        <Sidebar/>
       </div>
      <div className="flex flex-col">
        <div className="h-[48px] w-full mt-5 flex flex-row justify-start items-center">
         <div  onClick={toggleSidebar} className="mr-4 ml-2 cursor-pointer">
         <Image  src={"/menu.png"} width={48} height={32}  alt="searchIcon"></Image>
         </div>
          <div className=" w-full h-full mr-2 flex flex-row items-center bg-foreground rounded-[12px]">
           <Image src={"/search.png"} className="ml-2" width={18} height={18}  alt="searchIcon"></Image>
           <input type="text" placeholder="Search your course" className="w-full h-full rounded-[12px] outline-none p-2"/>
          </div>
           <Image src={"/userPic.png"} className="mr-2" alt="userPicIcon" width={80} height={48} ></Image>
        </div>
        <div className="bg-foreground mt-[20px] h-full rounded-[12px] pl-[15px] pr-[15px] pt-[7px] mr-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-col ">
              <div className="flex flex-row mb-4">
              <div className="h-full w-[149px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px] relative">
                 <select className="h-full w-full outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold appearance-none"  onChange={handleCohortFilterChange}>
                 {cohortData.length>0 && cohortData.map((cohort,index)=>(
                  <option  value={cohort.cohortName} key={index}>{cohort.cohortName}</option>
                ))}
                 </select>
                 <Image src={"/downArrow.png"} className="absolute right-6 top-4 pointer-events-none" alt="userPicIcon" width={15} height={40} ></Image>
                 </div>
                 <div className="h-full w-[117px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px] ml-[15px] relative">
                 <select className="h-full w-full  outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold appearance-none" onChange={handleClassFilterChange}>
                 {classData.length>0 && classData.map((item,index)=>(
                  <option value={`${item.courseBoard} ${item.courseClass}`} key={index}>{item.courseBoard} {item.courseClass}</option>
                ))}
                 </select>
                 <Image src={"/downArrow.png"} className="absolute right-6 top-4 pointer-events-none" alt="userPicIcon" width={15} height={40} ></Image>
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
    return(
        <div className={`h-screen w-full overflow-hidden bg-background grid grid-cols-[1fr_6fr] gap-2 text-black`}>

        <Sidebar/>
       <div className="flex flex-col">
         <div className="h-[48px] w-full mt-5 flex flex-row justify-between">
           <div className=" w-[300px]  screen-1280:w-1/2 h-full flex flex-row items-center bg-foreground rounded-[12px] pl-4">
            <Image src={"/search.png"} className="h-[18px]" width={18} height={18}  alt="searchIcon"></Image>
            <input type="text" placeholder="Search your course" className="w-full h-full rounded-[12px] outline-none p-2" onChange={handleSearchChange}/>
           </div>
           <div className="grid grid-cols-[1fr_1fr_1fr_1fr_4fr] screen-1280:grid-cols-[1fr_1fr_1fr_1fr_4fr] screen-1512:grid-cols-[1.5fr_1fr_1.5fr_1.5fr_4fr] screen-1680:grid-cols-[2fr_2fr_2fr_2fr_4fr] gap-4 items-center ml-4 mr-10">
             <div className="w-fit cursor-pointer">
               <Image src={"/help.png"} alt="helpIcon" width={24} height={24} ></Image>
             </div>
             <div className="relative cursor-pointer">
             <Image src={"/redDot.png"} className="absolute left-3" alt="redDotIcon" width={11} height={11} ></Image>
             <Image src={"/message.png"} alt="messageIcon" width={24} height={24} ></Image>
             </div>
             <div className="cursor-pointer">
             <Image src={"/setting.png"} alt="settingsIcon" width={24} height={24} ></Image>
             </div>
             <div className="relative cursor-pointer">
              <Image src={"/redDot.png"} className="absolute left-3" alt="redDotIcon" width={11} height={11} ></Image>
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
                 <div className="h-full w-[149px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px] relative">
                 <select className="h-full w-full outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold appearance-none"  onChange={handleCohortFilterChange}>
                 {cohortData.length>0 && cohortData.map((cohort,index)=>(
                  <option  value={cohort.cohortName} key={index}>{cohort.cohortName}</option>
                ))}
                 </select>
                 <Image src={"/downArrow.png"} className="absolute right-6 top-4 pointer-events-none" alt="userPicIcon" width={15} height={40} ></Image>
                 </div>
                 <div className="h-full w-[117px] pr-6 pt-2 pb-2 pl-2 outline-none bg-dropdownBackground rounded-[6px] ml-[15px] relative">
                 <select className="h-full w-full  outline-none bg-dropdownBackground rounded-[6px] text-dropdownText font-bold appearance-none" onChange={handleClassFilterChange}>
                 {classData.length>0 && classData.map((item,index)=>(
                  <option  value={`${item.courseBoard} ${item.courseClass}`} key={index}>{item.courseBoard} {item.courseClass}</option>
                ))}
                 </select>
                 <Image src={"/downArrow.png"} className="absolute right-6 top-4 pointer-events-none" alt="userPicIcon" width={15} height={40} ></Image>
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
}