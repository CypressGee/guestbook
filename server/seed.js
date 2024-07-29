import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });


db.query(`
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title TEXT,
    developer TEXT,
    year INT
);
  
INSERT INTO games (title, developer, year) VALUES
('Starfield','Bethesda', 2023),
('Dead By Daylight','505 Games',2016),
('Hogwarts Legacy','Avalanche Software',2023),
('Fallout 4'.'Bethesda', 2015),
('Jedi Survivor','EA',2023);`);

