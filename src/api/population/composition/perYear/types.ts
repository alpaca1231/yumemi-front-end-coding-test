import type {
  PopulationCompositionPerYear as PopulationCompositionPerYearRaw,
  PopulationCompositionPerYearResponse as PopulationCompositionPerYearResponseRaw,
} from '@/shared';

export type PopulationCompositionPerYear = PopulationCompositionPerYearRaw;

export type PopulationCompositionPerYearResponse =
  PopulationCompositionPerYearResponseRaw['result'];
