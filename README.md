#Building Docker
docker build -t arzerin/app:v1 .

#Testing before Run
docker run -p 8080:8080 arzerin/app:v1

#Check if the above command is running the project, container id will be shown with app name
docker ps

docker stop container_id

#Pushing to Dockerhub after found everything OK
docker push arzerin/app:v1

#Checking if it is pushed in DokerHub
docker images
