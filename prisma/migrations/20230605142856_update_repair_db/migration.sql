/*
  Warnings:

  - Added the required column `customerId` to the `Repair` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Repair_carId_idx` ON `repair`;

-- AlterTable
ALTER TABLE `repair` ADD COLUMN `customerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `finishDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE INDEX `Repair_carId_customerId_idx` ON `Repair`(`carId`, `customerId`);
