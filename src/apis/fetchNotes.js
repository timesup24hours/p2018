import fakeData from './fakeDate';

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default payload =>
  sleep(2000).then(() => {
    const buffer = fakeData.slice(
      payload.start,
      payload.start + payload.loadAmount
    );

    return buffer;
  });