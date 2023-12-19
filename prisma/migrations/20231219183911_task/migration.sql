/*
  Warnings:

  - You are about to drop the column `foto` on the `quadro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quadro" DROP COLUMN "foto";

-- AlterTable
ALTER TABLE "tarefa" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'afazer';
