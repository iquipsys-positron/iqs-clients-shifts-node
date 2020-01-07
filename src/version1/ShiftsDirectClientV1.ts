import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IShiftsClientV1 } from './IShiftsClientV1';
//import { IShiftsController } from 'iqs-services-shifts-node';
import { ShiftV1 } from './ShiftV1';

export class ShiftsDirectClientV1 extends DirectClient<any> implements IShiftsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-shifts", "controller", "*", "*", "*"))
    }

    public getShifts(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ShiftV1>) => void): void {
        let timing = this.instrument(correlationId, 'shifts.get_shifts');
        this._controller.getShifts(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getShiftById(correlationId: string, shiftId: string, 
        callback: (err: any, shift: ShiftV1) => void): void {
        let timing = this.instrument(correlationId, 'shifts.get_shift_by_id');
        this._controller.getShiftById(correlationId, shiftId, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }

    public createShift(correlationId: string, shift: ShiftV1, 
        callback: (err: any, shift: ShiftV1) => void): void {
        let timing = this.instrument(correlationId, 'shifts.create_shift');
        this._controller.createShift(correlationId, shift, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }

    public updateShift(correlationId: string, shift: ShiftV1, 
        callback: (err: any, shift: ShiftV1) => void): void {
        let timing = this.instrument(correlationId, 'shifts.update_shift');
        this._controller.updateShift(correlationId, shift, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }

    public deleteShiftById(correlationId: string, shiftId: string,
        callback: (err: any, shift: ShiftV1) => void): void {
        let timing = this.instrument(correlationId, 'shifts.delete_shift_by_id');
        this._controller.deleteShiftById(correlationId, shiftId, (err, shift) => {
            timing.endTiming();
            callback(err, shift);
        });
    }
}