// const app = require('../../src/app');
// const chai = require('chai');
// const request = require('supertest');
// const login = require('../login');
// const { Task } = require('../../src/models');

//  const { expect } = chai;
// const { 
//     describe, 
//     it, 
//     beforeEach, 
// } = global;


//  let token;


//  describe('Tasks', () => {
//   before(() => {
//     return login.then((t) => {
//       token = t;
//     });
//   });

//    describe('destroy', () => {
//       let accessibleTaskId;
//       let inaccessibleTaskId;

//        beforeEach(() => {
//         return Task.destroy({
//           where: {},
//           truncate: true,
//         }).then(() => {
//           return Task.create({
//             title: 'whatsupdawg',
//             UserId: 1,
//           }).then((task) => { accessibleTaskId = task.id; });
//         }).then(() => {
//           return Task.create({
//             title: 'nothingmuchdawg',
//             UserId: null,
//           }).then((task) => { inaccessibleTaskId = task.id; });
//         });
//       });


//       describe('without authorization', () => {
//         it('should return 400 status', (done) => {
//           request(app)
//             .patch(`/tasks/${accessibleTaskId}`)
//             .end((err, res) => {
//               expect(res.statusCode).to.equal(400);
//               done();
//             });
//         });
//       });



//       describe('with authorization', () => {
//        it('should return a 200 status, update the Task, and return the updated object', (done) => {
//         request(app)
//           .delete(`/tasks/${accessibleTaskId}`)
//           .set('Authorization', `Bearer ${token}`)
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body).to.include({
//               title: 'whatsupdawg',
//               UserId: 1,
//             });
//             done();
//           });
//       });
//        it('should return a 403 status error', (done) => {
//         request(app)
//         .delete(`/tasks/${inaccessibleTasktId}`)
//         .set('Authorization', `Bearer ${token}`)
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(403);
//             done();
//           });
//       });
//        it('should return a 404 status error', (done) => {
//         request(app)
//           .delete('/tasks/999999999')
//           .set('Authorization', `Bearer ${token}`)
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(404);
//             done();
//           });
//       });
//     });
//   });
// });