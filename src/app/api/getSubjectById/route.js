import { NextResponse } from "next/server";
import { prisma } from "../prisma";



export async function POST(req){
    const {courseId} = await req.json();
    try{
        const subject = await prisma.subject.findMany({
            where:{
                courseId:courseId
            }
        })
        return NextResponse.json({subject},{status:200})
    }catch(error){
        return NextResponse.json({},{status:500})
    }
}