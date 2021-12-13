## DogKet

Ths is a website that makes it easier for dog owners to find a dog sitter.

## Contributors:

[Uche Okoroafor](https://github.com/uche-okoroafor)



---

## Built With:

### Frontend

- [React/Typescript](https://reactjs.org/) - The framework used for developing the components and UI.
- [Material UI](https://material-ui.com/) - Javascript framework for styling and CSS compartmentalization.


### Backend

- [Node JS](https://reactjs.org/)/[Express JS](https://expressjs.com/) - Backend used for our API routes.
- [Mongo DB/Atlas](https://www.mongodb.com/) - Database used to store our user and application data.
- [AWS Bucket](https://aws.amazon/) - AWS bucket is used for storing of user profile Image.

---

## Features:

- Filter by location
- Input credit card/ payments
- Browse listings
- Make a booking
- Submit ratings
- Message my dog sitter

---
## Installation:

If you want to run the application locally, follow the instructions below:

1. Clone repository
2. Install Dependencies - Run `npm install` in the root directory and client directory
3. Create a file with the name `.env`
4. Add the application secret key for authentication using `SECRET_KEY` to `.env`
5. Add the application mongo uri `MONGO_LOCAL_URI` to `.env`. Additional information to run mongoDB locally can be found [here](https://docs.mongodb.com/manual/installation/). Alternatively you can use Mongo Atlas [here](https://www.mongodb.com/cloud/atlas).
6. Sign up for [AWS S3](https://aws.amazon.com/s3/) and add `S3_ACCESS_KEY`, `S3_ACCESS_SECRET` and `S3_BUCKET_NAME` to `.env`
7. Final `.env` appear should like below:

```
JWT_SECRET=<Secret key for JWT >
MONGO_LOCAL_URI=<Your mongo uri>
AWS_BUCKET_NAME=<your aws bucket name>
AWS_BUCKET_REGION=<your aws bucket data base region>
AWS_BUCKET_ACCESS_KEY=<  your aws access key>
AWS_BUCKET_SECRET_ACCESS_KEY=< your aws secret access key>
```

9. Run `npm run dev` to start the server on the root directory and `npm start` on client to start the application

---

### Demo

1. Registration. Users will be able to create a new account using their email and password

![Signup Demo](demo/images/signup.png)

2. Dashboard. Here is a description about what a user can expect to see

![Dashboard](demo/images/dashboard.png)
