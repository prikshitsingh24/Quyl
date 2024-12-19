-- CreateTable
CREATE TABLE "Student" (
    "studentId" TEXT NOT NULL,
    "dateJoined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseId" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "Cohort" (
    "cohortId" TEXT NOT NULL,
    "cohortName" TEXT NOT NULL,

    CONSTRAINT "Cohort_pkey" PRIMARY KEY ("cohortId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseName_key" ON "Course"("courseName");

-- CreateIndex
CREATE UNIQUE INDEX "Cohort_cohortName_key" ON "Cohort"("cohortName");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Cohort"("cohortId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cohort" ADD CONSTRAINT "Cohort_cohortId_fkey" FOREIGN KEY ("cohortId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
