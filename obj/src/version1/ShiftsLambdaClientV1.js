"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class ShiftsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('shifts');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getShifts(correlationId, filter, paging, callback) {
        this.callCommand('get_shifts', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRandomShift(correlationId, filter, callback) {
        this.callCommand('get_random_shift', correlationId, {
            fitler: filter
        }, callback);
    }
    getShiftById(correlationId, shiftId, callback) {
        this.callCommand('get_shift_by_id', correlationId, {
            shift_id: shiftId
        }, callback);
    }
    createShift(correlationId, shift, callback) {
        this.callCommand('create_shift', correlationId, {
            shift: shift
        }, callback);
    }
    updateShift(correlationId, shift, callback) {
        this.callCommand('update_shift', correlationId, {
            shift: shift
        }, callback);
    }
    deleteShiftById(correlationId, shiftId, callback) {
        this.callCommand('delete_shift_by_id', correlationId, {
            shift_id: shiftId
        }, callback);
    }
}
exports.ShiftsLambdaClientV1 = ShiftsLambdaClientV1;
//# sourceMappingURL=ShiftsLambdaClientV1.js.map