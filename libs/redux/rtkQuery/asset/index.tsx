// api
import { coreApi } from '../coreApi';

// types
import type { ApiResponseInterface } from '../servicesCommonTypes';
import type {
  AssetSearchServicePayloadInterface,
  AssetSearchServiceDataType,
  ProductServiceDataType,
  ProductServicePayloadInterface,
  SubAssetServiceDataInterface,
  SubAssetServicePayloadInterface,
  RegisterSubAssetServicePayloadInterface,
  RegisterSubAssetServiceDataType
} from './assetApiTypes';

export const assetApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    // /Asset/${productType}/Product/${code}
    product: builder.query<ProductServiceDataType, ProductServicePayloadInterface>({
      query: (args) => {
        const { productType, code } = args;
        return {
          url: `/Asset/${productType}/Product/${code}`
        };
      },
      transformResponse: (response: ApiResponseInterface<ProductServiceDataType>) =>
        response.data.data,
      providesTags: (products) =>
        products
          ? [
              ...products.map((product) => ({
                type: 'asset' as const,
                id: product.id
              })),
              { type: 'asset', id: 'product' }
            ]
          : [{ type: 'asset', id: 'product' }]
    }),

    // /Asset/Search
    assetSearch: builder.query<AssetSearchServiceDataType, AssetSearchServicePayloadInterface>({
      query: (args) => {
        const { productTypes, searchValue } = args;
        let url = '/Asset/Search?';
        productTypes.forEach((item) => {
          url += `productTypes=${item}&`;
        });
        return {
          url: url,
          params: { searchValue }
        };
      },
      transformResponse: (response: ApiResponseInterface<AssetSearchServiceDataType>) =>
        response.data.data,
      providesTags: (assets) =>
        assets
          ? [
              ...assets.map((asset) => ({
                type: 'asset' as const,
                id: asset.id
              })),
              { type: 'asset', id: 'assetSearch' }
            ]
          : [{ type: 'asset', id: 'assetSearch' }]
    }),

    // /Asset/SubAsset
    subAsset: builder.query<SubAssetServiceDataInterface, Partial<SubAssetServicePayloadInterface>>(
      {
        query: (args) => {
          const {
            Symbol,
            ProductType,
            NavType,
            SeoRegisterNo,
            TradeType,
            IROCompanyCode,
            IROSymbolCode
          } = args;
          return {
            url: '/Asset/SubAsset',
            params: {
              Symbol,
              ProductType,
              NavType,
              SeoRegisterNo,
              TradeType,
              IROCompanyCode,
              IROSymbolCode
            }
          };
        },
        transformResponse: (response: ApiResponseInterface<SubAssetServiceDataInterface>) =>
          response.data.data,
        providesTags: [{ type: 'asset', id: 'subAsset' }]
      }
    ),

    // '/Asset/Register-SubAsset'
    registerSubAsset: builder.mutation<
      RegisterSubAssetServiceDataType,
      RegisterSubAssetServicePayloadInterface
    >({
      query: (arg) => {
        const {
          symbol,
          englishSymbol,
          productType,
          navType,
          seoRegisterNo,
          tradeType,
          iroCompanyCode,
          iroSymbolCode
        } = arg;
        return {
          url: '/Asset/Register-SubAsset',
          method: 'POST',
          body: {
            symbol,
            englishSymbol,
            productType,
            navType,
            seoRegisterNo,
            tradeType,
            iroCompanyCode,
            iroSymbolCode
          }
        };
      },
      transformResponse: (response: ApiResponseInterface<RegisterSubAssetServiceDataType>) =>
        response.data.data,
      invalidatesTags: [{ type: 'asset', id: 'assetSearch' }]
    })
  }),

  overrideExisting: false
});

export const {
  useProductQuery,
  useAssetSearchQuery,
  useLazySubAssetQuery,
  useRegisterSubAssetMutation
} = assetApi;
