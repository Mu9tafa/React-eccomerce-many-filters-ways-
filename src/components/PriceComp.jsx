import React from 'react';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

function PriceComp(props) {

    return (
        <>
            <br />
            <label htmlFor="price">Price filter</label>
            <br />
            <br />
            <div className="px-3">
                <InputRange
                    step={5}
                    maxValue={55}
                    minValue={10}
                    formatLabel={value => `${value} $`}
                    value={props.value}
                    // value={props.priceValue}
                    onChange={async (value) => { await props.priceHandler(value); props.filterHandler() }}
                />
            </div>
        </>
    );
}

export default PriceComp;