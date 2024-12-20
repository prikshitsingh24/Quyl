import { prisma } from "../prisma";
import { NextResponse } from "next/server"


export async function POST(req){
    const {studentName,cohort,dateJoined,status}= await req.json();
    try{
       await prisma.student.create({
        data:{
            studentName:studentName,
            cohort:cohort,
            dateJoined:new Date(dateJoined),
            status:status
        }
       })

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({message:`${studentName}\n${cohort}\n${dateJoined}\n${status}`})
}