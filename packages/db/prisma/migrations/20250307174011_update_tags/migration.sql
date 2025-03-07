/*
  Warnings:

  - You are about to drop the `_CodeSnippetToTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_CodeSnippetToTag" DROP CONSTRAINT "_CodeSnippetToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_CodeSnippetToTag" DROP CONSTRAINT "_CodeSnippetToTag_B_fkey";

-- DropTable
DROP TABLE "_CodeSnippetToTag";

-- CreateTable
CREATE TABLE "CodeSnippetTag" (
    "code_snippet_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "CodeSnippetTag_pkey" PRIMARY KEY ("code_snippet_id","tag_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "CodeSnippetTag" ADD CONSTRAINT "CodeSnippetTag_code_snippet_id_fkey" FOREIGN KEY ("code_snippet_id") REFERENCES "CodeSnippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CodeSnippetTag" ADD CONSTRAINT "CodeSnippetTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
