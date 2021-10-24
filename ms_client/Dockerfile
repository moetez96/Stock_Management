FROM java:8
EXPOSE 8085
ADD /target/client-0.0.1-SNAPSHOT.jar client.jar
ENTRYPOINT ["java", "-jar", "client.jar"]