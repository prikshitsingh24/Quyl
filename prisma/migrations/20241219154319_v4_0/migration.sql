/*
  Warnings:

  - Added the required column `cohort` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cohort" DROP CONSTRAINT "Cohort_cohortId_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "cohort" TEXT NOT NULL;
