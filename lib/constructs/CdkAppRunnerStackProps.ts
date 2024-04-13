import { NestedStackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { CohereRerankV3Services } from "../CohereRerankV3ServicesStackProps";

export interface CdkCohereRerankV3AppRunnerStackProps extends NestedStackProps, CohereRerankV3Services {
    /**
     * The VPC where the database should be deployed.
     */
    readonly vpc: cdk.aws_ec2.IVpc;
    /**
     * The ECR repository
     */
    readonly ecrRepository: cdk.aws_ecr.Repository;
    /**
     * The App Runner docker run arguments.
     */
    readonly dockerRunArgs: CdkCohereRerankV3DockerRunArgTyped,
}

export interface CdkCohereRerankV3DockerRunArgTyped {
    /**
     * The API key for Cohere services.
     */
    readonly COHERE_API_KEY: string;
    /**
     * The model for Cohere services.
     */
    readonly COHERE_RERANK_MODEL: string;
}
