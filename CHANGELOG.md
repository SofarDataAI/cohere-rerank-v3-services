## [2024-12-11]

### Added
- Support for `rerank-v3.5` Cohere rerank model
- Model validation to ensure only supported rerank models are used

### Updated
- Default `COHERE_RERANK_MODEL` to `rerank-v3.5`
- Updated `cohere` library from `5.2.5` to `5.13.3`
- Bumped package version from `0.2.0` to `0.2.1`

### Changed
- Implemented `SUPPORTED_RERANK_MODELS` list for model validation
- Updated various dependencies including FastAPI, AWS CDK, and TypeScript libraries

## 2024-04-14

### Added
- Added 'VPC_ID' to the list of required environment variables in the 'bin/cohere-rerank-v3-services.ts' file.
- Assigned the value of 'VPC_ID' to the 'vpcId' variable in the same file.
- Added a 'vpcId' property to the 'CohereRerankV3Services' interface in the 'lib/CohereRerankV3ServicesStackProps.ts' file.
- Removed the import statement for 'CohereRerankVpcStack' and replaced it with 'ec2.Vpc.fromLookup' to get the VPC by 'vpcId' in the 'lib/cohere-rerank-v3-services-stack.ts' file.
- Removed the 'CohereRerankVpcStack' class and associated resources in the 'lib/constructs/cohere-rerank-v3-vpc.ts' file.
- Added 'VPC_ID' to the 'ProcessEnv' interface in the 'process-env.d.ts' file.
- Added 'VPC_ID' to the example environment variables in the '.env.example' file.
- Added instructions for deploying the stack from a repository and using the obtained 'VPC_ID' in the 'README.md' file.

## 2024-04-13

### Added
- Updated import statements in `cohere-rerank-v3-services-stack.ts` to fix class naming and CPU input.
- Added `CdkCohereRerankV3AppRunnerStack` class to `cohere-rerank-v3-app-runner.ts` for deploying an AWS App Runner service.
- Added `CdkEcrDeploymentStack` class to `cohere-rerank-v3-ecr.ts` for deploying an ECR repository and performing ECR deployment.
- Removed duplicate cases in `parseMemoryType` function in `check-hardware-input.ts`.
- Updated the `PLATFORM`, `CPU_TYPE`, and `MEMORY_TYPE` variables in `.env.example`.
- Added a new section for setting up the environment in `README.md`.

## 2024-04-13

### Added
- Added a new section in the README.md file for demos.
- Included a local demo with Docker and a demo for AWS App Runner.
- Added screenshots for both demos.

## 2024-04-13

### Added
- Added support for loading environment variables from a `.env` file using the `dotenv` package.
- Added a function `checkEnvVariables` to validate the presence of required environment variables.
- Added new interfaces `CohereRerankV3Services` and `CohereRerankV3ServicesStackProps` to improve type safety.
- Added new utility functions `parseCpuType` and `parseMemoryType` to parse CPU and memory types.
- Added a `.env.local` file for local development.

### Changed
- Updated the `CohereRerankV3ServicesStack` class to use the `checkEnvVariables` function and load environment variables.
- Updated the `CdkCohereRerankV3AppRunnerStack` class to include a VPC connector and configure the App Runner service.
- Updated the `CdkEcrDeploymentStack` class to build and deploy the Docker image to the ECR repository.
- Updated the `CohereRerankVpcStack` class to create a VPC with flow logs.
- Updated the `main.py` file to integrate with the Cohere API.

### Fixed
- Fixed the Dockerfile and docker-compose.yml files to include the necessary configurations.