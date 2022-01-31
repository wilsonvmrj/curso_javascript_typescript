# Comandos 

```
# Docker database 
docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mariadb

#Criar o banco com o nome de    

# Criando as migations 
npx sequelize migration:create --name=alunos

# Rodando as migrations 
npx squelize db:migrate


```

