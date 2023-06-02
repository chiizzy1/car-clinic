/*
  Warnings:

  - You are about to drop the column `trackId` on the `cardetails` table. All the data in the column will be lost.
  - You are about to drop the column `day` on the `timeslot` table. All the data in the column will be lost.
  - The required column `trackId` was added to the `Repair` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `date` to the `TimeSlot` table without a default value. This is not possible if the table is not empty.
  - Made the column `clientId` on table `timeslot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cardetails` DROP COLUMN `trackId`;

-- AlterTable
ALTER TABLE `repair` ADD COLUMN `trackId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `timeslot` DROP COLUMN `day`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    MODIFY `clientId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('AUTHORIZED', 'UNAUTHORIZED') NOT NULL DEFAULT 'UNAUTHORIZED';
