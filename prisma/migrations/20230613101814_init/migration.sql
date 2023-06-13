/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Made the column `firstName` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `firstName` VARCHAR(191) NOT NULL,
    MODIFY `lastName` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `phone` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Customer_phone_key` ON `Customer`(`phone`);

-- CreateIndex
CREATE INDEX `Customer_adminId_idx` ON `Customer`(`adminId`);
