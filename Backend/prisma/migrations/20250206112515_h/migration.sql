/*
  Warnings:

  - You are about to drop the column `ContactName` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `ContactPhone` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `DOB` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `Fullname` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `HealthStatus` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `InsuranceDetails` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `Relationship` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `UserInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contactName` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthStatus` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insuranceDetails` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationship` to the `UserInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[UserInfo] DROP CONSTRAINT [UserInfo_Email_key];

-- DropIndex
ALTER TABLE [dbo].[UserInfo] DROP CONSTRAINT [UserInfo_UserName_key];

-- AlterTable
ALTER TABLE [dbo].[UserInfo] DROP COLUMN [ContactName],
[ContactPhone],
[DOB],
[Email],
[Fullname],
[HealthStatus],
[InsuranceDetails],
[Phone],
[Relationship],
[UserName];
ALTER TABLE [dbo].[UserInfo] ADD [contactName] NVARCHAR(1000) NOT NULL,
[contactPhone] NVARCHAR(1000) NOT NULL,
[dob] DATETIME2 NOT NULL,
[email] NVARCHAR(1000) NOT NULL,
[fullName] NVARCHAR(1000) NOT NULL,
[healthStatus] NVARCHAR(1000) NOT NULL,
[insuranceDetails] NVARCHAR(1000) NOT NULL,
[phone] NVARCHAR(1000) NOT NULL,
[relationship] NVARCHAR(1000) NOT NULL,
[userName] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[UserInfo] ADD CONSTRAINT [UserInfo_userName_key] UNIQUE NONCLUSTERED ([userName]);

-- CreateIndex
ALTER TABLE [dbo].[UserInfo] ADD CONSTRAINT [UserInfo_email_key] UNIQUE NONCLUSTERED ([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
