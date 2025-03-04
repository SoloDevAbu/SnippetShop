/*
  Warnings:

  - You are about to drop the column `category_id` on the `CodeSnippet` table. All the data in the column will be lost.
  - You are about to drop the column `code_key` on the `CodeSnippet` table. All the data in the column will be lost.
  - You are about to drop the column `file_name` on the `CodeSnippet` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_category_id_fkey";

-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_developer_id_fkey";

-- DropForeignKey
ALTER TABLE "CodeSnippet" DROP CONSTRAINT "CodeSnippet_language_id_fkey";

-- AlterTable
ALTER TABLE "CodeSnippet" DROP COLUMN "category_id",
DROP COLUMN "code_key",
DROP COLUMN "file_name",
ALTER COLUMN "language_id" DROP NOT NULL,
ALTER COLUMN "developer_id" DROP NOT NULL;

-- DropTable
DROP TABLE "Category";

-- AddForeignKey
ALTER TABLE "CodeSnippet" ADD CONSTRAINT "CodeSnippet_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSnippet" ADD CONSTRAINT "CodeSnippet_developer_id_fkey" FOREIGN KEY ("developer_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
