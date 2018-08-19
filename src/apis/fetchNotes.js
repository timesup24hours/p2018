import fakeData from './fakeDate';

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default payload =>
  sleep(2000).then(async () => {
    // let response = await fetch('http://localhost/api/item/all');
    // let data = await response.json();
    // console.log(data);
    const buffer = fakeData.slice(
      payload.start,
      payload.start + payload.loadAmount
    );

    return buffer;
  });
