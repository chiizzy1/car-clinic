/*
  Warnings:

  - Made the column `phone` on table `customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `phone` INTEGER NOT NULL;
