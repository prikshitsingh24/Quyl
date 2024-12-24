import { create } from "zustand";


export const useStore = create((set)=>({
    isPhone:false,
    isStudentAdded:false,
    isStudentUpdated:false,
    isStudentDeleted:false,
    updateAlert:false,
    handleIsPhoneStatus:()=>{
        set({isPhone:true})
    },
    handleStudentAdded: ()=>{
        set({isStudentAdded:true});
        setTimeout(() => {
            set({ isStudentAdded: false });
          }, 3000);
    },
    handleStudentUpdated:()=>{
        set({isStudentUpdated:true});
        setTimeout(() => {
            set({ isStudentUpdated: false });
          }, 3000);
    },
    handleStudentDeleted:()=>{
        set({isStudentDeleted:true});
        setTimeout(() => {
            set({ isStudentDeleted: false });
          }, 3000);
    },
    handleUpdateAlert:()=>{
        set({updateAlert:true});
        setTimeout(() => {
            set({ updateAlert: false });
          }, 3000);
    },
    searchQuery:"",
    handleSearchQuery:(data)=>{
        set({searchQuery:data})
    },
    cohortFilter:"",
    handleCohortFilter:(data)=>{
        set({cohortFilter:data})
    },
    classFilter:"",
    handleClassFilter:(data)=>{
        set({classFilter:data})
    },
    studentData:[],
    handleStudentData:(data)=>{
        set({studentData:data})
    }
}))