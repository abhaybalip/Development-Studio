-- sql - Function
CREATE FUNCTION dbo.GetCustomersByCity(@city nvarchar(50))
RETURNS TABLE
AS
RETURN
    SELECT *
    FROM Customers
    WHERE City = @city;


SELECT dbo.CalculateTotalPrice(10, 9.99) AS TotalPrice;
