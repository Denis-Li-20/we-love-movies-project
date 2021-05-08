const path = require("path");

if (process.env.USER) require("dotenv").config();

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://ischpnqw:gcSXFs8i76OqxA_CV-4V83v4MzB6n21C@queenie.db.elephantsql.com:5432/ischpnqw",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
