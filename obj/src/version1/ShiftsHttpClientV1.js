"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ShiftsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/shifts');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getShifts(correlationId, filter, paging, callback) {
        this.callCommand('get_shifts', correlationId, {
            filter: filter,
            paging: paging
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
exports.ShiftsHttpClientV1 = ShiftsHttpClientV1;
//# sourceMappingURL=ShiftsHttpClientV1.js.map