import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap"

export function DashBoard(props) {
  let solicitados = props.solicitados;
  let pendientes = props.pendientes;
  let entregados = props.entregados;
  return (
    <>
        <Card className='px-4 my-5' style={{ width: '30rem'}}>
                <Card.Body className='font-weigh-light'>
                  <Card.Title>DashBoard</Card.Title>
                  <Card.Text>
                    <Container>
                      <Row>
                        <Col xs='4' className='bg-Black'>
                          Paquetes entregados
                          <h4>
                            {entregados}
                          </h4>
                        </Col>
                        <Col xs='4' className='bg-White'>
                          Paquetes solicitados
                          <h4>
                            {solicitados}
                          </h4>
                        </Col>
                        <Col xs='4' className='bg-Dark'>
                          Paquetes pendientes
                          <h4>
                            {pendientes}
                          </h4>
                          </Col>
                      </Row>
                    </Container>
                  </Card.Text>
                </Card.Body>
              </Card>
    </>
  );
}