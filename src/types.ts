export type IntentId = string;

export type Pocket = {
  id: string;
  intent_id: IntentId;
  text: string;
  source: string;
  created_at: string;
  ingested_at: string;
  half_life_ms: number;
  tags: string[];
  meta_json: Record<string, unknown> | null;
};

export type PocketChunk = {
  pocket_id: string;
  chunk_id: string;
  text: string;
  idx: number;
  embedding?: number[] | null;
};

export type HVRecord = {
  pocket_id: string;
  hv_dim: number;
  hv_b64: string;
  hv_kind: string;
  created_at: string;
};

export type StepReceipt = {
  step_id: string;
  op: string;
  inputs: unknown;
  outputs: unknown;
  ms: number;
  notes?: string;
};

export type RunReceipt = {
  run_id: string;
  intent_id: IntentId;
  query: string;
  started_at: string;
  finished_at: string;
  steps: StepReceipt[];
};
