/*
  Warnings:

  - You are about to drop the column `fixed` on the `cardetails` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cardetails` DROP COLUMN `fixed`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `paid`;

-- AlterTable
ALTER TABLE `repair` ADD COLUMN `fixed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `paid` BOOLEAN NOT NULL DEFAULT false;
