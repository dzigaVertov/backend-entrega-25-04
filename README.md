# Correr el servidor de forma local

-   Para iniciar el servidor:

    ```bash
    npm start
    ```

-   Iniciar el servidor con nodemon para desarrollo:

    ```bash
    npm test
    ```

-   El servidor intenta conectarse a una base de datos, por defecto en alguna de urls:

    ```bash
    mongodb://127.0.0.1:27017/ecommerce
    
    mongodb://localhost:27017/ecommerce
    ```

-   Se puede cambiar el string de conexión a la base de datos en

    ```bash
    src/config/mongoose.config.js   
    ```


# Notas a esta entrega

-   Agregado Passport para autenticación

-   Agregada estrategia de autenticación local con Passport

-   Agregado hasheo de contraseña para autenticación local con bcrypt

-   Agregada estrategia de autenticación con github
