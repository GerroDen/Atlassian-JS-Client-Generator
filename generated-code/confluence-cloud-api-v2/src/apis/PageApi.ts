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
  CreatePageRequest,
  MultiEntityResultPage,
  PageSingle,
  PageSortOrder,
  PrimaryBodyRepresentation,
  PrimaryBodyRepresentationSingle,
  UpdatePageRequest,
} from '../models';

export interface CreatePageOperationRequest {
    createPageRequest: CreatePageRequest;
    embedded?: boolean;
    _private?: boolean;
}

export interface DeletePageRequest {
    id: number;
}

export interface GetLabelPagesRequest {
    id: number;
    spaceId?: Array<number>;
    bodyFormat?: PrimaryBodyRepresentation;
    sort?: PageSortOrder;
    cursor?: string;
    limit?: number;
}

export interface GetPageByIdRequest {
    id: number;
    bodyFormat?: PrimaryBodyRepresentationSingle;
    getDraft?: boolean;
    version?: number;
}

export interface GetPagesRequest {
    id?: Array<number>;
    spaceId?: Array<number>;
    sort?: PageSortOrder;
    status?: Array<GetPagesStatusEnum>;
    title?: string;
    bodyFormat?: PrimaryBodyRepresentation;
    cursor?: string;
    limit?: number;
}

export interface GetPagesInSpaceRequest {
    id: number;
    depth?: GetPagesInSpaceDepthEnum;
    sort?: PageSortOrder;
    status?: Array<GetPagesInSpaceStatusEnum>;
    title?: string;
    bodyFormat?: PrimaryBodyRepresentation;
    cursor?: string;
    limit?: number;
}

export interface UpdatePageOperationRequest {
    id: number;
    updatePageRequest: UpdatePageRequest;
}

/**
 * 
 */
export class PageApi extends runtime.BaseAPI {

    /**
     * Creates a page in the space.  Pages are created as published by default unless specified as a draft in the status field. If creating a published page, the title must be specified.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a page in the space.
     * Create page
     */
    async createPageRaw(requestParameters: CreatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageSingle>> {
        if (requestParameters.createPageRequest === null || requestParameters.createPageRequest === undefined) {
            throw new runtime.RequiredError('createPageRequest','Required parameter requestParameters.createPageRequest was null or undefined when calling createPage.');
        }

        const queryParameters: any = {};

        if (requestParameters.embedded !== undefined) {
            queryParameters['embedded'] = requestParameters.embedded;
        }

        if (requestParameters._private !== undefined) {
            queryParameters['private'] = requestParameters._private;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createPageRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a page in the space.  Pages are created as published by default unless specified as a draft in the status field. If creating a published page, the title must be specified.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a page in the space.
     * Create page
     */
    async createPage(requestParameters: CreatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageSingle> {
        const response = await this.createPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a page by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to delete pages in the space.
     * Delete page
     */
    async deletePageRaw(requestParameters: DeletePageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["delete:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a page by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to delete pages in the space.
     * Delete page
     */
    async deletePage(requestParameters: DeletePageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePageRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the pages of specified label. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.
     * Get pages for label
     */
    async getLabelPagesRaw(requestParameters: GetLabelPagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultPage>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getLabelPages.');
        }

        const queryParameters: any = {};

        if (requestParameters.spaceId) {
            queryParameters['space-id'] = requestParameters.spaceId;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/labels/{id}/pages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the pages of specified label. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.
     * Get pages for label
     */
    async getLabelPages(requestParameters: GetLabelPagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultPage> {
        const response = await this.getLabelPagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space.
     * Get page by id
     */
    async getPageByIdRaw(requestParameters: GetPageByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPageById.');
        }

        const queryParameters: any = {};

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.getDraft !== undefined) {
            queryParameters['get-draft'] = requestParameters.getDraft;
        }

        if (requestParameters.version !== undefined) {
            queryParameters['version'] = requestParameters.version;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space.
     * Get page by id
     */
    async getPageById(requestParameters: GetPageByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageSingle> {
        const response = await this.getPageByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all pages. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). Only pages that the user has permission to view will be returned.
     * Get pages
     */
    async getPagesRaw(requestParameters: GetPagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultPage>> {
        const queryParameters: any = {};

        if (requestParameters.id) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.spaceId) {
            queryParameters['space-id'] = requestParameters.spaceId;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all pages. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). Only pages that the user has permission to view will be returned.
     * Get pages
     */
    async getPages(requestParameters: GetPagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultPage> {
        const response = await this.getPagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all pages in a space. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space. Only pages that the user has permission to view will be returned.
     * Get pages in space
     */
    async getPagesInSpaceRaw(requestParameters: GetPagesInSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultPage>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPagesInSpace.');
        }

        const queryParameters: any = {};

        if (requestParameters.depth !== undefined) {
            queryParameters['depth'] = requestParameters.depth;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.title !== undefined) {
            queryParameters['title'] = requestParameters.title;
        }

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:page:confluence"]);
        }

        const response = await this.request({
            path: `/spaces/{id}/pages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all pages in a space. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission) and \'View\' permission for the space. Only pages that the user has permission to view will be returned.
     * Get pages in space
     */
    async getPagesInSpace(requestParameters: GetPagesInSpaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultPage> {
        const response = await this.getPagesInSpaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a page by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to update pages in the space.
     * Update page
     */
    async updatePageRaw(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updatePage.');
        }

        if (requestParameters.updatePageRequest === null || requestParameters.updatePageRequest === undefined) {
            throw new runtime.RequiredError('updatePageRequest','Required parameter requestParameters.updatePageRequest was null or undefined when calling updatePage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["write:page:confluence"]);
        }

        const response = await this.request({
            path: `/pages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updatePageRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a page by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to update pages in the space.
     * Update page
     */
    async updatePage(requestParameters: UpdatePageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageSingle> {
        const response = await this.updatePageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetPagesStatusEnum = {
    Current: 'current',
    Archived: 'archived',
    Deleted: 'deleted',
    Trashed: 'trashed'
} as const;
export type GetPagesStatusEnum = typeof GetPagesStatusEnum[keyof typeof GetPagesStatusEnum];
/**
 * @export
 */
export const GetPagesInSpaceDepthEnum = {
    All: 'all',
    Root: 'root'
} as const;
export type GetPagesInSpaceDepthEnum = typeof GetPagesInSpaceDepthEnum[keyof typeof GetPagesInSpaceDepthEnum];
/**
 * @export
 */
export const GetPagesInSpaceStatusEnum = {
    Current: 'current',
    Archived: 'archived',
    Deleted: 'deleted',
    Trashed: 'trashed'
} as const;
export type GetPagesInSpaceStatusEnum = typeof GetPagesInSpaceStatusEnum[keyof typeof GetPagesInSpaceStatusEnum];
