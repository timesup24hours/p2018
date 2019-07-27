import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
// import 'ag-grid-community/dist/styles/ag-theme-dark.css';
// import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './index.scss';

function suppressEnter(params: any): boolean {
  let KEY_ENTER = 13;
  var event = params.event;
  var key = event.which;
  var suppress = key === KEY_ENTER;
  return suppress;
}

class AGGrid extends Component<any, any> {
  private constructor(props: any) {
    super(props);
    this.state = {
      columnDefinition: {
        field: 'athlete',
        // set the column to use text filter
        filter: 'agTextColumnFilter',
        // pass in additional parameters to the text filter
        filterParams: {
          clearButton: true,
          applyButton: true,
          debounceMs: 200
        }
      },
      columnDefs: [
        // {
        //   headerName: 'Make',
        //   field: 'make',
        //   sortable: true,
        //   filter: true,
        //   checkboxSelection: true,
        //   sort: 'desc',
        //   suppressKeyboardEvent: suppressEnter
        // },
        // {
        //   headerName: 'Model',
        //   field: 'model',
        //   sortable: true,
        //   filter: true,
        //   checkboxSelection: true
        // },
        // {
        //   headerName: 'Price',
        //   field: 'price',
        //   sortable: true,
        //   filter: true,
        //   checkboxSelection: true
        // },
        {
          field: 'athlete',
          width: 200,
          suppressKeyboardEvent: suppressEnter,
          filter: 'agTextColumnFilter'
        },
        { field: 'age', filter: 'agNumberColumnFilter' },
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport', filter: false },
        { field: 'gold', filter: true },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' }
      ],
      rowData: [],
      defaultColDef: {
        width: 100,
        editable: true,
        sortable: true,
        filter: true
      },
      rowSelection: 'multiple',
      suppressKeyboardEvent: function(params: any) {
        let KEY_A = 65;
        let KEY_C = 67;
        let KEY_V = 86;
        let KEY_D = 68;
        let KEY_PAGE_UP = 33;
        let KEY_PAGE_DOWN = 34;
        let KEY_TAB = 9;
        let KEY_LEFT = 37;
        let KEY_UP = 38;
        let KEY_RIGHT = 39;
        let KEY_DOWN = 40;
        let KEY_F2 = 113;
        let KEY_BACKSPACE = 8;
        let KEY_ESCAPE = 27;
        let KEY_SPACE = 32;
        let KEY_DELETE = 46;
        let KEY_PAGE_HOME = 36;
        let KEY_PAGE_END = 35;
        var event = params.event;
        var key = event.which;
        var keysToSuppress = [
          KEY_PAGE_UP,
          KEY_PAGE_DOWN,
          KEY_TAB,
          KEY_F2,
          KEY_ESCAPE
        ];
        var editingKeys = [
          KEY_LEFT,
          KEY_RIGHT,
          KEY_UP,
          KEY_DOWN,
          KEY_BACKSPACE,
          KEY_DELETE,
          KEY_SPACE,
          KEY_PAGE_HOME,
          KEY_PAGE_END
        ];
        if (event.ctrlKey || event.metaKey) {
          keysToSuppress.push(KEY_A);
          keysToSuppress.push(KEY_V);
          keysToSuppress.push(KEY_C);
          keysToSuppress.push(KEY_D);
        }
        if (!params.editing) {
          keysToSuppress = keysToSuppress.concat(editingKeys);
        }
        var suppress = keysToSuppress.indexOf(key) >= 0;
        return suppress;
      }
      // rowData: [
      //   {
      //     make: 'Toyota',
      //     model: 'Celica',
      //     price: 35000
      //   },
      // ]
    };
  }
  private gridApi: any;
  private gridColumnApi: any;

  public componentDidMount(): void {
    // fetch('https://api.myjson.com/bins/ly7d1')
    //   .then(result => result.json())
    //   .then(rowData => this.setState({ rowData }));
  }

  // private onButtonClick = (e: any): void => {
  //   const selectedNodes = this.gridApi.getSelectedNodes();
  //   const selectedData = selectedNodes.map((node: any) => node.data);
  //   const selectedDataStringPresentation = selectedData
  //     .map((node: any) => node.make + ' ' + node.model)
  //     .join(', ');
  // };

  private onGridReady = (params: any): void => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data: any) => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  private onCellKeyDown = (e: any): void => {
    console.log('onCellKeyDown', e);
  };

  private onCellKeyPress = (e: any): void => {
    console.log('onCellKeyPress', e);
    let keyPressed = e.event.key;
    console.log('Key Pressed = ' + keyPressed);
    if (keyPressed === 's') {
      var rowNode = e.node;
      var newSelection = !rowNode.selected;
      console.log(
        'setting selection on node ' +
          rowNode.data.athlete +
          ' to ' +
          newSelection
      );
      rowNode.setSelected(newSelection);
    }
  };

  public render(): JSX.Element {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          backgroundColor: 'black'
        }}
      >
        <div
          style={{
            color: 'white',
            position: 'absolute',
            top: '70px',
            left: '20px'
          }}
        >
          Hover Header -> Sort, Filter
        </div>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            top: '100px',
            left: '20px'
          }}
        >
          Right Click -> Export, Copy
        </div>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            top: '130px',
            left: '20px'
          }}
        >
          Double Click Field -> Edit
        </div>
        <div
          // className="ag-theme-material"
          className="ag-theme-balham-dark"
          style={{
            height: 'calc(50vh - 50px)',
            width: '60vw',
            position: 'absolute',
            top: 'calc(50% - 50px)',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            // border: '1px solid lightgrey'
          }}
        >
          {/* <button onClick={this.onButtonClick}>Get selected rows</button> */}

          <AgGridReact
            // onGridReady={params => (this.gridApi = params.api)}
            onGridReady={this.onGridReady}
            // rowSelection="multiple"
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            defaultColDef={this.state.defaultColDef}
            onCellKeyDown={this.onCellKeyDown}
            onCellKeyPress={this.onCellKeyPress}
            suppressKeyboardEvent={this.state.suppressKeyboardEvent}
            suppressRowClickSelection={true}
            rowSelection={this.state.rowSelection}
            enableRangeSelection={true}
            // columnDefinition={this.state.columnDefinition}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default AGGrid;
