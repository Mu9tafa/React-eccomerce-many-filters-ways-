import React from 'react';
import { Form } from 'react-bootstrap';


function ColorCheck(props) {

    return (

        <Form className="my-5" id="color">
            <Form.Check aria-label="option 1" label='color k' value='color K' onClick={async (e) => { await props.colorHandler(e); props.filterHandler() }} />
            <Form.Check aria-label="option 1" label='color X' value='color X' onClick={async (e) => { await props.colorHandler(e); props.filterHandler() }} />
            <Form.Check aria-label="option 1" label='color Y' value='color Y' onClick={async (e) => { await props.colorHandler(e); props.filterHandler() }} />
            <Form.Check aria-label="option 1" label='color L' value='color L' onClick={async (e) => { await props.colorHandler(e); props.filterHandler() }} />
            <Form.Check aria-label="option 1" label='color Z' value='color Z' onClick={async (e) => { await props.colorHandler(e); props.filterHandler() }} />
            <br/>
            <button type='reset' className="btn btn-danger" onClick={props.resetColorsHandler}>Reset Colors</button>
        </Form>

    );
}

export default ColorCheck;