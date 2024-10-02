/* tslint:disable */
/* eslint-disable */
/**
 * Service Management Public REST API
 * Public REST API for Jira Service Management
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b3300bcdd36d8c214940b3035162ea6fa1d58aa8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  PagedDTORequestTypeDTO,
} from '../models/index';

export interface GetAllRequestTypesRequest {
    searchQuery?: string;
    serviceDeskId?: Array<number>;
    start?: number;
    limit?: number;
    expand?: Array<string>;
    includeHiddenRequestTypesInSearch?: boolean;
    restrictionStatus?: string;
}

/**
 * 
 */
export class RequesttypeApi extends runtime.BaseAPI {

    /**
     * This method returns all customer request types used in the Jira Service Management instance, optionally filtered by a query string.  Use [servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype](#api-servicedesk-serviceDeskId-requesttype-get) to find the customer request types supported by a specific service desk.  The returned list of customer request types can be filtered using the `searchQuery` parameter. The parameter is matched against the customer request types\' `name` or `description`. For example, searching for \"Install\", \"Inst\", \"Equi\", or \"Equipment\" will match a customer request type with the *name* \"Equipment Installation Request\".  **Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\'t have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren\'t admins.  **[Permissions](#permissions) required**: Any
     * Get all request types
     */
    async getAllRequestTypesRaw(requestParameters: GetAllRequestTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedDTORequestTypeDTO>> {
        const queryParameters: any = {};

        if (requestParameters['searchQuery'] != null) {
            queryParameters['searchQuery'] = requestParameters['searchQuery'];
        }

        if (requestParameters['serviceDeskId'] != null) {
            queryParameters['serviceDeskId'] = requestParameters['serviceDeskId'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        if (requestParameters['includeHiddenRequestTypesInSearch'] != null) {
            queryParameters['includeHiddenRequestTypesInSearch'] = requestParameters['includeHiddenRequestTypesInSearch'];
        }

        if (requestParameters['restrictionStatus'] != null) {
            queryParameters['restrictionStatus'] = requestParameters['restrictionStatus'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:servicedesk-request"]);
        }

        const response = await this.request({
            path: `/rest/servicedeskapi/requesttype`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * This method returns all customer request types used in the Jira Service Management instance, optionally filtered by a query string.  Use [servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype](#api-servicedesk-serviceDeskId-requesttype-get) to find the customer request types supported by a specific service desk.  The returned list of customer request types can be filtered using the `searchQuery` parameter. The parameter is matched against the customer request types\' `name` or `description`. For example, searching for \"Install\", \"Inst\", \"Equi\", or \"Equipment\" will match a customer request type with the *name* \"Equipment Installation Request\".  **Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\'t have permission) when `searchQuery` is provided, unless `includeHiddenRequestTypesInSearch` is set to true. Restricted request types will not be returned for those who aren\'t admins.  **[Permissions](#permissions) required**: Any
     * Get all request types
     */
    async getAllRequestTypes(requestParameters: GetAllRequestTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedDTORequestTypeDTO> {
        const response = await this.getAllRequestTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}