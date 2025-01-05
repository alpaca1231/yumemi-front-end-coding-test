import type {
  Prefecture as PrefectureRaw,
  PrefecturesResponse as PrefecturesResponseRaw,
} from '@/shared';
export type Prefecture = PrefectureRaw;

export type PrefecturesResponse = PrefecturesResponseRaw['result'];
