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
  RemoteIssueLink,
  RemoteIssueLinkIdentifies,
  RemoteIssueLinkRequest,
} from '../models';

export interface CreateOrUpdateRemoteIssueLinkRequest {
    issueIdOrKey: string;
    requestBody: { [key: string]: any; };
}

export interface DeleteRemoteIssueLinkByGlobalIdRequest {
    issueIdOrKey: string;
    globalId: string;
}

export interface DeleteRemoteIssueLinkByIdRequest {
    issueIdOrKey: string;
    linkId: string;
}

export interface GetRemoteIssueLinkByIdRequest {
    issueIdOrKey: string;
    linkId: string;
}

export interface GetRemoteIssueLinksRequest {
    issueIdOrKey: string;
    globalId?: string;
}

export interface UpdateRemoteIssueLinkRequest {
    issueIdOrKey: string;
    linkId: string;
    requestBody: { [key: string]: any; };
}

/**
 * 
 */
export class IssueRemoteLinksApi extends runtime.BaseAPI {

    /**
     * Creates or updates a remote issue link for an issue.  If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Create or update remote issue link
     */
    async createOrUpdateRemoteIssueLinkRaw(requestParameters: CreateOrUpdateRemoteIssueLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RemoteIssueLinkIdentifies>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling createOrUpdateRemoteIssueLink.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createOrUpdateRemoteIssueLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates or updates a remote issue link for an issue.  If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Create or update remote issue link
     */
    async createOrUpdateRemoteIssueLink(requestParameters: CreateOrUpdateRemoteIssueLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RemoteIssueLinkIdentifies> {
        const response = await this.createOrUpdateRemoteIssueLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the remote issue link from the issue using the link\'s global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.
     * Delete remote issue link by global ID
     */
    async deleteRemoteIssueLinkByGlobalIdRaw(requestParameters: DeleteRemoteIssueLinkByGlobalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling deleteRemoteIssueLinkByGlobalId.');
        }

        if (requestParameters.globalId === null || requestParameters.globalId === undefined) {
            throw new runtime.RequiredError('globalId','Required parameter requestParameters.globalId was null or undefined when calling deleteRemoteIssueLinkByGlobalId.');
        }

        const queryParameters: any = {};

        if (requestParameters.globalId !== undefined) {
            queryParameters['globalId'] = requestParameters.globalId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the remote issue link from the issue using the link\'s global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.
     * Delete remote issue link by global ID
     */
    async deleteRemoteIssueLinkByGlobalId(requestParameters: DeleteRemoteIssueLinkByGlobalIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRemoteIssueLinkByGlobalIdRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a remote issue link from an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Delete remote issue link by ID
     */
    async deleteRemoteIssueLinkByIdRaw(requestParameters: DeleteRemoteIssueLinkByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling deleteRemoteIssueLinkById.');
        }

        if (requestParameters.linkId === null || requestParameters.linkId === undefined) {
            throw new runtime.RequiredError('linkId','Required parameter requestParameters.linkId was null or undefined when calling deleteRemoteIssueLinkById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"linkId"}}`, encodeURIComponent(String(requestParameters.linkId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a remote issue link from an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Delete remote issue link by ID
     */
    async deleteRemoteIssueLinkById(requestParameters: DeleteRemoteIssueLinkByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRemoteIssueLinkByIdRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a remote issue link for an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get remote issue link by ID
     */
    async getRemoteIssueLinkByIdRaw(requestParameters: GetRemoteIssueLinkByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RemoteIssueLink>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling getRemoteIssueLinkById.');
        }

        if (requestParameters.linkId === null || requestParameters.linkId === undefined) {
            throw new runtime.RequiredError('linkId','Required parameter requestParameters.linkId was null or undefined when calling getRemoteIssueLinkById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"linkId"}}`, encodeURIComponent(String(requestParameters.linkId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a remote issue link for an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get remote issue link by ID
     */
    async getRemoteIssueLinkById(requestParameters: GetRemoteIssueLinkByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RemoteIssueLink> {
        const response = await this.getRemoteIssueLinkByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get remote issue links
     */
    async getRemoteIssueLinksRaw(requestParameters: GetRemoteIssueLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RemoteIssueLink>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling getRemoteIssueLinks.');
        }

        const queryParameters: any = {};

        if (requestParameters.globalId !== undefined) {
            queryParameters['globalId'] = requestParameters.globalId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Get remote issue links
     */
    async getRemoteIssueLinks(requestParameters: GetRemoteIssueLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RemoteIssueLink> {
        const response = await this.getRemoteIssueLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a remote issue link for an issue.  Note: Fields without values in the request are set to null.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Update remote issue link by ID
     */
    async updateRemoteIssueLinkRaw(requestParameters: UpdateRemoteIssueLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling updateRemoteIssueLink.');
        }

        if (requestParameters.linkId === null || requestParameters.linkId === undefined) {
            throw new runtime.RequiredError('linkId','Required parameter requestParameters.linkId was null or undefined when calling updateRemoteIssueLink.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateRemoteIssueLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"linkId"}}`, encodeURIComponent(String(requestParameters.linkId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates a remote issue link for an issue.  Note: Fields without values in the request are set to null.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Update remote issue link by ID
     */
    async updateRemoteIssueLink(requestParameters: UpdateRemoteIssueLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateRemoteIssueLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
