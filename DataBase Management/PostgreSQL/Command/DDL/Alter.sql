-- Postgree SQL - Alter command 

create table person(
    id int,
    name varchar(255)
);

-- Add column
Alter table person Add age float;

-- Change column
Alter table person 
Alter column name type varchar(10)

-- Drop column
Alter table person drop age;
