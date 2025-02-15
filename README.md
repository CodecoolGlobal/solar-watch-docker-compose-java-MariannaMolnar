<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="pictures/sun-logo2.png" alt="Logo" width="100" height="100">
  </a>
<h1 align="center">SolarWatch</h1>

  <p align="center">
    Your daily guide to the sun's journey! Register and log in to explore sunrise and sunset times for cities worldwide.
</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#stopping the containers">Stopping the Containers</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
SolarWatch is a website for getting sunrise and sunset time for cities around the world.  
You can get the data for any date, or you can also request the data for a city between given dates.  
SolarWatch is a Java Spring Boot project with a PostgreSQL database and a Vite React frontend.  
All three components are containerized using Docker for easy deployment and scalability.  

### Built With
- Backend:   
  [![SpringBoot][SpringBoot]][SpringBoot-url]
- Database:  
  [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- Frontend:  
  [![React][React.js]][React-url]
  [![Vite][Vite]][Vite-url]
  [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- Containerization:  
  [![Docker][Docker]][Docker-url]
  [![NGINX][NGINX]][NGINX-url]


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before running the project, ensure you have the following installed:
- Docker, you can install it from this link: https://docs.docker.com/engine/install/
- Docker Compose, you can install it from this link: https://docs.docker.com/compose/install/

Here you find the steps of the installation of our project:
1. Clone the repository
    ```
    git clone https://github.com/CodecoolGlobal/solar-watch-docker-compose-java-MariannaMolnar.git
    cd solar-watch-docker-compose-java-MariannaMolnar
    ```

2. Configure Environment Variables

   To set up your environment variables, simply copy and rename the `.env.example` file to `.env` in the root directory. You can do this using the following terminal command:

    ```bash
    cp .env.example .env
    ```

   Once copied, open the `.env` file and update the values to match your credentials and environment settings. For example:

    ```plaintext
    DATABASE_PASSWORD=your_password
    DATABASE_USERNAME=your_username
    jwtSecret=======================CodeCool==Solar===========================
    jwtExpirationMs=86400000
    API_KEY=your_weather_API_key
    ```

   Make sure that the credentials you provide are secure and appropriate for your environment and to get your API key from The Cat API - [Get your API key][WeatherAPI-url].  
   The jwtSecret should be at least 64 characters long and cannot use "-" or "_". Alternatively, you can also generate one online: https://jwtsecret.com/generate.


3. Run the project with Docker

   Please enter in your terminal the following command:
    ````
    docker-compose up --build
    ````

   This command will:
    - Build and start the PostgreSQL database.
    - Start the Spring Boot backend.
    - Start the Vite React frontend.

   The services will be available at:
   http://localhost

### Usage

Once the services are running, you can access the frontend to interact with the application and the backend API for examining purposes.

Data request is restricted to registered users only, without logging in users are only able to see the landing page, or if they try to request info they will be redirected to the Login page. After successful login users can request sunrise and sunset time for a city:
- for any given date,
- for given dates in a range

This is the landing page for users without login:  
  
![Website Landing Screenshot](pictures/solarwatch-landing1.png)

This is the info page:  
  
![Website Info Screenshot](pictures/solarwatch-solarinfo.png)
  

If you leave the date blank you can get the data for the current date, by checking the checkbox "Use range" you can add an end date and request the data for the given date range.


### Stopping the Containers

To stop running  the containers enter the following command:
````
docker-compose down
````

### Troubleshooting

- Port Conflicts:
  Ensure ports 5432, 8080, and 5173 are not in use by other processes.
- Docker Compose Issues:
  Run docker-compose down and then docker-compose up --build to restart services.

<!-- ROADMAP -->
## Roadmap

- [x] Dockerize project
- [x] Add README
- [ ] Testing
    - [ ] Set up CI/CD pipeline
    - [ ] Increase coverage with unit tests

[SpringBoot]: https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white
[SpringBoot-url]: https://spring.io/projects/spring-boot

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/

[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

[NGINX]: https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white
[NGINX-url]: https://nginx.org/

[WeatherAPI-url]: https://openweathermap.org/api/geocoding-api

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/marianna-molnar-21956289