import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { ShiftV1 } from './ShiftV1';
import { IShiftsClientV1 } from './IShiftsClientV1';

export class ShiftsHttpClientV1 extends CommandableHttpClient implements IShiftsClientV1 {       
    
    constructor(config?: any) {
        super('v1/shifts');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getShifts(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ShiftV1>) => void): void {
        this.callCommand( 
            'get_shifts', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getShiftById(correlationId: string, shiftId: string,
        callback: (err: any, shift: ShiftV1) => void): void {
        this.callCommand( 
            'get_shift_by_id',
            correlationId,
            {
                shift_id: shiftId
            }, 
            callback
        );        
    }

    public createShift(correlationId: string, shift: ShiftV1,
        callback: (err: any, shift: ShiftV1) => void): void {
        this.callCommand(
            'create_shift',
            correlationId,
            {
                shift: shift
            }, 
            callback
        );
    }

    public updateShift(correlationId: string, shift: ShiftV1,
        callback: (err: any, shift: ShiftV1) => void): void {
        this.callCommand(
            'update_shift', 
            correlationId,
            {
                shift: shift
            }, 
            callback
        );
    }

    public deleteShiftById(correlationId: string, shiftId: string,
        callback: (err: any, shift: ShiftV1) => void): void {
        this.callCommand(
            'delete_shift_by_id', 
            correlationId,
            {
                shift_id: shiftId
            }, 
            callback
        );
    }
    
}
