/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-999314868b4eb1f4398346d9c7e37573154f3a1d
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConnectModules,
  ErrorMessage,
} from '../models/index';

export interface DynamicModulesResourceRegisterModulesPostRequest {
    connectModules: ConnectModules;
}

export interface DynamicModulesResourceRemoveModulesDeleteRequest {
    moduleKey?: Array<string>;
}

/**
 * 
 */
export class DynamicModulesApi extends runtime.BaseAPI {

    /**
     * Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Get modules
     */
    async dynamicModulesResourceGetModulesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectModules>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rest/atlassian-connect/1/app/module/dynamic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Get modules
     */
    async dynamicModulesResourceGetModulesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectModules> {
        const response = await this.dynamicModulesResourceGetModulesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Registers a list of modules.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Register modules
     */
    async dynamicModulesResourceRegisterModulesPostRaw(requestParameters: DynamicModulesResourceRegisterModulesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['connectModules'] == null) {
            throw new runtime.RequiredError(
                'connectModules',
                'Required parameter "connectModules" was null or undefined when calling dynamicModulesResourceRegisterModulesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/rest/atlassian-connect/1/app/module/dynamic`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['connectModules'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Registers a list of modules.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Register modules
     */
    async dynamicModulesResourceRegisterModulesPost(requestParameters: DynamicModulesResourceRegisterModulesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.dynamicModulesResourceRegisterModulesPostRaw(requestParameters, initOverrides);
    }

    /**
     * Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Remove modules
     */
    async dynamicModulesResourceRemoveModulesDeleteRaw(requestParameters: DynamicModulesResourceRemoveModulesDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters['moduleKey'] != null) {
            queryParameters['moduleKey'] = requestParameters['moduleKey'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rest/atlassian-connect/1/app/module/dynamic`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.
     * Remove modules
     */
    async dynamicModulesResourceRemoveModulesDelete(requestParameters: DynamicModulesResourceRemoveModulesDeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.dynamicModulesResourceRemoveModulesDeleteRaw(requestParameters, initOverrides);
    }

}
