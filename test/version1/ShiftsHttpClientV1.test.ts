let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ShiftsMemoryPersistence } from 'iqs-services-shifts-node';
import { ShiftsController } from 'iqs-services-shifts-node';
import { ShiftsHttpServiceV1 } from 'iqs-services-shifts-node';
import { IShiftsClientV1 } from '../../src/version1/IShiftsClientV1';
import { ShiftsHttpClientV1 } from '../../src/version1/ShiftsHttpClientV1';
import { ShiftsClientFixtureV1 } from './ShiftsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ShiftsRestClientV1', ()=> {
    let service: ShiftsHttpServiceV1;
    let client: ShiftsHttpClientV1;
    let fixture: ShiftsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ShiftsMemoryPersistence();
        let controller = new ShiftsController();

        service = new ShiftsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-shifts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-shifts', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-shifts', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ShiftsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ShiftsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
