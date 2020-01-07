"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ShiftsNullClientV1_1 = require("../version1/ShiftsNullClientV1");
const ShiftsDirectClientV1_1 = require("../version1/ShiftsDirectClientV1");
const ShiftsHttpClientV1_1 = require("../version1/ShiftsHttpClientV1");
const ShiftsLambdaClientV1_1 = require("../version1/ShiftsLambdaClientV1");
class ShiftsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ShiftsClientFactory.NullClientV1Descriptor, ShiftsNullClientV1_1.ShiftsNullClientV1);
        this.registerAsType(ShiftsClientFactory.DirectClientV1Descriptor, ShiftsDirectClientV1_1.ShiftsDirectClientV1);
        this.registerAsType(ShiftsClientFactory.HttpClientV1Descriptor, ShiftsHttpClientV1_1.ShiftsHttpClientV1);
        this.registerAsType(ShiftsClientFactory.LambdaClientV1Descriptor, ShiftsLambdaClientV1_1.ShiftsLambdaClientV1);
    }
}
exports.ShiftsClientFactory = ShiftsClientFactory;
ShiftsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-shifts', 'factory', 'default', 'default', '1.0');
ShiftsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-shifts', 'client', 'null', 'default', '1.0');
ShiftsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-shifts', 'client', 'direct', 'default', '1.0');
ShiftsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-shifts', 'client', 'http', 'default', '1.0');
ShiftsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-shifts', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ShiftsClientFactory.js.map