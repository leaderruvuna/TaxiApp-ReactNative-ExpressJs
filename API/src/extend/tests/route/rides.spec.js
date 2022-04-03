import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../../../app';
import RidesModal from '../../../models/rides';
import { rides } from '../../mocks/dummy';
import { urlPrefix } from '../../mocks/variable';
import {
   HTTP_CREATED,
   HTTP_OK,
} from '../../../core/constants/httpStatus';
import baseEnvCall from '../../../envCall/index';
import { expect } from 'chai';

beforeAll(async () => {
   const url = `${baseEnvCall.MONGODB_URI_TEST}`;
   await mongoose.createConnection(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
   await RidesModal.deleteMany();
});
let rideId;
describe('Test the rides API', () => {
   test('Should request for new ride', (done) => {
      request(app)
         .post(`${urlPrefix}/rides/create`)
         .send(rides)
         .end((err, response) => {
            expect(response.status).equal(HTTP_CREATED);
            rideId=response.body.data._id;
            done();
         });
   });
   test('Should update ride', (done) => {
      request(app)
         .put(`${urlPrefix}/rides/update/${rideId}`)
         .send(rides)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should list a ride', (done) => {
      request(app)
         .get(`${urlPrefix}/rides/find/${rideId}`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should list all rides', (done) => {
      request(app)
         .get(`${urlPrefix}/rides/findall`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should delete ride', (done) => {
      request(app)
         .delete(`${urlPrefix}/rides/delete/${rideId}`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
});
afterAll(async () => {
   await RidesModal.deleteMany();
});