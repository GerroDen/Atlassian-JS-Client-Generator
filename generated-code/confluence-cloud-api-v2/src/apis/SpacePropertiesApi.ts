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
  MultiEntityResultSpaceProperty,
  SpaceProperty,
  SpacePropertyCreateRequest,
  SpacePropertyUpdateRequest,
} from '../models';

export interface CreateSpacePropertyRequest {
    spaceId: number;
    spacePropertyCreateRequest: SpacePropertyCreateRequest;
    serializeIdsAsStrings?: boolean;
}

export interface DeleteSpacePropertyByIdRequest {
    spaceId: number;
    propertyId: number;
}

export interface GetSpacePropertiesRequest {
    spaceId: number;
    key?: string;
    cursor?: string;
    limit?: number;
    serializeIdsAsStrings?: boolean;
}

export interface GetSpacePropertyByIdRequest {
    spaceId: number;
    propertyId: number;
    serializeIdsAsStrings?: boolean;
}

export interface UpdateSpacePropertyByIdRequest {
    spaceId: number;
    propertyId: number;
    spacePropertyUpdateRequest: SpacePropertyUpdateRequest;
    serializeIdsAsStrings?: boolean;
}

/**
 * 
 */
export class SpacePropertiesApi extends runtime.BaseAPI {

    /**
     * Creates a new space property.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Create space property in space
     */
    async createSpacePropertyRaw(requestParameters: CreateSpacePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpaceProperty>> {
        if (requestParameters.spaceId === null || requestParameters.spaceId === undefined) {
            throw new runtime.RequiredError('spaceId','Required parameter requestParameters.spaceId was null or undefined when calling createSpaceProperty.');
        }

        if (requestParameters.spacePropertyCreateRequest === null || requestParameters.spacePropertyCreateRequest === undefined) {
            throw new runtime.RequiredError('spacePropertyCreateRequest','Required parameter requestParameters.spacePropertyCreateRequest was null or undefined when calling createSpaceProperty.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence", "write:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{space-id}/properties`.replace(`{${"space-id"}}`, encodeURIComponent(String(requestParameters.spaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.spacePropertyCreateRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new space property.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Create space property in space
     */
    async createSpaceProperty(requestParameters: CreateSpacePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpaceProperty> {
        const response = await this.createSpacePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Delete space property by id
     */
    async deleteSpacePropertyByIdRaw(requestParameters: DeleteSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.spaceId === null || requestParameters.spaceId === undefined) {
            throw new runtime.RequiredError('spaceId','Required parameter requestParameters.spaceId was null or undefined when calling deleteSpacePropertyById.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling deleteSpacePropertyById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence", "write:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{space-id}/properties/{property-id}`.replace(`{${"space-id"}}`, encodeURIComponent(String(requestParameters.spaceId))).replace(`{${"property-id"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Delete space property by id
     */
    async deleteSpacePropertyById(requestParameters: DeleteSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSpacePropertyByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns all properties for the given space. Space properties are a key-value storage associated with a space. The limit parameter specifies the maximum number of results returned in a single response. Use the `link` response header to paginate through additional results.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space.
     * Get space properties in space
     */
    async getSpacePropertiesRaw(requestParameters: GetSpacePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultSpaceProperty>> {
        if (requestParameters.spaceId === null || requestParameters.spaceId === undefined) {
            throw new runtime.RequiredError('spaceId','Required parameter requestParameters.spaceId was null or undefined when calling getSpaceProperties.');
        }

        const queryParameters: any = {};

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{space-id}/properties`.replace(`{${"space-id"}}`, encodeURIComponent(String(requestParameters.spaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all properties for the given space. Space properties are a key-value storage associated with a space. The limit parameter specifies the maximum number of results returned in a single response. Use the `link` response header to paginate through additional results.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space.
     * Get space properties in space
     */
    async getSpaceProperties(requestParameters: GetSpacePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultSpaceProperty> {
        const response = await this.getSpacePropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space.
     * Get space property by id
     */
    async getSpacePropertyByIdRaw(requestParameters: GetSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpaceProperty>> {
        if (requestParameters.spaceId === null || requestParameters.spaceId === undefined) {
            throw new runtime.RequiredError('spaceId','Required parameter requestParameters.spaceId was null or undefined when calling getSpacePropertyById.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling getSpacePropertyById.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{space-id}/properties/{property-id}`.replace(`{${"space-id"}}`, encodeURIComponent(String(requestParameters.spaceId))).replace(`{${"property-id"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space.
     * Get space property by id
     */
    async getSpacePropertyById(requestParameters: GetSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpaceProperty> {
        const response = await this.getSpacePropertyByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Update space property by id
     */
    async updateSpacePropertyByIdRaw(requestParameters: UpdateSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpaceProperty>> {
        if (requestParameters.spaceId === null || requestParameters.spaceId === undefined) {
            throw new runtime.RequiredError('spaceId','Required parameter requestParameters.spaceId was null or undefined when calling updateSpacePropertyById.');
        }

        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling updateSpacePropertyById.');
        }

        if (requestParameters.spacePropertyUpdateRequest === null || requestParameters.spacePropertyUpdateRequest === undefined) {
            throw new runtime.RequiredError('spacePropertyUpdateRequest','Required parameter requestParameters.spacePropertyUpdateRequest was null or undefined when calling updateSpacePropertyById.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:space:confluence", "write:space:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{space-id}/properties/{property-id}`.replace(`{${"space-id"}}`, encodeURIComponent(String(requestParameters.spaceId))).replace(`{${"property-id"}}`, encodeURIComponent(String(requestParameters.propertyId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.spacePropertyUpdateRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'Admin\' permission for the space.
     * Update space property by id
     */
    async updateSpacePropertyById(requestParameters: UpdateSpacePropertyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpaceProperty> {
        const response = await this.updateSpacePropertyByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
