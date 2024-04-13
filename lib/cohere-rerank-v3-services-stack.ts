import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CohereRerankV3ServicesStackProps } from './CohereRerankV3ServicesStackProps';
import { CdkEcrDeploymentStack } from './constructs/cohere-rerank-v3-ecr';
import { CohereRerankVpcStack } from './constructs/cohere-rerank-v3-vpc';
import { CdkCohereRerankV3AppRunnerStack } from './constructs/cohere-rerank-v3-app-runner';

/**
 * The `CohereRerankV3ServicesStack` class defines the AWS infrastructure as code for the Cohere Embed V3 Services.
 * It sets up a Lambda function configured to use the Cohere API for natural language processing tasks.
 */
export class CohereRerankV3ServicesStack extends cdk.Stack {
  /**
   * Constructs a new instance of the CohereRerankV3ServicesStack.
   * @param scope The scope in which to define this construct. Usually an `App` or a `Stage`.
   * @param id A unique identifier for the stack.
   * @param props The stack properties, including the Cohere API key, model, and other AWS resource configurations.
   */
  constructor(scope: Construct, id: string, props: CohereRerankV3ServicesStackProps) {
    super(scope, id, props);

    const vpcStack = new CohereRerankVpcStack(this, `${props.resourcePrefix}-VpcStack`, {
      ...props,
      description: 'VPC for Cohere Embed V3.',
    });
    const vpc = vpcStack.cohereVpc;

    const ecrStack = new CdkEcrDeploymentStack(this, `${props.resourcePrefix}-EcrStack`, {
      ...props,
      description: 'ECR repository for Cohere Embed V3.',
    });
    const ecrRepository = ecrStack.ecrRepository;

    const appRunnerStack = new CdkCohereRerankV3AppRunnerStack(this, `${props.resourcePrefix}-AppRunnerStack`, {
      ...props,
      vpc,
      ecrRepository,
      dockerRunArgs: {
        COHERE_API_KEY: props.cohereApiKey,
        COHERE_RERANK_MODEL: props.cohereRerankModel,
      },
      description: 'App Runner service for Cohere Embed V3.',
    });

    // export the App Runner service URL
    new cdk.CfnOutput(this, 'AppRunnerServiceURL', {
      value: appRunnerStack.APP_RUNNER_SERVICE_URL,
      description: 'The URL of the App Runner service.',
      exportName: `${props.resourcePrefix}-AppRunnerServiceURL`,
    });
  }
}
