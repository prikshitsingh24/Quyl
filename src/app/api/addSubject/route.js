import { NextResponse } from "next/server";
import { prisma } from "../prisma";

export async function POST(req) {
    const { courseBoard, courseClass, courseSubject, courseId } = await req.json();

    try {
      // Create a new course and link it to the cohort
      const course = await prisma.subject.create({
        data: {
          courseBoard,
          courseClass,
          courseSubject,
          courseId
        },
      });
      return NextResponse.json({course});  // Send the newly created course data as a response
    } catch (error) {
      return NextResponse.json({},{status:500});
    }
}