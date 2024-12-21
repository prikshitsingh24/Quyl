import { prisma } from "../prisma";
import { NextResponse } from "next/server"



export async function POST(req){
    const {studentId}= await req.json();
    let data;
    try{
       data = await prisma.student.findUnique({
        where:{
            studentId:studentId
        }
       })

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({details:data},{status: 200})
}