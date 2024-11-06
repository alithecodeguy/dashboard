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
