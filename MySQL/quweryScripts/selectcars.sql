#use cars;
select * from cars.cars;
select*from cars where car_engineCapacity >= 3;
select*from cars where car_engineCapacity = 2;
select * from cars.cars where car_producer like "m%";
select * from cars.cars where car_producer = "mercedes";
select * from cars.cars where car_producer like "%s";
#двигун більше 3х літрів + виробник мерседес
SELECT * FROM cars.cars WHERE car_engineCapacity > 3 AND car_producer = "mercedes";        
#двигун більше 3х літрів + виробник субару
select * from cars where car_engineCapacity >= 3 and  car_producer = "subaru"; 
#сили більше ніж 300
select * from cars where car_enginePover > 300;
#сили більше ніж 300 + виробник субару
select * from cars where car_enginePover > 300 and car_producer like "s%";
#мотор серіі ej
select * from cars where car_bodyNumber like "ej%";       
#сили більше ніж 300 + виробник субару + мотор серіі ej
select * from cars where car_enginePover > 300 and  
						 car_producer = "subaru" and 
                         car_bodyNumber like "ej%"; 
#двигун меньше 3х літрів + виробник мерседес
select * from cars.cars where car_engineCapacity < 3 and car_producer like "mer%";
#двигун більше 2л + сили більше 250
select * from cars.cars where car_enginePover > 250 and car_engineCapacity > 2;        
#сили більше 250  + виробник бмв
select * from cars.cars where car_enginePover > 250 and car_producer like "b_W";
