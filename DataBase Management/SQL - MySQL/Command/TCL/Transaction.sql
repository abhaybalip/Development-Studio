-- sql - Transaction 

BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 150 WHERE account_number = 'A123';
UPDATE accounts SET balance = balance + 150 WHERE account_number = 'B456';

COMMIT TRANSACTION;
