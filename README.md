# EasyGenerator-Assessment
This repository contains a web application that seamlessly integrates authentication functionality, and CRUD operations for users. The application leverages a full-stack architecture, combining front-end, back-end, and docker technologies.

## Key Features:
- Authentication: Secure user authentication ensures a personalized experience.
- CRUD Operations: Implement Create, Read, Update, and Delete operations to manage users.
  
## Technology Stack
![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
 ![Nest JS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
)
## Environment Setup
| Tools/Technologies | Version Used |
| --- | --- |
| React JS | 18.2.0 |
| Mongo DB | 6.3.0 |
| Nest JS | 10.2.1 |
| Docker | 24.0.7 |

## Local Machine Setup
- Open Terminal and type
  ```
  git clone [https://github.com/wajeehamushtaq/EasyGenerator-Assessment.git](https://github.com/wajeehamushtaq/EasyGenerator-Assessment.git)
  ```
### For Backend setup
- 
  ```
  cd server
  ```
- Inside the backend folder, create `.env` file then copy and paste the envs from `.env.example` file into it
- Install dependencies
  ```
  npm install
  ```
- Run Server
  ```
  npm run start:dev
  ```
  
  ### For Frontend setup
- 
  ```
  cd client
  ```
- Install dependencies
  ```
  npm install
  ```
- Run
  ```
  npm run dev
  ```
  
## Docker Setup
- After running up the Docker engine, type this command on terminal
  ```
  docker-compose up --build
  ```
- To stop the container
    ```
  docker compose down   
  ```
