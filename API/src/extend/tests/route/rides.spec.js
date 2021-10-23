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

describe('Test the rides API', () => {
   test('Should request for new ride', () => {
      request(app)
         .post(`${urlPrefix}/rides/create`)
         .send(rides)
         .end((err, response) => {
            expect(response.status).equal(HTTP_CREATED);
            done();
         });
   });
   test('Should update ride', () => {
      request(app)
         .put(`${urlPrefix}/rides/update/${rides.ride_id}`)
         .send(rides)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should list a ride', () => {
      request(app)
         .get(`${urlPrefix}/rides/find/${rides.ride_id}`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should list all rides', () => {
      request(app)
         .get(`${urlPrefix}/rides/findall`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should delete ride', () => {
      request(app)
         .delete(`${urlPrefix}/rides/delete/${rides.ride_id}`)
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
});
