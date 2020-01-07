let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ShiftV1 } from '../../src/version1/ShiftV1';
import { IShiftsClientV1 } from '../../src/version1/IShiftsClientV1';

let SHIFT1: ShiftV1 = {
    id: '1',
    org_id: '1',
    name: 'Test shift 1',
    start: 0,
    duration: 480
};
let SHIFT2: ShiftV1 = {
    id: '2',
    org_id: '1',
    name: 'Test shift 2',
    start: 480,
    duration: 480
};

export class ShiftsClientFixtureV1 {
    private _client: IShiftsClientV1;
    
    constructor(client: IShiftsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let shift1, shift2;

        async.series([
        // Create one shift
            (callback) => {
                this._client.createShift(
                    null,
                    SHIFT1,
                    (err, shift) => {
                        assert.isNull(err);

                        assert.isObject(shift);
                        assert.equal(shift.org_id, SHIFT1.org_id);
                        assert.equal(shift.start, SHIFT1.start);
                        assert.equal(shift.name, SHIFT1.name);

                        shift1 = shift;

                        callback();
                    }
                );
            },
        // Create another shift
            (callback) => {
                this._client.createShift(
                    null,
                    SHIFT2,
                    (err, shift) => {
                        assert.isNull(err);

                        assert.isObject(shift);
                        assert.equal(shift.org_id, SHIFT2.org_id);
                        assert.equal(shift.start, SHIFT2.start);
                        assert.equal(shift.name, SHIFT2.name);

                        shift2 = shift;

                        callback();
                    }
                );
            },
        // Get all shifts
            (callback) => {
                this._client.getShifts(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, shifts) => {
                        assert.isNull(err);

                        assert.isObject(shifts);
                        assert.isTrue(shifts.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the shift
            (callback) => {
                shift1.name = 'Updated shift 1';

                this._client.updateShift(
                    null,
                    shift1,
                    (err, shift) => {
                        assert.isNull(err);

                        assert.isObject(shift);
                        assert.equal(shift.name, 'Updated shift 1');
                        assert.equal(shift.id, SHIFT1.id);

                        shift1 = shift;

                        callback();
                    }
                );
            },
        // Delete shift
            (callback) => {
                this._client.deleteShiftById(
                    null,
                    shift1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete shift
            (callback) => {
                this._client.getShiftById(
                    null,
                    shift1.id,
                    (err, shift) => {
                        assert.isNull(err);
                        
                        assert.isNotNull(shift);
                        assert.isTrue(shift.deleted);

                        callback();
                    }
                );
            }
        ], done);
    }
}
