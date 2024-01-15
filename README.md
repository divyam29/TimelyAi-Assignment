# Assignment
## Software Development Engineer Intern

## Objective

This assignment assesses your technical skills in backend development. The task involves creating a Node.js application with Express and PostgreSQL, including setting up a server, integrating a database, and developing APIs for CRUD operations.

## Deliverables

-  Node.js and Express Server Setup
-  PostgreSQL Database Integration
-  API Development for CRUD Operations
-  API Documentation and Testing

## Table Structure
- `id`: Unique identifier for each post.
- `Caption`: Text of the post.
- `media`: URL or reference to the media attached to the post.
- `altText`: Alternate text in case of error.
- `createdAt`: Time of creation of post.
- `updatedAt`: Time of updation.

```bash
                                      Table "public.posts"
  Column   |           Type           | Collation | Nullable |              Default
-----------+--------------------------+-----------+----------+-----------------------------------
 id        | integer                  |           | not null | nextval('posts_id_seq'::regclass)
 Caption   | character varying(255)   |           | not null |
 media     | character varying(255)   |           | not null |
 altText   | character varying(255)   |           |          |
 createdAt | timestamp with time zone |           | not null |
 updatedAt | timestamp with time zone |           | not null |
Indexes:
    "posts_pkey" PRIMARY KEY, btree (id)
```

## Setup and Run Instructions

Follow these steps to set up and run the application:

Prerequisites: \
The following software components are required to run the application:
- Node.js installation
- npm installation
- PostgreSQL installation

1. Clone the repository:
```bash
git clone https://github.com/divyam29/TimelyAi-Assignment.git
```
2. Navigate to the project directory:
```bash
cd TimelyAi-Assignment/
```
3. Install dependencies:
```bash
npm install
```
4. Configure the PostgreSQL database:
    - Create a database. Give any name of your choice.
    - Update database connection details in the .env file.
    - Variables:
        - `PG_DB`: Database Name
        - `PG_USER`: Postgres User
        - `PG_PASSWORD`: Postgres Password
        - `PG_HOST`: Postgres Host
      
5. Run the application:
```bash
npm run start
```
6. Access the APIs at http://localhost:8000
    - if required, the port can be changed inside the app.js file

7. To see Postman API Docs, import the `Posts.postman_collection.json` file inside the Postman application

## Postman Screenshots
*Get All Posts: Successful Response*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/b3729085-76eb-4656-b37b-519a41152003)

*Get single Post: Successful Response*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/5c32c89d-b162-4154-9e11-869968fdf69b)

*Get single Posts: Not Found*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/37177174-1e8f-4e97-a1c5-790ddc64a027)

*Create a Post: Successful Response*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/2c59e714-87f8-42d8-95c6-00f644f5b0b7)

*Update a Post: Successful Response*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/8f691c93-7955-479c-95d9-7944a37e5a0a)

*Update a Post: Not Found*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/837cf276-db9f-4b79-878a-f0f73e092380)

*Delete a Post: Successful Response*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/158386ec-49ae-48f7-8245-6ff851eaa3dd)

*Delete a Post: Not Found*
![image](https://github.com/divyam29/TimelyAi-Assignment/assets/72745613/a7a1c1db-b5f1-4c73-8ad7-63824c5ff098)

