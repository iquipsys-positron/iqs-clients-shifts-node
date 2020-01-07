import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ShiftsNullClientV1 } from '../version1/ShiftsNullClientV1';
import { ShiftsDirectClientV1 } from '../version1/ShiftsDirectClientV1';
import { ShiftsHttpClientV1 } from '../version1/ShiftsHttpClientV1';
import { ShiftsLambdaClientV1 } from '../version1/ShiftsLambdaClientV1';

export class ShiftsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-shifts', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-shifts', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-shifts', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-shifts', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-shifts', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ShiftsClientFactory.NullClientV1Descriptor, ShiftsNullClientV1);
		this.registerAsType(ShiftsClientFactory.DirectClientV1Descriptor, ShiftsDirectClientV1);
		this.registerAsType(ShiftsClientFactory.HttpClientV1Descriptor, ShiftsHttpClientV1);
		this.registerAsType(ShiftsClientFactory.LambdaClientV1Descriptor, ShiftsLambdaClientV1);
	}
	
}
