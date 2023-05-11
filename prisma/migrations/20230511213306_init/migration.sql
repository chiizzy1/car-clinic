-- CreateTable
CREATE TABLE `TimeSlot` (
    `id` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `availability` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
