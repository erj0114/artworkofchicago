const sharp = require('sharp');
const pool = require('./db-connection').pool

// https://github.com/expressjs/multer/
var multer  = require('multer')
var upload = multer()


const getPaintings = (request, response) => {
    pool.query('SELECT * FROM paintings ORDER BY id ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPaintingById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM paintings WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const createPainting = (request, response) => {
    const { name, description, paintingData } = request.body

    sharp(paintingData)
        .resize(320, 240)
        .toFile('output.webp', (err, info) => { });

    pool.query('INSERT INTO paintings (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
        throw error
        }
        response.status(201).send(`Painting added with ID: ${results.insertId}`)
    })
}
  
const updatePainting = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE paintings SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Painting modified with ID: ${id}`)
        }
    )
}
  
const deletePainting = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM paintings WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Painting deleted with ID: ${id}`)
    })
}

  
module.exports = {
    getPaintings,
    getPaintingById,
    createPainting,
    updatePainting,
    deletePainting,
    authenticatePainting
  }
