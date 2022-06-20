Pruebas y configuración
Iniciar el servidor individual en 8080

npm run dev -- --MODE=FORK --PORT=8080
o por defecto 
npm run dev

Redirigir todas las consultas a /api/random a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.

npm run dev -- --MODE=CLUSTER --PORT=8081

Modificar la configuración para que todas las consultas a /api/random sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

npm run dev -- --MODE=FORK --PORT=8080

npm run dev -- --MODE=CLUSTER --PORT=8082

npm run dev -- --MODE=CLUSTER --PORT=8083

npm run dev -- --MODE=CLUSTER --PORT=8084

npm run dev -- --MODE=CLUSTER --PORT=8085

localhost (8080)

localhost/api/random (8082, 8083, 8084, 8085)