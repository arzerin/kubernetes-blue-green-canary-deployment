#Building Docker
docker build -t arzerin/app:v1 .

#Testing before Run
docker run -p 8080:8080 arzerin/app:v1

#Pushing to Dockerhub after found everything OK
docker push arzerin/app:v1
