import { NextResponse } from "next/server";
import { prisma } from "../prisma";



export async function POST(req){
    const {cohortId} = await req.json();
    try{
        const cohort = await prisma.cohort.findMany({
            where:{
                cohortId:cohortId
            }
        });
        return NextResponse.json({cohort},{status:200})
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}