BEGIN 
TRY 
CREATE TABLE studentTable(
    studentId VARCHAR(100) PRIMARY KEY,
    studentName VARCHAR(100) NOT NULL,
    studentClass VARCHAR(100) NOT NULL,
    studentBalance INT ,
    
)
END TRY
BEGIN 
CATCH 
THROW 50001,'Table has already been created',1
END 
CATCH 