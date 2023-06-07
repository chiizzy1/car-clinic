/*
  Warnings:

  - Added the required column `make` to the `CarDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `CarDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plateNumber` to the `CarDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `CarDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cardetails` ADD COLUMN `make` VARCHAR(191) NOT NULL,
    ADD COLUMN `model` VARCHAR(191) NOT NULL,
    ADD COLUMN `plateNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;
