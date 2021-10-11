import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function ProductsToShow(props) {
   return (
      <>
         <Row className="d-flex justify-content-center mt-5">
            {!props.products.length && (
               <Col xs={6}>
                  <h2>No Items to show</h2>
               </Col>
            )}
            {props.products.map((product, index) => (
               <Col key={index} xs={6} className="mt-4">
                  <Card style={{ width: "18rem" }}>
                     <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>Color: {product.color}</Card.Text>
                        <Button variant="secondary" size="lg">
                           {product.price} $
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </>
   );
}

export default ProductsToShow;
