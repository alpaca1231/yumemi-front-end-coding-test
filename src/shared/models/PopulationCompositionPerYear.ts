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
import type { PopulationCompositionPerYearDataInner } from './PopulationCompositionPerYearDataInner';
import {
  PopulationCompositionPerYearDataInnerFromJSON,
  PopulationCompositionPerYearDataInnerFromJSONTyped,
  PopulationCompositionPerYearDataInnerToJSON,
  PopulationCompositionPerYearDataInnerToJSONTyped,
} from './PopulationCompositionPerYearDataInner';

/**
 *
 * @export
 * @interface PopulationCompositionPerYear
 */
export interface PopulationCompositionPerYear {
  /**
   * 実績値と推計値の区切り年
   * @type {number}
   * @memberof PopulationCompositionPerYear
   */
  boundaryYear: number;
  /**
   *
   * @type {Array<PopulationCompositionPerYearDataInner>}
   * @memberof PopulationCompositionPerYear
   */
  data: Array<PopulationCompositionPerYearDataInner>;
}

/**
 * Check if a given object implements the PopulationCompositionPerYear interface.
 */
export function instanceOfPopulationCompositionPerYear(
  value: object,
): value is PopulationCompositionPerYear {
  if (!('boundaryYear' in value) || value['boundaryYear'] === undefined)
    return false;
  if (!('data' in value) || value['data'] === undefined) return false;
  return true;
}

export function PopulationCompositionPerYearFromJSON(
  json: any,
): PopulationCompositionPerYear {
  return PopulationCompositionPerYearFromJSONTyped(json, false);
}

export function PopulationCompositionPerYearFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PopulationCompositionPerYear {
  if (json == null) {
    return json;
  }
  return {
    boundaryYear: json['boundaryYear'],
    data: (json['data'] as Array<any>).map(
      PopulationCompositionPerYearDataInnerFromJSON,
    ),
  };
}

export function PopulationCompositionPerYearToJSON(
  json: any,
): PopulationCompositionPerYear {
  return PopulationCompositionPerYearToJSONTyped(json, false);
}

export function PopulationCompositionPerYearToJSONTyped(
  value?: PopulationCompositionPerYear | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    boundaryYear: value['boundaryYear'],
    data: (value['data'] as Array<any>).map(
      PopulationCompositionPerYearDataInnerToJSON,
    ),
  };
}
