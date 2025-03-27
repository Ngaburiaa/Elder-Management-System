/*
  Warnings:

  - You are about to drop the column `EmergencyName` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `EmerggencyPhone` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `careGiverName` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `UserInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ContactName` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ContactPhone` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Fullname` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `physicianInfo` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[UserInfo] DROP COLUMN [EmergencyName],
[EmerggencyPhone],
[careGiverName],
[email],
[fullname],
[password];
ALTER TABLE [dbo].[UserInfo] ADD [ContactName] NVARCHAR(1000) NOT NULL,
[ContactPhone] NVARCHAR(1000) NOT NULL,
[Email] NVARCHAR(1000) NOT NULL,
[Fullname] NVARCHAR(1000) NOT NULL,
[Password] NVARCHAR(1000) NOT NULL,
[physicianInfo] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[UserInfo] ADD CONSTRAINT [UserInfo_Email_key] UNIQUE NONCLUSTERED ([Email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
