/*
  Warnings:

  - You are about to drop the column `dob` on the `UserInfo` table. All the data in the column will be lost.
  - Added the required column `Age` to the `UserInfo` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[UserInfo] DROP COLUMN [dob];
ALTER TABLE [dbo].[UserInfo] ADD [Age] INT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
