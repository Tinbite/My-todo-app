// const app = require('../../src/app');
// const chai = require('chai');
// const request = require('supertest');
// const login = require('../login');
//  const { expect } = chai;
// const {
//   describe,
//   it,
//   before,
// } = global;
//  let token;
//  describe('Tasks', () => {
//   before(() => {
//     return login.then((t) => {
//       token = t;
//     });
//   });
//    describe('create', () => {
//     describe('without authorization', () => {
//       it('should return 400 status', (done) => {
//         request(app)
//           .post('/tasks')
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(400);
//             done();
//           });
//       });
//     });
//      describe('with authorization', () => {
//       it('should return 200 status and created object', (done) => {
//         request(app)
//           .post('/tasks')
//           .set('Authorization', `Bearer ${token}`)
//           .send({
//             title: 'yolo',
//           })
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body).to.include({
//               title: 'yolo',
//               UserId: 1,
//             });
//             done();
//           });
//       });
//     });
//   });
// });