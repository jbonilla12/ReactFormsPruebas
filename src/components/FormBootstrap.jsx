import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormBootstrap = () => {
  return (
    <Form>
      <h2>Nuevo</h2>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">Liga Española</option>
          <option value="2">Liga Italiana</option>
          <option value="3">Liga Alemana</option>
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
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default FormBootstrap