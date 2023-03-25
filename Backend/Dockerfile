# Establece la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo de la aplicación
WORKDIR /app

# Copia el archivo `package.json` y `package-lock.json` al directorio de trabajo de la aplicación
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 9000
EXPOSE 9000

# Establece las variables de entorno necesarias para la conexión a la base de datos
ENV DB_HOST=mysql-db
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=root
ENV DB_DATABASE=practica_1_ayd1_g2

# Inicia la aplicación
CMD ["npm", "start"]


