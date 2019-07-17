import React from 'react';

const code = `// makeCallStream.js
makeCallStream
  .pipe(
    map(val => {
      return val.value;
    }),
    flatMap(val => {
      let arr = [];
      this.state.prefStatus.map((item, index) => {
        if (item[Object.keys(item)[0]]) {
          arr.push({ pref: item, text: val });
        }
      });
      return of(arr);
    })
  )
  .subscribe(val => {
    val.map((item, index) => {
      switch (Object.keys(item.pref)[0]) {
        case 'people':
          peopleStream.next({ searchText: item.text });
          break;
        case 'planets':
          planetStream.next({ searchText: item.text });
          break;
        case 'vehicles':
          vehicleStream.next({ searchText: item.text });
          break;
      }
    });
  });

// Later we can push data like :-

makeCallStream.next({ value: 'abc' });
`;

const code1 = `// inputStream.js
inputStream.subscribe(val => {
  this.setState({
    searchText: val.value
  });
});

// Later push new values like :-

onChange= {e => inputBoxStream.next({ value: e.target.value })}
`;

const code2 = `// prefButtonStream.js
prefButtonStream
  .pipe(
    filter(button => {
      let count = 0;
      button.prefStatus.map(
        (item, index) => (item[Object.keys(item)[0]] ? count++ : undefined)
      );
      return count > 1 ? true : button.status ? false : true;
    }),
    filter(button => this.state.searchText !== '')
  )
  .subscribe(button => {
    this.state.prefStatus[button.index][button.pref] = !this.state
      .prefStatus[button.index][button.pref];
    this.setState(
      {
        prefStatus: this.state.prefStatus
      },
      () => makeCallStream.next({ value: this.state.searchText })
    );
  });

// Later we can pass values onClick

onClick={e =>
          prefButtonStream.next({
            prefStatus: this.state.prefStatus,
            status: button.status,
            pref: button.name,
            searchText: this.state.searchText,
            index: button.id
          })

`;

const code3 = `// getDataStream.js
peopleStream
      .pipe(map(val => val.searchText), distinctUntilChanged())
      .subscribe(val => {
        getDataStream.next({ searchText: val, pref: 'people' });
      });

planetStream
  .pipe(map(val => val.searchText), distinctUntilChanged())
  .subscribe(val =>
    getDataStream.next({ searchText: val, pref: 'planets' })
  );

vehicleStream
  .pipe(map(val => val.searchText), distinctUntilChanged())
  .subscribe(val =>
    getDataStream.next({
      searchText: val,
      pref: 'vehicles'
    })
  );

getDataStream
  .pipe(
    flatMap(val => {
      console.log('getting new data', val);
      let outVal = val;
      return fetch(
        'https://swapi.co/api/' + val.pref + '/?search=' + val.searchText
      )
        .then(val => val.json())
        .then(val => of({ pref: outVal.pref, res: val })); // Pasing data downstream for later use
    }),
    catchError(err => {
      return empty();
    })
  )
  .subscribe(val => {
    this.setState({
      data: {
        ...this.state.data,
        [val.value.pref]: {
          count: val.value.res.count,
          dataArray: val.value.res.results
        }
      }
    });
  });
`;

const code4 = `getDataStream.pipe(
  debounceTime(500), // debounce concurrent calls by 500ms
  flatMap(val => {
  return fetch('https://swapi.co/')
  })`;

const code5 = `inputStream.subscribe(val => {
  this.setState({
     searchText: val.value
   }, () => makeCallStream.next({ value: this.state.searchText });
});`;

const code6 = `vehicleDeepStream.pipe(
  flatMap(person => fetch('vehicle/of/person')),
  flatMap(vehicle => fetch('all/pilots/of/vehicle')),
  flatMap(allPilots => eldest(allPilots)),
  ).subscribe(eldest => console.log(eldest))`;

export default {
  id: '693b6aaf-4edd-4116-a88a-9e26acad0ab3',
  title: 'RxJS example',
  subTitle: '',
  article: [
    { title: 'RxJS example' },
    {
      subTitle: ''
    },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code1 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code2 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code3 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { content: 'debounce' },
    { code: code4 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { content: 'make API calls on every text change' },
    { code: code5 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    {
      content:
        'when a user clicks on a people item, we must fetch his vehicle and then print the eldest of the pilots (people) who have ever used this particular vehicle.'
    },
    { code: code6 }
  ],
  createdAt: '2017-11-07T02:04:30.360Z'
};
