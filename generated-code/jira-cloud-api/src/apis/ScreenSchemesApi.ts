/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-b1f11b4174db39c259727b35fea4f2f138890399
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PageBeanScreenScheme,
  ScreenSchemeDetails,
  ScreenSchemeId,
  UpdateScreenSchemeDetails,
} from '../models';

export interface CreateScreenSchemeRequest {
    screenSchemeDetails: ScreenSchemeDetails;
}

export interface DeleteScreenSchemeRequest {
    screenSchemeId: string;
}

export interface GetScreenSchemesRequest {
    startAt?: number;
    maxResults?: number;
    id?: Array<number>;
    expand?: string;
    queryString?: string;
    orderBy?: GetScreenSchemesOrderByEnum;
}

export interface UpdateScreenSchemeRequest {
    screenSchemeId: string;
    updateScreenSchemeDetails: UpdateScreenSchemeDetails;
}

/**
 * 
 */
export class ScreenSchemesApi extends runtime.BaseAPI {

    /**
     * Creates a screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create screen scheme
     */
    async createScreenSchemeRaw(requestParameters: CreateScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScreenSchemeId>> {
        if (requestParameters.screenSchemeDetails === null || requestParameters.screenSchemeDetails === undefined) {
            throw new runtime.RequiredError('screenSchemeDetails','Required parameter requestParameters.screenSchemeDetails was null or undefined when calling createScreenScheme.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/screenscheme`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.screenSchemeDetails,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create screen scheme
     */
    async createScreenScheme(requestParameters: CreateScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScreenSchemeId> {
        const response = await this.createScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.  Only screens schemes used in classic projects can be deleted.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete screen scheme
     */
    async deleteScreenSchemeRaw(requestParameters: DeleteScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.screenSchemeId === null || requestParameters.screenSchemeId === undefined) {
            throw new runtime.RequiredError('screenSchemeId','Required parameter requestParameters.screenSchemeId was null or undefined when calling deleteScreenScheme.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/screenscheme/{screenSchemeId}`.replace(`{${"screenSchemeId"}}`, encodeURIComponent(String(requestParameters.screenSchemeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.  Only screens schemes used in classic projects can be deleted.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete screen scheme
     */
    async deleteScreenScheme(requestParameters: DeleteScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScreenSchemeRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a [paginated](#pagination) list of screen schemes.  Only screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get screen schemes
     */
    async getScreenSchemesRaw(requestParameters: GetScreenSchemesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanScreenScheme>> {
        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.id) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.queryString !== undefined) {
            queryParameters['queryString'] = requestParameters.queryString;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/screenscheme`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of screen schemes.  Only screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get screen schemes
     */
    async getScreenSchemes(requestParameters: GetScreenSchemesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanScreenScheme> {
        const response = await this.getScreenSchemesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a screen scheme. Only screen schemes used in classic projects can be updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update screen scheme
     */
    async updateScreenSchemeRaw(requestParameters: UpdateScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.screenSchemeId === null || requestParameters.screenSchemeId === undefined) {
            throw new runtime.RequiredError('screenSchemeId','Required parameter requestParameters.screenSchemeId was null or undefined when calling updateScreenScheme.');
        }

        if (requestParameters.updateScreenSchemeDetails === null || requestParameters.updateScreenSchemeDetails === undefined) {
            throw new runtime.RequiredError('updateScreenSchemeDetails','Required parameter requestParameters.updateScreenSchemeDetails was null or undefined when calling updateScreenScheme.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/screenscheme/{screenSchemeId}`.replace(`{${"screenSchemeId"}}`, encodeURIComponent(String(requestParameters.screenSchemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateScreenSchemeDetails,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates a screen scheme. Only screen schemes used in classic projects can be updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update screen scheme
     */
    async updateScreenScheme(requestParameters: UpdateScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetScreenSchemesOrderByEnum = {
    Name: 'name',
    NameDesc: '-name',
    NameAsc: '+name',
    Id: 'id',
    IdDesc: '-id',
    IdAsc: '+id'
} as const;
export type GetScreenSchemesOrderByEnum = typeof GetScreenSchemesOrderByEnum[keyof typeof GetScreenSchemesOrderByEnum];
