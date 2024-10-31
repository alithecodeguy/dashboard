//////////////////////////////////////////////////////////////// /Asset/${productType}/Product/${code}

export interface ProductServicePayloadInterface {
  productType: number;
  code: string;
}

export interface ProductInterface {
  id: string;
  symbol: string;
  englishSymbol: string;
  symbolFullName: string;
  productType: number;
  productTypeText: string;
  description: string;
  seoRegisterNo: number;
  navType: number;
  navTypeText: string;
  tradeType: number;
  tradeTypeText: string;
  iroCompanyCode: string;
  iroSymbolCode: string;
}

export type ProductServiceDataType = ProductInterface[];

//////////////////////////////////////////////////////////////// /Asset/Search

export interface AssetSearchServicePayloadInterface {
  productTypes: number[];
  searchValue?: string;
}

export interface FoundedAssetInterface {
  id: string;
  name: string;
  englishName: string;
}

export type AssetSearchServiceDataType = FoundedAssetInterface[];

//////////////////////////////////////////////////////////////// /Asset/SubAsset

export interface SubAssetServicePayloadInterface {
  Symbol: string;
  ProductType: number | string;
  NavType: number;
  SeoRegisterNo: number;
  TradeType: number;
  IROCompanyCode: string;
  IROSymbolCode: string;
}

export interface SubAssetServiceDataInterface {
  id: string;
  symbol: string;
  englishSymbol: string;
  symbolFullName: String;
  productType: number;
  productTypeText: string;
  description: string;
  seoRegisterNo: number;
  navType: number;
  navTypeText: string;
  tradeType: number;
  tradeTypeText: string;
  iroCompanyCode: string;
  iroSymbolCode: string;
}

// /Asset/Register-SubAsset

export interface RegisterSubAssetServicePayloadInterface {
  symbol?: string;
  englishSymbol?: string;
  productType?: number;
  navType?: number;
  seoRegisterNo?: number;
  tradeType?: number;
  iroCompanyCode?: string;
  iroSymbolCode?: string;
}

export type RegisterSubAssetServiceDataType = string;
