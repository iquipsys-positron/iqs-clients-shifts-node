import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IShiftsClientV1 } from './IShiftsClientV1';
import { ShiftV1 } from './ShiftV1';

export class ShiftsNullClientV1 implements IShiftsClientV1 {
            
    public getShifts(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ShiftV1>) => void): void {
        callback(null, new DataPage<ShiftV1>([], 0));
    }

    public getShiftById(correlationId: string, shiftId: string, 
        callback: (err: any, shift: ShiftV1) => void): void {
        callback(null, null);
    }

    public createShift(correlationId: string, shift: ShiftV1, 
        callback: (err: any, shift: ShiftV1) => void): void {
        callback(null, shift);
    }

    public updateShift(correlationId: string, shift: ShiftV1, 
        callback: (err: any, shift: ShiftV1) => void): void {
        callback(null, shift);
    }

    public deleteShiftById(correlationId: string, shiftId: string,
        callback: (err: any, shift: ShiftV1) => void): void {
        if (callback) callback(null, null);
    }
}