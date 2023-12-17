export interface CommandLineOptions {
  input: string;
  output: string;
  layer: string;
  stringLimit: number;
  numberLimit: number;
  includeProperties?: string;
}

export interface PropertyInfo {
  name: string;
  type: string;
}

// Add any utility functions if needed
export type LayerName = string;