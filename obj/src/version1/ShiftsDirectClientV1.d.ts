import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IShiftsClientV1 } from './IShiftsClientV1';
import { ShiftV1 } from './ShiftV1';
export declare class ShiftsDirectClientV1 extends DirectClient<any> implements IShiftsClientV1 {
    constructor();
    getShifts(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ShiftV1>) => void): void;
    getShiftById(correlationId: string, shiftId: string, callback: (err: any, shift: ShiftV1) => void): void;
    createShift(correlationId: string, shift: ShiftV1, callback: (err: any, shift: ShiftV1) => void): void;
    updateShift(correlationId: string, shift: ShiftV1, callback: (err: any, shift: ShiftV1) => void): void;
    deleteShiftById(correlationId: string, shiftId: string, callback: (err: any, shift: ShiftV1) => void): void;
}
