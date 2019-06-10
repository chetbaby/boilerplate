import { Pool } from ('pg');
import { myURI } from ('../config')

const pool = new Pool({
  connectionString: myURI,
})

const createDB = (req, res, next) => {
  const query = ``;

  pool.query(query)
    .then(res => {
      console.log('db initialized...')
    })
    .catch(err => next(err));
}

const URI = process.env.PG_URI || myURI;

export { pool, createDB };
