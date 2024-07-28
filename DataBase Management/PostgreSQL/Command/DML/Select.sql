-- Postgree SQL - Select command 

-- create table
create table person (
    id  int,
    name varchar,
    age float
);

-- select all data
select * from person;

-- select specific column
select name from person;
