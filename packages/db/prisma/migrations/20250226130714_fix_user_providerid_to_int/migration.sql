/*
  Warnings:

  - Changed the type of `provider_id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "provider_id",
ADD COLUMN     "provider_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_provider_id_key" ON "User"("provider_id");
