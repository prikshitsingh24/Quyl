/*
  Warnings:

  - Added the required column `status` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "status" BOOLEAN NOT NULL,
ALTER COLUMN "lastLogin" DROP NOT NULL;
