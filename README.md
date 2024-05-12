# Repositorio dedicado a proyectos Devops / DevSecOps

## Índice

- [Devops-project-01](#devops-project-01--terraform-aws-ec2)
  - [Documentación de Levantamiento de Instancia EC2 con Terraform](#documentación-de-levantamiento-de-instancia-ec2-con-terraform)
  - [Preparación](#preparación)
  - [Proceso de eliminación](#proceso-de-eliminación)
  - [Consideraciones](#consideraciones)
  - [Conclusión](#conclusión)
  - [Capturas](#capturas)
- [Devops-project-02](#devops-project-02--configuración-de-sonarcloud-en-un-proyecto-node-con-express)
  - [Requisitos](#requisitos)
  - [Pasos para configurar SonarCloud](#pasos-para-configurar-sonarcloud)
  - [Adicionales](#adicionales)
  - [Capturas](#capturas)
- [Devops-project-03](#devops-project-03--configuración-de-terraform-para-aws-s3-bucket)
  - [Configurar un bucket S3 en AWS utilizando Terraform ](#objetivo) 
  - [Requisitos](#requisitos)
  - [Pasos para configurar Terraform en Windows o Linux](#pasos-para-configurar-terraform-en-windows-o-linux)
    - [Instalación de Chocolatey como Administrador PowerShell](#instalación-de-chocolatey-como-administrador-powershell)
    - [Instalación de Terraform](#instalación-de-terraform)
    - [Configuración de las Credenciales AWS](#configuración-de-las-credenciales-aws)
    - [Configuración de AWS CLI](#configuración-de-aws-cli)
    - [Crear el archivo `main.tf`](#crear-el-archivo-maintf)
    - [Instalar una instancia S3](#instalar-una-instancia-s3)
- [Devops-project-04](#devops-project-04--practica-devops-crear-app-node-js)
  - [Descripción del Proyecto - App Node.js y pipeline (CI) para automatizar compilación y test](#descripción-del-proyecto)
  - [Requisitos](#requisitos)
  - [Pasos para crear la aplicación Node.js](#pasos-para-crear-la-aplicación-node-js)
  - [Creación de un Pipeline de Integración Continua (CI)](#creación-de-un-pipeline-de-integración-continua-ci)
  - [Creación de Tests con Jest](#creación-de-tests-con-jest)
  - [Capturas](#capturas)



# Devops-project-01  (Terraform, AWS EC2)

### Documentación de Levantamiento de Instancia EC2 con Terraform

Este documento describe el proceso para levantar una instancia EC2 en AWS utilizando Terraform...

### Preparación

Antes de comenzar, asegúrate de tener lo siguiente...

### Proceso de eliminación

Finalmente realizamos el destroy por terminal con el comando `terraform destroy`.

### Consideraciones

- Revisión del Plan de Destrucción...
- Seguridad...
- Costos...

### Conclusión

Con estos pasos, has aprendido cómo levantar y eliminar una instancia EC2 en AWS utilizando Terraform...

### Capturas

![terraform-ec2-instance](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/1940c89b-ba2d-4da5-9eb3-e150414ba9aa)
![image](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/c9cd4e78-f210-4dc8-86dc-cec4bd5f816b)

# Devops-project-02 (SonarCloud, Node.js, Express)

### Documentación de Configuración de SonarCloud

Este documento describe el proceso para configurar SonarCloud en un proyecto Node.js utilizando Express...

### Requisitos

- Tener una cuenta en SonarCloud...
- Un token de SonarCloud generado desde la página de seguridad de tu cuenta en SonarCloud...
- Un token de GitHub generado desde la configuración de tu repositorio en GitHub...

### Pasos para configurar SonarCloud

1. **Crear una organización en SonarCloud**...
2. **Generar tokens de SonarCloud y GitHub**...
3. **Configurar el pipeline de SonarCloud en GitHub Actions**...
4. **Ejecutar el pipeline**...

### Adicionales
- Configurar el archivo de configuración del proyecto:
Una vez creado el proyecto, SonarCloud generará un archivo de configuración específico para tu proyecto. Este archivo puede ser sonar-project.properties o sonar-project.xml, dependiendo de la configuración predeterminada de SonarCloud.
- Descarga este archivo de configuración y colócalo en la raíz de tu repositorio de código fuente o en el directorio base especificado en tu workflow de GitHub Actions.
- Asegúrate de reemplazar `GH_TOKEN` y `SONAR_TOKEN` en el archivo de configuración del pipeline con los nombres de los secrets que has creado en GitHub...
- Este pipeline está configurado para ejecutarse en la rama `main`. Si tu rama principal tiene un nombre diferente, asegúrate de actualizar el archivo de configuración del pipeline.

### Capturas
![image](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/ccc52ba9-648f-4c9b-9e86-310375abb775)
![image](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/19de9c99-10ed-4011-8604-a87dc849bddb)


# Devops-project-03 (Configuración de Terraform para AWS S3 Bucket)


## Objetivo
Configurar un bucket S3 en AWS utilizando Terraform.

## Requisitos
- Terraform instalado en Windows o Linux.
- Cuenta de AWS con acceso IAM o root de Academy.
- Acceso a un repositorio de proyectos DevOps.

## Pasos para configurar Terraform en Windows o Linux

### Instalación de Chocolatey como Administrador PowerShell

1. Abre PowerShell como administrador.
2. Ejecuta el siguiente comando para permitir la ejecución de scripts:

`powershell Set-ExecutionPolicy Bypass -Scope Process -Force`

3. Establece el protocolo de seguridad para permitir la descarga de scripts:

```
powershell [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072

```

### Instalación de Terraform
1. Utiliza Chocolatey para instalar Terraform especificando la versión deseada:

2. Sigue las instrucciones para ingresar tu `AWS Access Key ID`, `AWS Secret Access Key`, y selecciona la región predeterminada.

### Configuración de AWS CLI

1. Descarga e instala el AWS CLI desde el siguiente enlace:
   [AWS CLI](https://awscli.amazonaws.com/AWSCLIV2.msi).

2. Configura AWS CLI siguiendo los mismos pasos que en el paso anterior.

### Crear el archivo `main.tf`

1. Crea un nuevo archivo llamado `main.tf` en tu directorio de trabajo.
2. Agrega el código de Terraform para crear un bucket S3, similar al que proporcionaste, pero asegúrate de reemplazar los valores de `bucket`, `Name`, y `Environment` según sea necesario.

### Instalar una instancia S3

1. Ejecuta `terraform init` para inicializar tu directorio de Terraform.
2. Ejecuta `terraform plan` para ver un resumen de lo que Terraform hará.
3. Ejecuta `terraform apply` para crear el bucket S3 en AWS.
4. Una vez que hayas terminado, puedes eliminar los recursos creados con `terraform destroy`.

### Capturas
![image](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/e9671465-ed95-45b9-8a12-c7fdb3ed7109)

# Devops-project-04 (Crear App Node.js y pipeline de integración continua (CI) para automatizar la compilación y prueba de la aplicación).

## Descripción del Proyecto

Este proyecto consiste en crear una aplicación Node.js simple, configurarla para su desarrollo y despliegue, y establecer un pipeline de integración continua (CI) para automatizar la compilación y prueba de la aplicación.

## Requisitos

- Node.js instalado.
- Git instalado.
- Acceso a un repositorio de proyectos DevOps.

## Pasos para crear la aplicación Node.js

1. **Inicializar el proyecto**: Ejecuta `npm init` para crear un nuevo proyecto Node.js.
2. **Crear el punto de entrada**: Crea un archivo `app.js` como punto de entrada de la aplicación.
3. **Instalar dependencias**: Instala Express y Nodemon como dependencias necesarias con `npm install express nodemon`.
4. **Configurar el servidor**: Requiere Express en `app.js` y configura un servidor básico.
5. **Realizar peticiones**: Realiza una petición para comprobar que el servidor está funcionando correctamente.
6. **Ignorar archivos innecesarios**: Crea un archivo `.gitignore` para evitar subir archivos innecesarios al repositorio remoto.
7. **Subir al repositorio**: Realiza un `git add` de los archivos en la rama específica y haz los commits correspondientes.

## Creación de un Pipeline de Integración Continua (CI)

1. **Configurar `nodejs-ci.yml`**: Define las etapas y trabajos que se ejecutarán en el pipeline CI/CD.
2. **Especificar la imagen Docker**: Usa `image: node:14` para definir la imagen Docker que se utilizará.
3. **Definir las etapas**: Define las etapas del pipeline con `stages`.
4. **Antes de los trabajos**: Define comandos que se ejecutan antes de todos los trabajos con `before_script`.
5. **Compilación y pruebas**: Define trabajos para la etapa de compilación (`build`) y pruebas (`test`).

## Creación de Tests con Jest

1. **Instalar dependencias de desarrollo**: Instala Jest, Supertest, y Cross-env con `npm install --save-dev jest supertest cross-env`.
2. **Escribir tests**: Escribe tests para tu aplicación utilizando Jest.
3. **Ejecutar tests**: Ejecuta `npm test` para probar el funcionamiento de tu aplicación.

## Capturas:


## probando pipeline