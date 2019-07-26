import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactInfo from '../ContactInfo';
import sinon from 'sinon';

describe('ContactInfo', () => {
  it('mock fetch', done => {
    const mockSuccessResponse = { data: ['1', '2'] };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({
      // 3
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

    const wrapper = shallow(<ContactInfo />); // 5

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users');

    process.nextTick(() => {
      // 6
      expect(wrapper.state().users).toBe(mockSuccessResponse);
      expect(wrapper.state('users').data.length).toEqual(2);

      global.fetch.mockClear(); // 7
      done(); // 8
    });
  });
});

// import React, { Component } from 'react';
// import App from './App';
// import { shallow } from 'enzyme';

// describe('App', () => {
//   describe('componentDidMount', () => {
//     it('sets the state componentDidMount', async () => {
//       window.fetch = jest.fn().mockImplementation(() => ({
//         status: 200,
//         json: () => new Promise((resolve, reject) => {
//           resolve({
//             groceries: [
//               {item: 'nuts', id: 10}, {item: 'greens', id: 3}
//             ]
//           })
//         })
//       }))

//       const renderedComponent = await shallow(<App />)
//       await renderedComponent.update()
//       expect(renderedComponent.state('groceries').length).toEqual(2)
//     })

//     it('sets the state componentDidMount on error', async () => {
//       window.fetch = jest.fn().mockImplementation(() => ({
//         status: 500,
//       }))

//       const renderedComponent = await shallow(<App />)
//       await renderedComponent.update()
//       expect(renderedComponent.state('errorStatus')).toEqual('Error fetching groceries')
//     })
//   })
// })

// import React, { Component } from 'react';
// import App from './App';
// import { shallow } from 'enzyme';

// window.fetch = jest.fn()
//                  .mockImplementationOnce(() => ({
//                    status: 200,
//                    json: () => new Promise((resolve, reject) => {
//                      resolve({
//                        groceries: [
//                          {item: 'nuts', id: 10}, {item: 'greens', id: 3}
//                        ]
//                      })
//                    })
//                  }))
//                  .mockImplementationOnce(() => ({
//                    status: 500,
//                  }))

// describe('App', () => {
//   describe('componentDidMount', () => {
//     it('sets the state componentDidMount', async () => {
//       const renderedComponent = await shallow(<App />)
//       await renderedComponent.update()
//       expect(renderedComponent.state('groceries').length).toEqual(2)
//     })

//     it('sets the state componentDidMount on error', async () => {
//       const renderedComponent = await shallow(<App />)
//       await renderedComponent.update()
//       expect(renderedComponent.state('errorStatus')).toEqual('Error fetching groceries')
//     })
//   })
// })
