// import fakeData from './fakeDate';
import data from './data';
import sleep from './sleep';

// localStorage.setItem('myStorage', JSON.stringify(fakeData));
// const data = JSON.parse()
// console.log(data)

const fetchMore = payload =>
  sleep(2000).then(async () => {
    // let response = await fetch('http://localhost/api/item/all');
    // let response = await fetch('/src/apis/dataj.json');
    // console.log(response);
    // let data1 = await response.json();
    // console.log(data1);
    const buffer = data.slice(
      payload.start,
      payload.start + payload.loadAmount
    );

    return buffer;
  });

export default fetchMore;
