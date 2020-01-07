"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ShiftsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-shifts", "controller", "*", "*", "*"));
    }
    getShifts(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'shifts.get_shifts');
        this._controller.getShifts(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getShiftById(correlationId, shiftId, callback) {
        let timing = this.instrument(correlationId, 'shifts.get_shift_by_id');
        this._controller.getShiftById(correlationId, shiftId, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }
    createShift(correlationId, shift, callback) {
        let timing = this.instrument(correlationId, 'shifts.create_shift');
        this._controller.createShift(correlationId, shift, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }
    updateShift(correlationId, shift, callback) {
        let timing = this.instrument(correlationId, 'shifts.update_shift');
        this._controller.updateShift(correlationId, shift, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }
    deleteShiftById(correlationId, shiftId, callback) {
        let timing = this.instrument(correlationId, 'shifts.delete_shift_by_id');
        this._controller.deleteShiftById(correlationId, shiftId, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }
}
exports.ShiftsDirectClientV1 = ShiftsDirectClientV1;
//# sourceMappingURL=ShiftsDirectClientV1.js.map