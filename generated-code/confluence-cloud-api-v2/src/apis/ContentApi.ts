/* tslint:disable */
/* eslint-disable */
/**
 * The Confluence Cloud REST API v2
 * This document describes Confluence\'s v2 APIs. This is intended to be an iteration on the existing Confluence Cloud REST API with improvements in both endpoint definitions and performance.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ContentIdToContentTypeResponse,
  ConvertContentIdsToContentTypesRequest,
} from '../models/index';

export interface ConvertContentIdsToContentTypesOperationRequest {
    convertContentIdsToContentTypesRequest: ConvertContentIdsToContentTypesRequest;
}

/**
 * 
 */
export class ContentApi extends runtime.BaseAPI {

    /**
     * Converts a list of content ids into their associated content types. This is useful for users migrating from v1 to v2 who may have stored just content ids without their associated type. This will return types as they should be used in v2. Notably, this will return `inline-comment` for inline comments and `footer-comment` for footer comments, which is distinct from them both being represented by `comment` in v1.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the requested content. Any content that the user does not have permission to view or does not exist will map to `null` in the response.
     * Convert content ids to content types
     */
    async convertContentIdsToContentTypesRaw(requestParameters: ConvertContentIdsToContentTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentIdToContentTypeResponse>> {
        if (requestParameters['convertContentIdsToContentTypesRequest'] == null) {
            throw new runtime.RequiredError(
                'convertContentIdsToContentTypesRequest',
                'Required parameter "convertContentIdsToContentTypesRequest" was null or undefined when calling convertContentIdsToContentTypes().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", []);
        }

        const response = await this.request({
            path: `/content/convert-ids-to-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['convertContentIdsToContentTypesRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Converts a list of content ids into their associated content types. This is useful for users migrating from v1 to v2 who may have stored just content ids without their associated type. This will return types as they should be used in v2. Notably, this will return `inline-comment` for inline comments and `footer-comment` for footer comments, which is distinct from them both being represented by `comment` in v1.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the requested content. Any content that the user does not have permission to view or does not exist will map to `null` in the response.
     * Convert content ids to content types
     */
    async convertContentIdsToContentTypes(requestParameters: ConvertContentIdsToContentTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentIdToContentTypeResponse> {
        const response = await this.convertContentIdsToContentTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
