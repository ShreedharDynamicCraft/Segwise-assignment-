 export type FilterType = 'dimension' | 'tag' | 'metric';

export interface BaseFilter {
  id: string;
  type: FilterType;
}

export interface DimensionFilter extends BaseFilter {
  type: 'dimension';
  column: string;
  value: string;
}

export interface TagFilter extends BaseFilter {
  type: 'tag';
  category: string;
  value: string;
}

export interface MetricFilter extends BaseFilter {
  type: 'metric';
  column: string;
  operator: 'gt' | 'lt' | 'eq';
  value: number;
}

export type Filter = DimensionFilter | TagFilter | MetricFilter;

export interface FilterState {
  filters: Filter[];
  activeFilterType: FilterType | null;
}

export const operatorLabels: Record<string, string> = {
  gt: 'Greater than',
  lt: 'Less than',
  eq: 'Equal to'
};

export const operatorSymbols: Record<string, string> = {
  gt: '>',
  lt: '<',
  eq: '='
};