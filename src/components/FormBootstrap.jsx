import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const FormBootstrap = () => {
  const [liga, setLiga]= React.useState('')
  const ligas = [
    {id:'udsfnjdsnf', nombreLiga:'Liga Española'},
    {id:'udsfkrirkkmtm', nombreLiga:'Liga Italiana'},
    {id:'iksmshyeel', nombreLiga:'Liga Alemana'},
  ]

  const prueba=e=>{
    e.preventDefault()
    console.log(liga)
  }
  return (
    <Form onSubmit={prueba}>
      <h2>Nuevo</h2>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          {
            ligas.map(item=>(
              <option 
              onChange={e=>setLiga(e.target.value)}
              value={item.id}
              key={item.id}>{item.nombreLiga}</option>
            ))
          }
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Barcelona</option>
            <option value="2">Juventus</option>
            <option value="3">Bayern Munich</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Temporada 21-22</option>
            <option value="1">Temporada 20-21</option>
            <option value="1">Temporada 19-20</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">MANGA LARGA</option>
            <option value="2">3/4</option>
            <option value="3"> NORMAL</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">KIY BUSO-SUDADERA</option>
            <option value="2">BUFANDA</option>
            <option value="3">PLAYERA</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="2">PLAYER</option>
            <option value="3">FAN</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="2">FUTBOL</option>
            <option value="3">BASKETBALL</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="2">MACULINO</option>
            <option value="3">FEMENINO</option>
        </Form.Select>
      </Form.Group>
      <FloatingLabel  className="mb-3" controlId="floatingText" label="nombre del producto">
        <Form.Control type="text" placeholder="nombre del producto" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default FormBootstrap