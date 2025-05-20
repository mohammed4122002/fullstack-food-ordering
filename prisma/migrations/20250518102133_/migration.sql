/*
  Warnings:

  - Changed the type of `name` on the `Size` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ExtraIngredient" AS ENUM ('CHEESE', 'BACON', 'TOMATO', 'ONION', 'PEPPER');

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "name" "ProductSize" NOT NULL;

-- CreateTable
CREATE TABLE "Extra" (
    "id" TEXT NOT NULL,
    "name" "ExtraIngredient" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
