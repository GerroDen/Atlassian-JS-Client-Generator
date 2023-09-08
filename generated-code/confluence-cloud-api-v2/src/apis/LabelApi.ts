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
  LabelSortOrder,
  MultiEntityResultLabel,
} from '../models';

export interface GetAttachmentLabelsRequest {
    id: number;
    prefix?: GetAttachmentLabelsPrefixEnum;
    sort?: Array<LabelSortOrder>;
    cursor?: string;
    limit?: number;
}

export interface GetBlogPostLabelsRequest {
    id: number;
    prefix?: GetBlogPostLabelsPrefixEnum;
    sort?: Array<LabelSortOrder>;
    cursor?: string;
    limit?: number;
}

export interface GetCustomContentLabelsRequest {
    id: number;
    prefix?: GetCustomContentLabelsPrefixEnum;
    sort?: Array<LabelSortOrder>;
    cursor?: string;
    limit?: number;
}

export interface GetPageLabelsRequest {
    id: number;
    prefix?: GetPageLabelsPrefixEnum;
    sort?: Array<LabelSortOrder>;
    cursor?: string;
    limit?: number;
}

/**
 * 
 */
export class LabelApi extends runtime.BaseAPI {

    /**
     * Returns the labels of specific attachment. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the attachment and its corresponding space.
     * Get labels for attachment
     */
    async getAttachmentLabelsRaw(requestParameters: GetAttachmentLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultLabel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAttachmentLabels.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sort) {
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:attachment:confluence"]);
        }

        const response = await this.request({
            path: `/attachments/{id}/labels`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the labels of specific attachment. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the attachment and its corresponding space.
     * Get labels for attachment
     */
    async getAttachmentLabels(requestParameters: GetAttachmentLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultLabel> {
        const response = await this.getAttachmentLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the labels of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the blog post and its corresponding space.
     * Get labels for blog post
     */
    async getBlogPostLabelsRaw(requestParameters: GetBlogPostLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultLabel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBlogPostLabels.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sort) {
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
            path: `/blogposts/{id}/labels`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the labels of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the blog post and its corresponding space.
     * Get labels for blog post
     */
    async getBlogPostLabels(requestParameters: GetBlogPostLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultLabel> {
        const response = await this.getBlogPostLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the labels for a specific piece of custom content. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and its corresponding space.
     * Get labels for custom content
     */
    async getCustomContentLabelsRaw(requestParameters: GetCustomContentLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultLabel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomContentLabels.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sort) {
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
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:custom-content:confluence"]);
        }

        const response = await this.request({
            path: `/custom-content/{id}/labels`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the labels for a specific piece of custom content. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and its corresponding space.
     * Get labels for custom content
     */
    async getCustomContentLabels(requestParameters: GetCustomContentLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultLabel> {
        const response = await this.getCustomContentLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the labels of specific page. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.
     * Get labels for page
     */
    async getPageLabelsRaw(requestParameters: GetPageLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultLabel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPageLabels.');
        }

        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['prefix'] = requestParameters.prefix;
        }

        if (requestParameters.sort) {
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
            path: `/pages/{id}/labels`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the labels of specific page. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.
     * Get labels for page
     */
    async getPageLabels(requestParameters: GetPageLabelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultLabel> {
        const response = await this.getPageLabelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAttachmentLabelsPrefixEnum = {
    My: 'my',
    Team: 'team',
    Global: 'global',
    System: 'system'
} as const;
export type GetAttachmentLabelsPrefixEnum = typeof GetAttachmentLabelsPrefixEnum[keyof typeof GetAttachmentLabelsPrefixEnum];
/**
 * @export
 */
export const GetBlogPostLabelsPrefixEnum = {
    My: 'my',
    Team: 'team',
    Global: 'global',
    System: 'system'
} as const;
export type GetBlogPostLabelsPrefixEnum = typeof GetBlogPostLabelsPrefixEnum[keyof typeof GetBlogPostLabelsPrefixEnum];
/**
 * @export
 */
export const GetCustomContentLabelsPrefixEnum = {
    My: 'my',
    Team: 'team',
    Global: 'global',
    System: 'system'
} as const;
export type GetCustomContentLabelsPrefixEnum = typeof GetCustomContentLabelsPrefixEnum[keyof typeof GetCustomContentLabelsPrefixEnum];
/**
 * @export
 */
export const GetPageLabelsPrefixEnum = {
    My: 'my',
    Team: 'team',
    Global: 'global',
    System: 'system'
} as const;
export type GetPageLabelsPrefixEnum = typeof GetPageLabelsPrefixEnum[keyof typeof GetPageLabelsPrefixEnum];
