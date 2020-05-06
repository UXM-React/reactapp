import React from 'react';
import './tables.css';
import { MDBDataTable } from 'mdbreact';

const tables = () => {
    const data = require("./tables.json");
    return (
        <html>
            <body>
                <h2 align="center">DATA TABLE</h2>
                <div class="container">
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                    />
                </div>
            </body>
        </html>
    );
}
export default tables;