let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ShiftsMemoryPersistence } from 'iqs-services-shifts-node';
import { ShiftsController } from 'iqs-services-shifts-node';
import { IShiftsClientV1 } from '../../src/version1/IShiftsClientV1';
import { ShiftsDirectClientV1 } from '../../src/version1/ShiftsDirectClientV1';
import { ShiftsClientFixtureV1 } from './ShiftsClientFixtureV1';

suite('ShiftsDirectClientV1', ()=> {
    let client: ShiftsDirectClientV1;
    let fixture: ShiftsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ShiftsMemoryPersistence();
        let controller = new ShiftsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-shifts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-shifts', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ShiftsDirectClientV1();
        client.setReferences(references);

        fixture = new ShiftsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
