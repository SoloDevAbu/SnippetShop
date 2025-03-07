/*
  Warnings:

  - You are about to drop the `CodeSnippetTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CodeSnippetTag" DROP CONSTRAINT "CodeSnippetTag_code_snippet_id_fkey";

-- DropForeignKey
ALTER TABLE "CodeSnippetTag" DROP CONSTRAINT "CodeSnippetTag_tag_id_fkey";

-- DropTable
DROP TABLE "CodeSnippetTag";

-- CreateTable
CREATE TABLE "_CodeSnippetToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CodeSnippetToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CodeSnippetToTag_B_index" ON "_CodeSnippetToTag"("B");

-- AddForeignKey
ALTER TABLE "_CodeSnippetToTag" ADD CONSTRAINT "_CodeSnippetToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "CodeSnippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CodeSnippetToTag" ADD CONSTRAINT "_CodeSnippetToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
