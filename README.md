# Repositorio dedicado a proyectos Devops / DevSecOps





## Devops-project-01  (Terraform, AWS EC2)

__Crear infraestructura con terraform y AWS EC2__

### Documentación de Levantamiento de Instancia EC2 con Terraform

Este documento describe el proceso para levantar una instancia EC2 en AWS utilizando Terraform. Se utilizarán los comandos `terraform init`, `terraform plan`, y `terraform apply` para realizar esta tarea.

### Preparación

Antes de comenzar, asegúrate de tener lo siguiente:

- Terraform instalado en tu sistema. Puedes descargarlo desde el [sitio web oficial de Terraform](https://www.terraform.io/downloads.html).
- Tu CLI de AWS configurado con las credenciales adecuadas y la región correcta. Consulta la [documentación de AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) para más detalles.
- Un archivo de configuración de Terraform (`.tf`) con el contenido específico para tu instancia EC2. A continuación, se muestra un ejemplo de cómo podría verse este archivo:

```
provider "aws" {
    region ="us-east-1"
}

resource "aws_instance" "example"{
    ami = "ami-0a3c3a20c09d6f377"
    instance_type ="t2.micro"

    tags={
    Name ="devops-project-01"
}
}
```
### Proceso de eliminación
Finalmente relizamos el destroy por terminal con el comando ` terraform destroy`

__Consideraciones__:
- Revisión del Plan de Destrucción: Al igual que con el plan de aplicación, es crucial revisar el plan de destrucción para asegurarte de que Terraform tiene entendido correctamente qué recursos eliminar.
Seguridad: Asegúrate de que no haya datos sensibles o aplicaciones en ejecución en la instancia EC2 antes de proceder con la eliminación.
- Costos: La eliminación de recursos puede liberar recursos de computación y almacenamiento, reduciendo así los costos asociados.

__Conclusión__:
Con estos pasos, has aprendido cómo levantar y eliminar una instancia EC2 en AWS utilizando Terraform. Este proceso te permite gestionar eficientemente tus recursos de infraestructura como código, facilitando la creación, modificación y eliminación de recursos según sea necesario.
### Capturas:
![terraform-ec2-instance](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/1940c89b-ba2d-4da5-9eb3-e150414ba9aa)
![image](https://github.com/GuidoSantiagoReta/DevOps-Projects/assets/46303885/c9cd4e78-f210-4dc8-86dc-cec4bd5f816b)


