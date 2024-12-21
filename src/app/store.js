import { create } from "zustand";


export const useStore = create((set)=>({
    isStudentAdded:false,
    isStudentUpdated:false,
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
    studentData:[],
    handleStudentData:(data)=>{
        set({studentData:data})
    }
}))