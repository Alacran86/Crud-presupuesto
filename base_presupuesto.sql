drop table if exists presupuesto;
drop table if exists users;


create table presupuesto
(id int auto_increment,
concepto varchar(50) not null,
monto decimal  not null,
fecha date  not null,
tipo varchar(50)  not null,
primary key(id));


create table users(
id INT(11) NOT NULL primary key auto_increment,
username VARCHAR(16) NOT NULL,
password VARCHAR(60) NOT NULL,
fullname VARCHAR(100) NOT NULL
);


insert into presupuesto (concepto, monto, fecha, tipo) values ('Pago internet', '2000', '2020-3-06', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Pago servicio eléctrico', '4000', '2020-3-07', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Cobro Sueldo', '50000', '2020-3-10', 'Ingreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Cobro Aguinaldo', '25000', '2020-3-15', 'Ingreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Pago Celular', '2200', '2020-3-16', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Compra de alimentos', '10000', '2020-3-18', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Pago Gas Natural', '5000', '2020-3-19', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Pago Colegio', '4450', '2020-3-20', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Viáticos', '3000', '2020-3-21', 'Egreso');
insert into presupuesto (concepto, monto, fecha, tipo) values ('Gastos Varios', '5000', '2020-3-23', 'Egreso');


