/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PageBeanIssueSecurityLevelMember,
  SecurityLevel,
} from '../models';

export interface GetIssueSecurityLevelRequest {
    id: string;
}

export interface GetIssueSecurityLevelMembersRequest {
    issueSecuritySchemeId: number;
    startAt?: number;
    maxResults?: number;
    issueSecurityLevelId?: Array<number>;
    expand?: string;
}

/**
 * 
 */
export class IssueSecurityLevelApi extends runtime.BaseAPI {

    /**
     * Returns details of an issue security level.  Use [Get issue security scheme](#api-rest-api-3-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get issue security level
     */
    async getIssueSecurityLevelRaw(requestParameters: GetIssueSecurityLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SecurityLevel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getIssueSecurityLevel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/securitylevel/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns details of an issue security level.  Use [Get issue security scheme](#api-rest-api-3-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get issue security level
     */
    async getIssueSecurityLevel(requestParameters: GetIssueSecurityLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SecurityLevel> {
        const response = await this.getIssueSecurityLevelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns issue security level members.  Only issue security level members in context of classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue security level members
     */
    async getIssueSecurityLevelMembersRaw(requestParameters: GetIssueSecurityLevelMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanIssueSecurityLevelMember>> {
        if (requestParameters.issueSecuritySchemeId === null || requestParameters.issueSecuritySchemeId === undefined) {
            throw new runtime.RequiredError('issueSecuritySchemeId','Required parameter requestParameters.issueSecuritySchemeId was null or undefined when calling getIssueSecurityLevelMembers.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.issueSecurityLevelId) {
            queryParameters['issueSecurityLevelId'] = requestParameters.issueSecurityLevelId;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-configuration"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members`.replace(`{${"issueSecuritySchemeId"}}`, encodeURIComponent(String(requestParameters.issueSecuritySchemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns issue security level members.  Only issue security level members in context of classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue security level members
     */
    async getIssueSecurityLevelMembers(requestParameters: GetIssueSecurityLevelMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanIssueSecurityLevelMember> {
        const response = await this.getIssueSecurityLevelMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
