Pruebas y configuración
Iniciar el servidor individual en 8080

npm run dev
pm2 start src/index.js --name="server1" --watch -- --port=8080

Redirigir todas las consultas a /api/random a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.

npm run dev -- --MODE=CLUSTER --PORT=8081
pm2 start src/index.js --name="server1" --watch -i max -- --port=8081

Modificar la configuración para que todas las consultas a /api/random sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

npm run dev -- --MODE=FORK --PORT=8080
pm2 start src/index.js --name="server1" --watch -- --port=8080

npm run dev -- --MODE=CLUSTER --PORT=8082
pm2 start src/index.js --name="server2" --watch -- --port=8082

npm run dev -- --MODE=CLUSTER --PORT=8083
pm2 start src/index.js --name="server3" --watch -- --port=8083

npm run dev -- --MODE=CLUSTER --PORT=8084
pm2 start src/index.js --name="server4" --watch -- --port=8084

npm run dev -- --MODE=CLUSTER --PORT=8085
pm2 start src/index.js --name="server5" --watch -- --port=8085

localhost (8080)

localhost/api/random (8082, 8083, 8084, 8085)