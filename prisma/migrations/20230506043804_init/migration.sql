/*
  Warnings:

  - You are about to drop the column `carMaker` on the `cardetails` table. All the data in the column will be lost.
  - Added the required column `make` to the `CarDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `CarDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cardetails` DROP COLUMN `carMaker`,
    ADD COLUMN `make` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Repair` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `estimatedCost` DOUBLE NOT NULL,
    `carId` VARCHAR(191) NOT NULL,

    INDEX `Repair_carId_idx`(`carId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
