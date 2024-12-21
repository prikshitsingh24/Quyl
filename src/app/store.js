import { create } from "zustand";


export const useStore = create((set)=>({
    isPhone:false,
    isStudentAdded:false,
    isStudentUpdated:false,
    isStudentDeleted:false,
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
    studentData:[],
    handleStudentData:(data)=>{
        set({studentData:data})
    }
}))