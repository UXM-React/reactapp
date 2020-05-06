import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';






var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
},{
    id: 3,
    name: "Product3",
    price: 680
},{
    id: 4,
    name: "Product4",
    price: 40
},{
    id: 5,
    name: "Product4",
    price: 90
},
{
    id: 6,
    name: "Product4",
    price: 40
},{
    id: 7,
    name: "Product4",
    price: 40
},
{
    id: 8,
    name: "Product4",
    price: 40
},
{
    id: 9,
    name: "Product4",
    price: 40
},
{
    id: 10,
    name: "Product4",
    price: 40
},
{
    id: 11,
    name: "Product4",
    price: 40
}
];



class DataTable extends Component {
    constructor(props) {
        super(props);

        
      
      }

      
    
      render() {

        const options = {
            defaultSortName: 'name',
            defaultSortOrder: 'asc',
            prePage: 'Previous',
            nextPage: 'Next',
            sizePerPage: 3
            
          
          };

        return (
          <div >
              <h4>Data Table</h4>
            <BootstrapTable
              data={ products }
              pagination  options={ this.options } search  exportCSV>
              <TableHeaderColumn dataField='id' isKey={ true } dataSort>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price' dataSort>Product Price</TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
      }
}

export default DataTable;


