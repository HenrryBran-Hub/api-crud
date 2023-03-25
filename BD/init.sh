docker run --name mysql-db -p 3307:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql-db --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --default-authentication-plugin=mysql_native_password

docker inspect -f '{{ .Name}} {{range.NetworkSettings.Networks}} {{.IPAddress}} {{end}}' $(docker ps -aq)