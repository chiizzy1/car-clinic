/*
  Warnings:

  - Added the required column `day` to the `TimeSlot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `timeslot` ADD COLUMN `additionalInfo` VARCHAR(191) NULL,
    ADD COLUMN `carModel` VARCHAR(191) NULL,
    ADD COLUMN `carType` VARCHAR(191) NULL,
    ADD COLUMN `clientId` VARCHAR(191) NULL,
    ADD COLUMN `day` VARCHAR(191) NOT NULL,
    ADD COLUMN `reason` VARCHAR(191) NULL,
    ADD COLUMN `yearManufactured` INTEGER NULL;

-- CreateTable
CREATE TABLE `appointmentClient` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `TimeSlot_clientId_idx` ON `TimeSlot`(`clientId`);
