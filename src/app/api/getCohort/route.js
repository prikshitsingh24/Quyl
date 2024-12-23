import { NextResponse } from "next/server";
import { prisma } from "../prisma";



export async function GET(req){
    try{
        const cohort = await prisma.cohort.findMany();
        return NextResponse.json({cohort},{status:200})
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}