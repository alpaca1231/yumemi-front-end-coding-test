/* tslint:disable */
/* eslint-disable */
/**
 * ゆめみフロントエンドコーディング試験 API
 * ## API 概要  ゆめみフロントエンドコーディング試験用の API です。  本 API は、内閣府 地方創生推進室が提供している [RESAS（地域経済分析システム）](https://resas.go.jp/) のデータを加工して作成しています。  ※当該データは 2024 年 10 月時点のものであり、最新性を保証するものではありません。  ## API 詳細仕様  ### ◎ エンドポイントについて  本 API のエンドポイントは `https://yumemi-frontend-engineer-codecheck-api.vercel.app` です。  ### ◎ API キーの設定について  本 API へアクセスするには、API キーをリクエストヘッダー `X-API-KEY` に設定する必要があります。  リクエストヘッダーに有効な API キーが設定されていない場合、リクエストしたデータは返却されず、`403 Forbidden` のエラーが返されます。  ※ 本 API は運用の簡素化を図るため、すべての応募者に共通の API キーを提供しております。  | リクエストヘッダー |        API キー         | | :----------------: | :---------------------: | |     X-API-KEY      | ************************************** |  ### ◎ レスポンスヘッダーの Content-Type について  レスポンスヘッダーの Content-Type は `application/json; charset=UTF-8` です。  ### ◎ エラーについて  #### 400 Bad Request  本 API に必要なパラメータが正しく設定されていない場合に発生します。  必須パラメータの設定が漏れていないか、正しいフォーマットで設定できているか、等をご確認ください。  #### 403 Forbidden  リクエストヘッダーに API キーが存在しないか、指定された API キーが無効な場合に発生します。  API キーが正しく設定されているかご確認ください。  #### 404 Not Found  指定された URL に対応する API が存在しない場合に発生します。  API のアドレスが正しいかをご確認ください。  #### 500 Internal Server Error  API サーバーに問題が発生した場合に返されます。  しばらく時間をおいて再度お試しください。問題が解消しない場合は、お手数ですが弊社までお問い合わせください。  ## 出典  - RESAS（地域経済分析システム）のデータを加工して作成 - 人口構成データ：   - 総務省「国勢調査」   - 厚生労働省「人口動態調査」   - 国立社会保障・人口問題研究所「日本の地域別将来推計人口」  [RESAS 関連サービス利用規約](https://opendata.resas-portal.go.jp/terms.html)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PopulationCompositionPerYearDataInnerDataInner } from './PopulationCompositionPerYearDataInnerDataInner';
import {
  PopulationCompositionPerYearDataInnerDataInnerFromJSON,
  PopulationCompositionPerYearDataInnerDataInnerFromJSONTyped,
  PopulationCompositionPerYearDataInnerDataInnerToJSON,
  PopulationCompositionPerYearDataInnerDataInnerToJSONTyped,
} from './PopulationCompositionPerYearDataInnerDataInner';

/**
 *
 * @export
 * @interface PopulationCompositionPerYearDataInner
 */
export interface PopulationCompositionPerYearDataInner {
  /**
   * ラベル
   * @type {string}
   * @memberof PopulationCompositionPerYearDataInner
   */
  label: string;
  /**
   *
   * @type {Array<PopulationCompositionPerYearDataInnerDataInner>}
   * @memberof PopulationCompositionPerYearDataInner
   */
  data: Array<PopulationCompositionPerYearDataInnerDataInner>;
}

/**
 * Check if a given object implements the PopulationCompositionPerYearDataInner interface.
 */
export function instanceOfPopulationCompositionPerYearDataInner(
  value: object,
): value is PopulationCompositionPerYearDataInner {
  if (!('label' in value) || value['label'] === undefined) return false;
  if (!('data' in value) || value['data'] === undefined) return false;
  return true;
}

export function PopulationCompositionPerYearDataInnerFromJSON(
  json: any,
): PopulationCompositionPerYearDataInner {
  return PopulationCompositionPerYearDataInnerFromJSONTyped(json, false);
}

export function PopulationCompositionPerYearDataInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PopulationCompositionPerYearDataInner {
  if (json == null) {
    return json;
  }
  return {
    label: json['label'],
    data: (json['data'] as Array<any>).map(
      PopulationCompositionPerYearDataInnerDataInnerFromJSON,
    ),
  };
}

export function PopulationCompositionPerYearDataInnerToJSON(
  json: any,
): PopulationCompositionPerYearDataInner {
  return PopulationCompositionPerYearDataInnerToJSONTyped(json, false);
}

export function PopulationCompositionPerYearDataInnerToJSONTyped(
  value?: PopulationCompositionPerYearDataInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    label: value['label'],
    data: (value['data'] as Array<any>).map(
      PopulationCompositionPerYearDataInnerDataInnerToJSON,
    ),
  };
}
