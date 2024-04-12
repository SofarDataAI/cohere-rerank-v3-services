import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CohereRerankV3ServicesStackProps } from './CohereRerankV3ServicesStackProps';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CohereRerankV3ServicesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CohereRerankV3ServicesStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CohereRerankV3ServicesQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
