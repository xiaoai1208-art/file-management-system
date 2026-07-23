const express = require('express')
const cors = require('cors')

const db = require('./database')


const app = express()


app.use(cors())

app.use(express.json())


const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// GET all notes

app.get('/api/notes', (req, res) => {

  db.all(
    'SELECT * FROM notes',
    [],
    (err, rows) => {

      if (err) {

        return res.status(500).json(err)

      }


      res.json(rows)

    }
  )

})





// CREATE note

app.post('/api/notes', (req, res) => {


  const {
    title,
    content
  } = req.body



  db.run(

    `
    INSERT INTO notes(
      title,
      content,
      created_at,
      updated_at
    )
    VALUES(
      ?,
      ?,
      datetime('now','localtime'),
      datetime('now','localtime')
    )
    `,

    [
      title,
      content
    ],


    function(err) {


      if (err) {

        return res.status(500).json(err)

      }


      res.json({
 id:this.lastID,
 title,
 content,
 created_at: new Date(),
 updated_at: new Date()
})


    }

  )


})






// UPDATE note

app.put('/api/notes/:id', (req, res) => {


  const id = req.params.id


  const {
    title,
    content
  } = req.body



  db.run(

    `
    UPDATE notes
    SET
      title=?,
      content=?,
      updated_at=datetime('now','localtime')
    WHERE id=?
    `,

    [
      title,
      content,
      id
    ],


    (err) => {


      if (err) {

        return res.status(500).json(err)

      }


      res.json({

        message: 'Note updated'

      })


    }

  )


})







// DELETE note

app.delete('/api/notes/:id', (req, res) => {


  const id = req.params.id



  db.run(

    'DELETE FROM notes WHERE id=?',

    [
      id
    ],


    (err) => {


      if (err) {

        return res.status(500).json(err)

      }


      res.json({

        message: 'Note deleted'

      })


    }

  )


})







app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  )

})