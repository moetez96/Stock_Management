FROM java:8
EXPOSE 8083
ADD /target/order-0.0.1-SNAPSHOT.jar order.jar
ENTRYPOINT ["java", "-jar", "order.jar"]