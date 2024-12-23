/*
  Warnings:

  - You are about to drop the column `courseName` on the `Course` table. All the data in the column will be lost.
  - Added the required column `courseClass` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseSubject` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Cohort_cohortName_key";

-- DropIndex
DROP INDEX "Course_courseName_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "courseName",
ADD COLUMN     "courseClass" TEXT NOT NULL,
ADD COLUMN     "courseSubject" TEXT NOT NULL;
