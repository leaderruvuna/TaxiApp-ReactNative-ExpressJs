import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../../../app';
import RiderModal from '../../../models/rider';
import { rider } from '../../mocks/dummy';
import { urlPrefix } from '../../mocks/variable';
import {
   HTTP_CREATED,
   HTTP_EXIST,
   HTTP_OK,
   HTTP_SERVER_ERROR,
   HTTP_NOT_FOUND
} from '../../../core/constants/httpStatus';
import baseEnvCall from '../../../envCall/index';
import { expect } from 'chai';

beforeAll(async () => {
   const url = `${baseEnvCall.MONGODB_URI_TEST}`;
   await mongoose.createConnection(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
   await RiderModal.deleteMany();
});

describe('Test riders API', () => {
   test('Should register the rider with phone number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/create`)
         .send(rider)
         .end((err, response) => {
            expect(response.status).equal(HTTP_CREATED);
            done();
         });
   });
   test('Should login the rider with phone number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/login`)
         .send({ phone_number: rider.phone_number })
         .end((err, response) => {
            expect(response.status).equal(HTTP_OK);
            done();
         });
   });
   test('Should not register the rider without phone number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/create`)
         .send({ phone_number: '' })
         .end((err, response) => {
            expect(response.status).equal(HTTP_SERVER_ERROR);
            done();
         });
   });
   test('Should not login the rider with unregistered number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/login`)
         .send({ phone_number: rider.fk_phone_number })
         .end((err, response) => {
            expect(response.status).equal(HTTP_NOT_FOUND);
            done();
         });
   });
});
afterAll(async () => {
   await RiderModal.deleteMany();
});