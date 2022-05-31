import dotenv from 'dotenv'
dotenv.config()

export const options = {
    client: "mysql",
    connection: {
      host: "localhost",
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: "desafioCoderhouse16",
    },
  };

