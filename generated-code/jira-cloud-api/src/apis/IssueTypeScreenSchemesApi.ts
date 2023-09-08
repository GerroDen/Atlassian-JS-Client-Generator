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
  IssueTypeIds,
  IssueTypeScreenSchemeDetails,
  IssueTypeScreenSchemeId,
  IssueTypeScreenSchemeMappingDetails,
  IssueTypeScreenSchemeProjectAssociation,
  IssueTypeScreenSchemeUpdateDetails,
  PageBeanIssueTypeScreenScheme,
  PageBeanIssueTypeScreenSchemeItem,
  PageBeanIssueTypeScreenSchemesProjects,
  PageBeanProjectDetails,
  UpdateDefaultScreenScheme,
} from '../models';

export interface AppendMappingsForIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeId: string;
    issueTypeScreenSchemeMappingDetails: IssueTypeScreenSchemeMappingDetails;
}

export interface AssignIssueTypeScreenSchemeToProjectRequest {
    issueTypeScreenSchemeProjectAssociation: IssueTypeScreenSchemeProjectAssociation;
}

export interface CreateIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeDetails: IssueTypeScreenSchemeDetails;
}

export interface DeleteIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeId: string;
}

export interface GetIssueTypeScreenSchemeMappingsRequest {
    startAt?: number;
    maxResults?: number;
    issueTypeScreenSchemeId?: Array<number>;
}

export interface GetIssueTypeScreenSchemeProjectAssociationsRequest {
    projectId: Array<number>;
    startAt?: number;
    maxResults?: number;
}

export interface GetIssueTypeScreenSchemesRequest {
    startAt?: number;
    maxResults?: number;
    id?: Array<number>;
    queryString?: string;
    orderBy?: GetIssueTypeScreenSchemesOrderByEnum;
    expand?: string;
}

export interface GetProjectsForIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeId: number;
    startAt?: number;
    maxResults?: number;
    query?: string;
}

export interface RemoveMappingsFromIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeId: string;
    issueTypeIds: IssueTypeIds;
}

export interface UpdateDefaultScreenSchemeRequest {
    issueTypeScreenSchemeId: string;
    updateDefaultScreenScheme: UpdateDefaultScreenScheme;
}

export interface UpdateIssueTypeScreenSchemeRequest {
    issueTypeScreenSchemeId: string;
    issueTypeScreenSchemeUpdateDetails: IssueTypeScreenSchemeUpdateDetails;
}

/**
 * 
 */
export class IssueTypeScreenSchemesApi extends runtime.BaseAPI {

    /**
     * Appends issue type to screen scheme mappings to an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Append mappings to issue type screen scheme
     */
    async appendMappingsForIssueTypeScreenSchemeRaw(requestParameters: AppendMappingsForIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling appendMappingsForIssueTypeScreenScheme.');
        }

        if (requestParameters.issueTypeScreenSchemeMappingDetails === null || requestParameters.issueTypeScreenSchemeMappingDetails === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeMappingDetails','Required parameter requestParameters.issueTypeScreenSchemeMappingDetails was null or undefined when calling appendMappingsForIssueTypeScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueTypeScreenSchemeMappingDetails,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Appends issue type to screen scheme mappings to an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Append mappings to issue type screen scheme
     */
    async appendMappingsForIssueTypeScreenScheme(requestParameters: AppendMappingsForIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.appendMappingsForIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assigns an issue type screen scheme to a project.  Issue type screen schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Assign issue type screen scheme to project
     */
    async assignIssueTypeScreenSchemeToProjectRaw(requestParameters: AssignIssueTypeScreenSchemeToProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeProjectAssociation === null || requestParameters.issueTypeScreenSchemeProjectAssociation === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeProjectAssociation','Required parameter requestParameters.issueTypeScreenSchemeProjectAssociation was null or undefined when calling assignIssueTypeScreenSchemeToProject.');
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
            path: `/rest/api/3/issuetypescreenscheme/project`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueTypeScreenSchemeProjectAssociation,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Assigns an issue type screen scheme to a project.  Issue type screen schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Assign issue type screen scheme to project
     */
    async assignIssueTypeScreenSchemeToProject(requestParameters: AssignIssueTypeScreenSchemeToProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.assignIssueTypeScreenSchemeToProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create issue type screen scheme
     */
    async createIssueTypeScreenSchemeRaw(requestParameters: CreateIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IssueTypeScreenSchemeId>> {
        if (requestParameters.issueTypeScreenSchemeDetails === null || requestParameters.issueTypeScreenSchemeDetails === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeDetails','Required parameter requestParameters.issueTypeScreenSchemeDetails was null or undefined when calling createIssueTypeScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueTypeScreenSchemeDetails,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create issue type screen scheme
     */
    async createIssueTypeScreenScheme(requestParameters: CreateIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IssueTypeScreenSchemeId> {
        const response = await this.createIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue type screen scheme
     */
    async deleteIssueTypeScreenSchemeRaw(requestParameters: DeleteIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling deleteIssueTypeScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue type screen scheme
     */
    async deleteIssueTypeScreenScheme(requestParameters: DeleteIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen scheme items.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen scheme items
     */
    async getIssueTypeScreenSchemeMappingsRaw(requestParameters: GetIssueTypeScreenSchemeMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanIssueTypeScreenSchemeItem>> {
        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.issueTypeScreenSchemeId) {
            queryParameters['issueTypeScreenSchemeId'] = requestParameters.issueTypeScreenSchemeId;
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
            path: `/rest/api/3/issuetypescreenscheme/mapping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen scheme items.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen scheme items
     */
    async getIssueTypeScreenSchemeMappings(requestParameters: GetIssueTypeScreenSchemeMappingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanIssueTypeScreenSchemeItem> {
        const response = await this.getIssueTypeScreenSchemeMappingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen schemes for projects
     */
    async getIssueTypeScreenSchemeProjectAssociationsRaw(requestParameters: GetIssueTypeScreenSchemeProjectAssociationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanIssueTypeScreenSchemesProjects>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getIssueTypeScreenSchemeProjectAssociations.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.projectId) {
            queryParameters['projectId'] = requestParameters.projectId;
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
            path: `/rest/api/3/issuetypescreenscheme/project`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen schemes for projects
     */
    async getIssueTypeScreenSchemeProjectAssociations(requestParameters: GetIssueTypeScreenSchemeProjectAssociationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanIssueTypeScreenSchemesProjects> {
        const response = await this.getIssueTypeScreenSchemeProjectAssociationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen schemes.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen schemes
     */
    async getIssueTypeScreenSchemesRaw(requestParameters: GetIssueTypeScreenSchemesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanIssueTypeScreenScheme>> {
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

        if (requestParameters.queryString !== undefined) {
            queryParameters['queryString'] = requestParameters.queryString;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
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
            path: `/rest/api/3/issuetypescreenscheme`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of issue type screen schemes.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen schemes
     */
    async getIssueTypeScreenSchemes(requestParameters: GetIssueTypeScreenSchemesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanIssueTypeScreenScheme> {
        const response = await this.getIssueTypeScreenSchemesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme.  Only company-managed projects associated with an issue type screen scheme are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen scheme projects
     */
    async getProjectsForIssueTypeScreenSchemeRaw(requestParameters: GetProjectsForIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanProjectDetails>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling getProjectsForIssueTypeScreenScheme.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme.  Only company-managed projects associated with an issue type screen scheme are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get issue type screen scheme projects
     */
    async getProjectsForIssueTypeScreenScheme(requestParameters: GetProjectsForIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanProjectDetails> {
        const response = await this.getProjectsForIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes issue type to screen scheme mappings from an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Remove mappings from issue type screen scheme
     */
    async removeMappingsFromIssueTypeScreenSchemeRaw(requestParameters: RemoveMappingsFromIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling removeMappingsFromIssueTypeScreenScheme.');
        }

        if (requestParameters.issueTypeIds === null || requestParameters.issueTypeIds === undefined) {
            throw new runtime.RequiredError('issueTypeIds','Required parameter requestParameters.issueTypeIds was null or undefined when calling removeMappingsFromIssueTypeScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueTypeIds,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Removes issue type to screen scheme mappings from an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Remove mappings from issue type screen scheme
     */
    async removeMappingsFromIssueTypeScreenScheme(requestParameters: RemoveMappingsFromIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.removeMappingsFromIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue type screen scheme default screen scheme
     */
    async updateDefaultScreenSchemeRaw(requestParameters: UpdateDefaultScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling updateDefaultScreenScheme.');
        }

        if (requestParameters.updateDefaultScreenScheme === null || requestParameters.updateDefaultScreenScheme === undefined) {
            throw new runtime.RequiredError('updateDefaultScreenScheme','Required parameter requestParameters.updateDefaultScreenScheme was null or undefined when calling updateDefaultScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateDefaultScreenScheme,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue type screen scheme default screen scheme
     */
    async updateDefaultScreenScheme(requestParameters: UpdateDefaultScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateDefaultScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue type screen scheme
     */
    async updateIssueTypeScreenSchemeRaw(requestParameters: UpdateIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.issueTypeScreenSchemeId === null || requestParameters.issueTypeScreenSchemeId === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeId','Required parameter requestParameters.issueTypeScreenSchemeId was null or undefined when calling updateIssueTypeScreenScheme.');
        }

        if (requestParameters.issueTypeScreenSchemeUpdateDetails === null || requestParameters.issueTypeScreenSchemeUpdateDetails === undefined) {
            throw new runtime.RequiredError('issueTypeScreenSchemeUpdateDetails','Required parameter requestParameters.issueTypeScreenSchemeUpdateDetails was null or undefined when calling updateIssueTypeScreenScheme.');
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
            path: `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}`.replace(`{${"issueTypeScreenSchemeId"}}`, encodeURIComponent(String(requestParameters.issueTypeScreenSchemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueTypeScreenSchemeUpdateDetails,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update issue type screen scheme
     */
    async updateIssueTypeScreenScheme(requestParameters: UpdateIssueTypeScreenSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateIssueTypeScreenSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetIssueTypeScreenSchemesOrderByEnum = {
    Name: 'name',
    NameDesc: '-name',
    NameAsc: '+name',
    Id: 'id',
    IdDesc: '-id',
    IdAsc: '+id'
} as const;
export type GetIssueTypeScreenSchemesOrderByEnum = typeof GetIssueTypeScreenSchemesOrderByEnum[keyof typeof GetIssueTypeScreenSchemesOrderByEnum];
