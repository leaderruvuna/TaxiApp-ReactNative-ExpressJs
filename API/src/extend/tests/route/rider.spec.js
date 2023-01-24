import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../../../app';
import RiderModal from '../../../models/rider';
import { rider, nearby } from '../../mocks/dummy';
import { urlPrefix } from '../../mocks/variable';
import {
   HTTP_CREATED,
   HTTP_EXIST,
   HTTP_OK,
   HTTP_SERVER_ERROR,
   HTTP_NOT_FOUND,
   HTTP_BAD_REQUEST
} from '../../../core/constants/httpStatus';
import {testDbConnect,testDbColse} from '../connection';
import { expect } from 'chai';

beforeAll(async () => {
   await RiderModal.deleteMany();
   await testDbConnect();
});
afterAll(async()=>{
  await RiderModal.deleteMany();
  await testDbColse();
})

describe('Test riders API', () => {
   test('Should register the rider with phone number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/create`)
         .send(rider.realData)
         .end((err, response) => {
            expect(response.status).equal(HTTP_CREATED);
            done();
         });
   });
   test('Should login the rider with phone number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/login`)
         .send({ phone_number: rider.realData.phone_number })
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
            expect(response.status).equal(HTTP_BAD_REQUEST);
            done();
         });
   });
   test('Should not login the rider with unregistered number', (done) => {
      request(app)
         .post(`${urlPrefix}/auth/rider/login`)
         .send({ phone_number: rider.fakeData.fk_phone_number })
         .end((err, response) => {
            expect(response.status).equal(HTTP_NOT_FOUND);
            done();
         });
   });
});

