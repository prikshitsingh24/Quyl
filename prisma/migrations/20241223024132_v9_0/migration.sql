/*
  Warnings:

  - You are about to drop the column `courseBoard` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseClass` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseSubject` on the `Course` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "courseBoard",
DROP COLUMN "courseClass",
DROP COLUMN "courseSubject";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "courseId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Subject" (
    "subjectId" TEXT NOT NULL,
    "courseBoard" TEXT NOT NULL,
    "courseClass" TEXT NOT NULL,
    "courseSubject" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subjectId")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
