CREATE OR ALTER PROCEDURE updateBalanceProc(@studentId VARCHAR(50),@studentBalance INT)
AS 
BEGIN
UPDATE studentTable 
SET studentBalance= @studentBalance 
WHERE studentId=@studentId 
END;