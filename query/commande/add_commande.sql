INSERT INTO commande VALUES (id, (SELECT id FROM programme WHERE name = $1));