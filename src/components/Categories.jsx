import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
function Categories(props) {


    const getUniqueListByCategory = (arr, key) => {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    return (
        <>
            <Row className="my-4">
                {getUniqueListByCategory(props.products, 'type').map((cate, index) => (
                <Col key={index}>
                    <Card style={{ width: '10rem', cursor: 'pointer', textAlign: 'center' }} onClick={async ()=> {await props.categoryHandler(cate); props.filterHandler()}}>
                        <Card.Body>
                            <Card.Title>{cate.type}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>))}
            </Row>
        </>
    );
}

export default Categories;