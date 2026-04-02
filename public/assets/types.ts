export interface TerraformResource {
  id: string;
  type: string;
  name: string;
  attributes: Record<string, any>;
}

export interface TerraformModule {
  id: string;
  source: string;
  version?: string;
  resources: TerraformResource[];
}

export interface TerraformState {
  version: number;
  terraformVersion: string;
  serial: number;
  lineage: string;
  outputs: Record<string, any>;
  resources: TerraformResource[];
  modules: TerraformModule[];
}

export interface TerraformPlan {
  type: string;
  config: Record<string, any>;
  changes?: {
    add: number;
    change: number;
    destroy: number;
  };
}

export interface TerraformApplyResult {
  success: boolean;
  outputs: Record<string, any>;
  changes?: {
    add: number;
    change: number;
    destroy: number;
  };
}

export interface TerraformDestroyResult {
  success: boolean;
  resourcesDestroyed: number;
}

export interface TerraformProvider {
  name: string;
  version: string;
  config: Record<string, any>;
}

export interface TerraformBackend {
  type: string;
  config: Record<string, any>;
}

export interface TerraformConfig {
  requiredProviders: Record<string, TerraformProvider>;
  backend?: TerraformBackend;
  modules: TerraformModule[];
}