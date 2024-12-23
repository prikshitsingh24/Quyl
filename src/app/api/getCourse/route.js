import { NextResponse } from "next/server";
import { prisma } from "../prisma";



export async function POST(req){
    const {cohortId} = await req.json();
    try{
        const course = await prisma.course.findMany({
            where:{
                cohortId:cohortId
            }
        })
        return NextResponse.json({course},{status:200})
    }catch(error){
        return NextResponse.json({},{status:500})
    }
}