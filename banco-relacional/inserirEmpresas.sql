ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 04825496000193),
    ('Vale', 59593632000159),
    ('Cielo', 82054018000130);

desc empresas;
desc prefeitos;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
