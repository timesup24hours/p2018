// import fakeData from './fakeDate';
import data from './data';
import sleep from './sleep';

const fetchOneNote = payload =>
  sleep(2000).then(async () => {
    // let response = await fetch('http://localhost/api/item/all');
    // let data = await response.json();
    // console.log(data);
    // fetch('data.json')
    //   .then(response => {
    //     return response;
    //   })
    //   .then(json => {
    //     // console.log(json);
    //   });
    const buffer = data.filter(note => note.id === payload)[0];

    return buffer;
  });

export default fetchOneNote;
