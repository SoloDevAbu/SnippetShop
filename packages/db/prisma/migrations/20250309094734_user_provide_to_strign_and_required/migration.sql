/*
  Warnings:

  - A unique constraint covering the columns `[provider,provider_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `provider_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_provider_id_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "provider_id" SET NOT NULL,
ALTER COLUMN "provider_id" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_provider_provider_id_key" ON "User"("provider", "provider_id");
