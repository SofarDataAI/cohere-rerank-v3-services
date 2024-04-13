import { NestedStackProps } from 'aws-cdk-lib';
import { CohereRerankV3Services } from '../CohereRerankV3ServicesStackProps';

/**
 * Properties for CohereEmbedVpcStack.
 */
export interface CohereRerankVpcStackProps extends NestedStackProps, Pick<CohereRerankV3Services, 'resourcePrefix'> {
}
