import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { ShiftV1 } from './ShiftV1';
import { IShiftsClientV1 } from './IShiftsClientV1';
export declare class ShiftsLambdaClientV1 extends CommandableLambdaClient implements IShiftsClientV1 {
    constructor(config?: any);
    getShifts(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ShiftV1>) => void): void;
    getRandomShift(correlationId: string, filter: FilterParams, callback: (err: any, shift: ShiftV1) => void): void;
    getShiftById(correlationId: string, shiftId: string, callback: (err: any, shift: ShiftV1) => void): void;
    createShift(correlationId: string, shift: ShiftV1, callback: (err: any, shift: ShiftV1) => void): void;
    updateShift(correlationId: string, shift: ShiftV1, callback: (err: any, shift: ShiftV1) => void): void;
    deleteShiftById(correlationId: string, shiftId: string, callback: (err: any, shift: ShiftV1) => void): void;
}
