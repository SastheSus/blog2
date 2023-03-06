CREATE TABLE articoli (
  Id int(11),
  Titolo varchar(255),
  Descrizione varchar(255),
  Giorno datetime,
  Logo varchar(255)
);

CREATE TABLE utenti (
  email varchar(50),
  username varchar(50),
  password varchar (50)
);