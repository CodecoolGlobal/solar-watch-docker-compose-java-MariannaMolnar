FROM maven:3.8.3-openjdk-17

WORKDIR /app

# Copy the backend source and pom.xml
COPY ./src ./src
COPY pom.xml ./

# Build the backend app
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/solar-watch-0.0.1-SNAPSHOT.jar"]