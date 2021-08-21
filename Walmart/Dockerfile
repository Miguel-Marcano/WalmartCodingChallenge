FROM openjdk:11
ADD target/walmart-demo.jar	walmart-demo.jar
ENV TRAINING_DB_ENDPOINT="datasempai.cl65bcdmxgon.us-east-1.rds.amazonaws.com"
ENV TRAINING_DB_USERNAME="datasempai"
ENV TRAINING_DB_PASSWORD="p4ssw0rd"
EXPOSE 9028
ENTRYPOINT ["java", "-jar", "walmart-demo.jar"]