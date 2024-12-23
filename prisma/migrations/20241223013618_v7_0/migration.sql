/*
  Warnings:

  - You are about to drop the column `cohort` on the `Student` table. All the data in the column will be lost.
  - Added the required column `cohortId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cohortId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_courseId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "cohortId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "cohort",
ADD COLUMN     "cohortId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Cohort"("cohortId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Cohort"("cohortId") ON DELETE RESTRICT ON UPDATE CASCADE;
