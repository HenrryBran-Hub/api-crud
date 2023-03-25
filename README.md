# api-crud

## CREAR IMAGEN/CONTENEDOR DE DOCKER DE LA BASE DE DATOS

para ingresar a la carpeta
1.cd BD 
para verificar que este el archivo dockerfile
2.ls
para crear la imagen de nuestra base de datos en mysql 
3. docker build -t mysql-db .
para cargar la imagen de mysql en el puerto 3307 y configuracionde la base de datos 
4.docker run --name mysql-db -p 3307:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql-db --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --default-authentication-plugin=mysql_native_password
verificamos que este ejecutandose el contenedor
5. docker ps -a
si no esta ejecutandose lo iniciamos
6.docker start mysql-db

## CREAR IMAGEN/CONTENEDOR DE DOCKER DE API

para ingresar a la carpeta de nuestra api
regresamos a la carpeta principal
1. cd ..
ingresamos a el backend
2. cd Backend
cramos la imagen de nuestra api
3. docker build -t my-node-app .
montamos nuestra imagen y hacemos que se conecte a la imagen de nuestro 
4.docker run -d -p 9001:9000 --name my-node-app --link mysql-db:mysql my-node-app 
verificamos que este ejecutandose el contenedor
5. docker ps -a
si no esta ejecutandose lo iniciamos
6.docker start my-node-app

## CREAR IMAGEN/CONTENEDOR DE DOCKER DEL CRUD

para ingresar a la carpeta de nuestra crud
regresamos a la carpeta principal
1. cd ..
ingresamos a el backend
2. cd Frontend
3. cd crud
cramos la imagen de nuestra api
4. docker build -t my-react-app .
montamos nuestra imagen y hacemos que se conecte a la imagen de nuestro 
5.docker run -d -p 3000:3000 --name my-react-app --link my-node-app:my-node-app my-react-app
verificamos que este ejecutandose el contenedor
5. docker ps -a
si no esta ejecutandose lo iniciamos
6.docker start my-react-app
