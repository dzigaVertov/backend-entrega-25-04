- [Correr el servidor de forma local](#org58310a4)
  - [Para iniciar el servidor:](#org7c2ece4)
  - [Iniciar el servidor con nodemon para desarrollo:](#org83549fe)
  - [El servidor intenta conectarse a una base de datos, por defecto en alguna de urls:](#org7faff68)
    - [mongodb://127.0.0.1:27017/ecommerce](#orgdd1ff29)
    - [mongodb://localhost:27017/ecommerce](#org7d7ee70)
  - [Se puede cambiar el string de conexión a la base de datos en src/config/mongoose.config.js](#org2be4b43)
- [Notas a esta entrega](#org9042082)
  - [Agregado Passport para autenticación](#orgfad7f01)
  - [Agregada estrategia de autenticación local con Passport](#org9a4a16c)
  - [Agregado hasheo de contraseña para autenticación local con bcrypt](#org3798bc5)
  - [Agregada estrategia de autenticación con github](#orgae29571)



<a id="org58310a4"></a>

# Correr el servidor de forma local


<a id="org7c2ece4"></a>

## Para iniciar el servidor:

```bash
npm start
```


<a id="org83549fe"></a>

## Iniciar el servidor con nodemon para desarrollo:

```bash
npm test
```


<a id="org7faff68"></a>

## El servidor intenta conectarse a una base de datos, por defecto en alguna de urls:


<a id="orgdd1ff29"></a>

### mongodb://127.0.0.1:27017/ecommerce


<a id="org7d7ee70"></a>

### mongodb://localhost:27017/ecommerce


<a id="org2be4b43"></a>

## Se puede cambiar el string de conexión a la base de datos en src/config/mongoose.config.js


<a id="org9042082"></a>

# Notas a esta entrega


<a id="orgfad7f01"></a>

## Agregado Passport para autenticación


<a id="org9a4a16c"></a>

## Agregada estrategia de autenticación local con Passport


<a id="org3798bc5"></a>

## Agregado hasheo de contraseña para autenticación local con bcrypt


<a id="orgae29571"></a>

## Agregada estrategia de autenticación con github
