/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Todos` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "creatorId",
DROP COLUMN "date";
