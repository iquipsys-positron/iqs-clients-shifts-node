"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ShiftsNullClientV1 {
    getShifts(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getShiftById(correlationId, shiftId, callback) {
        callback(null, null);
    }
    createShift(correlationId, shift, callback) {
        callback(null, shift);
    }
    updateShift(correlationId, shift, callback) {
        callback(null, shift);
    }
    deleteShiftById(correlationId, shiftId, callback) {
        if (callback)
            callback(null, null);
    }
}
exports.ShiftsNullClientV1 = ShiftsNullClientV1;
//# sourceMappingURL=ShiftsNullClientV1.js.map