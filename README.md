# Proyecto back-end BDA
### NodeJS + React

Primero de todo hacemos un update y upgrade al sistema
```bash 
sudo apt update
```
```bash  
sudo apt upgrade
```

Para la ejecucion del codigo necesitamos instalar nodejs, version 21.1.0 !!!

```bash  
sudo apt-get install nodejs
```

Instalaremos npm

```bash  
sudo apt install npm
```

Despues de la instalacion hacems un update el sistema

```bash  
sudo apt update
```

Cambiaremos la version de nodejs a la 21.1.0

```bash  
nvm install v21.1.0
```

```bash  
nvm use v21.1.0
```

Una vez instalado y cambiado de verion instalaremos todos las librerias utilizadas.

```bash 
npm install
```

### Hay que tener en cuenta que hay que utilizar una base de datos propia
##### Para cambiar la base de datos hay que ir al archivo db.js

# MongoDB Cluster + Docker Compose

Levantamos los contenedores
```bash
docker compose up -d
```

En el contenedor pricipal en este caso <strong>mongo1</strong> iniciamos la replica set del cluster
```bash
docker exec -it mongo1 mongosh --eval "rs.initiate({
 _id: \"myReplicaSet\",
 members: [
   {_id: 0, host: \"mongo1\"},
   {_id: 1, host: \"mongo2\"},
   {_id: 2, host: \"mongo3\"}
 ]
})"
```

Ahora comprobamos que todo se a configurado correctamente 
```bash
docker exec -it mongo1 mongosh --eval "rs.status()"
```

Y ya tendremos el cluster de mongodb funcionado. Para comprobar que funciona tiraremos el nodo principal.
```bash
docker stop mongo1
```

Comprobaremos que sigue funcionando.
```bash
docker exec -it mongo2 mongosh --eval "rs.status()"
```

Para la ejecucion del back-end entraremos en la carpeta src/ 

```bash  
cd code/node_api-auth-task/src
```

Y ejecutaremos el siguente comando

```bash  
npm run dev
```

Para la ejecucion de front-end entraremos en la carpera client/

```bash  
cd code/node_api-auth-task/client
 ```

Y ejecutaremos el siguente comando

```bash  
npm run dev
```





