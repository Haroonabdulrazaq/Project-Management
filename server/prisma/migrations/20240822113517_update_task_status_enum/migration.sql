/*
  Warnings:

  - The `status` column on the `Tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('IN_PROGRESS', 'COMPLETE', 'PENDING');

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "status",
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'PENDING';
