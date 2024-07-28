-- sql - Grant command 

-- GRANT privilege_name ON object_name TO user_name;

GRANT SELECT ON employees TO john WITH GRANT OPTION;

GRANT SELECT ON employees TO 'john'@'localhost';


-- grant privileges to all users by using the PUBLIC keyword.
GRANT SELECT ON employees TO PUBLIC;

-- want the user to be able to grant the same privileges to other users
GRANT SELECT ON employees TO john WITH GRANT OPTION;
