import { prisma } from "../prisma";
import { NextResponse } from "next/server"

export async function POST(req){
    const {studentId}= await req.json();
    try{
        await prisma.student.delete({where:{
        studentId:studentId
       }})

    }catch(error){
        return NextResponse.json({message:error}, { status: 400 })
    }
    return NextResponse.json({message:"Student data deleted successfully"},{status: 200})
}