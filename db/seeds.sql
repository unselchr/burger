USE burgers;
INSERT INTO burgers (name,devoured) Values("Cheese Burger",false);
INSERT INTO burgers (name,devoured) Values("Bacon Cheese Burger",false);
INSERT INTO burgers (name,devoured) Values("Ham Burger",false);
USE burgers;
INSERT INTO burgers(name,devoured) VALUES("Eaten Burger",true);
SELECT * FROM burgers;