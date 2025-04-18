/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[UserInfo] ADD CONSTRAINT [UserInfo_userName_key] UNIQUE NONCLUSTERED ([userName]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
