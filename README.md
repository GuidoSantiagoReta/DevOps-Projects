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

## Devops-project-01  (Terraform, AWS EC2)

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

## Devops-project-02  (SonarCloud, Node.js, Express)

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

- Asegúrate de reemplazar `GH_TOKEN` y `SONAR_TOKEN` en el archivo de configuración del pipeline con los nombres de los secrets que has creado en GitHub...
- Este pipeline está configurado para ejecutarse en la rama `main`. Si tu rama principal tiene un nombre diferente, asegúrate de actualizar el archivo de configuración del pipeline.

### Capturas
