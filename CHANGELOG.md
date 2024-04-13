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