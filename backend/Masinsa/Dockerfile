#base Docker image
FROM openjdk:8
LABEL maintainer = "masinsa.com"
ADD target/masinsa_project-0.0.1-SNAPSHOT.jar masinsa-docker.jar
ENTRYPOINT ["java","-jar", "masinsa-docker.jar"]