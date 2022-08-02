-- CreateEnum
CREATE TYPE "Item" AS ENUM ('TSHIRT', 'SOCKS');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gifts" (
    "id" SERIAL NOT NULL,
    "itemType" "Item" NOT NULL DEFAULT 'TSHIRT',
    "size" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Gifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NFTs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nft" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "NFTs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Gifts" ADD CONSTRAINT "Gifts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NFTs" ADD CONSTRAINT "NFTs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
