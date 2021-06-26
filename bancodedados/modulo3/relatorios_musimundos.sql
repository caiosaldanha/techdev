SELECT * FROM `faturas`;

-- Numero 1 
SELECT MAX(`total`) FROM `faturas` WHERE `ciudad_de_facturacion` = 'Oslo';

-- Numero 2 
SELECT MIN(`total`) FROM `faturas`;

-- Numero 3 
SELECT AVG(`total`) FROM `faturas` WHERE `pais_de_facturacion` = 'Canada';

-- Numero 4 
SELECT COUNT(`total`) FROM `faturas` WHERE `pais_de_facturacion` = 'Canada';

-- Numero 5 
SELECT SUM(`total`) FROM `faturas`;

-- Numero 6 
# Primeiro a AVG 
SELECT AVG(`total`) FROM `faturas`;
SELECT `id`, `fecha_factura`, `total` FROM `faturas` WHERE `total` < (SELECT AVG(`total`) FROM `faturas`);