// types.ts
export enum TerraformVersion {
  LATEST = 'latest',
  SPECIFIC = 'specific',
}

export enum TerraformBackendType {
  AZURE = 'azure',
  AWS_S3 = 'aws_s3',
  GCP_STORAGE = 'gcp_storage',
  GOOGLE_CLOUD_STORAGE = 'google_cloud_storage',
}

export enum TerraformBackendConfig {
  BUCKET_NAME = 'bucket_name',
  RESOURCE_GROUP = 'resource_group',
  STORAGE_BUCKET = 'storage_bucket',
  CREDENTIALS_FILE = 'credentials_file',
  CREDENTIALS = 'credentials',
  STORAGE_CLASS = 'storage_class',
  LOCATION = 'location',
}

export enum TerraformVariableType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
}

export interface TerraformConfig {
  terraform_version: TerraformVersion;
  backend_type: TerraformBackendType;
  backend_config: TerraformBackendConfig[];
  variables: { [key: string]: TerraformVariableType };
}

export interface TerraformBackendConfigData {
  bucket_name: string;
  resource_group?: string;
  storage_bucket?: string;
  credentials_file?: string;
  credentials?: string;
  storage_class?: string;
  location?: string;
}