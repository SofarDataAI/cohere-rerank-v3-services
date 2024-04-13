import { NestedStackProps } from 'aws-cdk-lib';
import { CohereRerankV3Services } from '../../lib/CohereRerankV3ServicesStackProps';

/**
 * Properties for CdkEcrDeploymentStack.
 */
export interface CdkErcDeploymentStackProps extends NestedStackProps, CohereRerankV3Services {
    /**
     * The build arguments for the Docker image.
     */
    readonly dockerBuildArgs?: Record<string, string> | undefined;
}
