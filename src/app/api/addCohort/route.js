import { NextResponse } from "next/server";
import { prisma } from "../prisma";

export async function POST(req) {
    const { cohortName } = await req.json();

    try {
        // Create a new cohort in the database
        const cohort = await prisma.cohort.create({
          data: {
            cohortName,  // The name of the cohort
          },
        });
        return NextResponse.json({cohort});  // Send the newly created cohort data as a response
      } catch (error) {
        return NextResponse.json({ error: 'Error creating cohort' });
      }
    
}
