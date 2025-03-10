/*
  Warnings:

  - Made the column `language_id` on table `CodeSnippet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `developer_id` on table `CodeSnippet` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_developer_id_fkey";

-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_language_id_fkey";

-- AlterTable
ALTER TABLE "CodeSnippet" ALTER COLUMN "language_id" SET NOT NULL,
ALTER COLUMN "developer_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CodeSnippet" ADD CONSTRAINT "CodeSnippet_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSnippet" ADD CONSTRAINT "CodeSnippet_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
