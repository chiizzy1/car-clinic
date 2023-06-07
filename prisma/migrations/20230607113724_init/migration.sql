/*
  Warnings:

  - You are about to drop the column `make` on the `cardetails` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `cardetails` table. All the data in the column will be lost.
  - You are about to drop the column `plateNumber` on the `cardetails` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `cardetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cardetails` DROP COLUMN `make`,
    DROP COLUMN `model`,
    DROP COLUMN `plateNumber`,
    DROP COLUMN `year`;
