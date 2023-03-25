USE practica_1_ayd1_g2;

CREATE TABLE Contacto (
	Id INT AUTO_INCREMENT,
    Nombres VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,    
    Telefono INT NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Favorito BOOLEAN NOT NULL,
    Eliminar BOOLEAN NOT NULL,
    PRIMARY KEY (Id)
);