USE creartax;

CREATE TABLE Registro (
    email VARCHAR(50) primary key,
    contrasena VARCHAR(50),
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE UserClient (
	clientID int unsigned auto_increment primary key,
    nombre VARCHAR(50),
    email VARCHAR(50),
    telefono VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (email) REFERENCES Registro(email)
);

CREATE TABLE UserDriver (
	driverID int unsigned auto_increment primary key,
    nombre VARCHAR(50),
    nit VARCHAR(10),
    email VARCHAR(50),
    telefono VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (email) REFERENCES Registro(email)
);

CREATE TABLE InfoTaxis (
	taxiID int unsigned auto_increment primary key,
    driverID int unsigned,
    placa VARCHAR(10),
	marca VARCHAR(20),
	modelo VARCHAR(20),
    kilometraje int unsigned,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (driverID) REFERENCES UserDriver(driverID)
);

CREATE TABLE Viaje (
	viajeID int unsigned auto_increment primary key,
    clientID int unsigned,
    driverID int unsigned,
    puntoSalida text,
    puntoLlegada text,
    precio int unsigned,
    puntuacion VARCHAR(1),
    opinion text,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (driverID) REFERENCES UserDriver(driverID),
    FOREIGN KEY (clientID) REFERENCES UserClient(clientID)
);
drop table InfoTaxis, UserDriver, UserClient, Registro; 