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
  ComponentIssuesCount,
  PageBean2ComponentJsonBean,
  PageBeanComponentWithIssueCount,
  ProjectComponent,
} from '../models/index';

export interface CreateComponentRequest {
    projectComponent: Omit<ProjectComponent, 'ari'|'assignee'|'id'|'isAssigneeTypeValid'|'lead'|'metadata'|'projectId'|'realAssignee'|'realAssigneeType'|'self'>;
}

export interface DeleteComponentRequest {
    id: string;
    moveIssuesTo?: string;
}

export interface FindComponentsForProjectsRequest {
    projectIdsOrKeys?: Array<string>;
    startAt?: number;
    maxResults?: number;
    orderBy?: FindComponentsForProjectsOrderByEnum;
    query?: string;
}

export interface GetComponentRequest {
    id: string;
}

export interface GetComponentRelatedIssuesRequest {
    id: string;
}

export interface GetProjectComponentsRequest {
    projectIdOrKey: string;
    componentSource?: GetProjectComponentsComponentSourceEnum;
}

export interface GetProjectComponentsPaginatedRequest {
    projectIdOrKey: string;
    startAt?: number;
    maxResults?: number;
    orderBy?: GetProjectComponentsPaginatedOrderByEnum;
    componentSource?: GetProjectComponentsPaginatedComponentSourceEnum;
    query?: string;
}

export interface UpdateComponentRequest {
    id: string;
    projectComponent: Omit<ProjectComponent, 'ari'|'assignee'|'id'|'isAssigneeTypeValid'|'lead'|'metadata'|'projectId'|'realAssignee'|'realAssigneeType'|'self'>;
}

/**
 * 
 */
export class ProjectComponentsApi extends runtime.BaseAPI {

    /**
     * Creates a component. Use components to provide containers for issues within a project. Use components to provide containers for issues within a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create component
     */
    async createComponentRaw(requestParameters: CreateComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectComponent>> {
        if (requestParameters['projectComponent'] == null) {
            throw new runtime.RequiredError(
                'projectComponent',
                'Required parameter "projectComponent" was null or undefined when calling createComponent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/component`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['projectComponent'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a component. Use components to provide containers for issues within a project. Use components to provide containers for issues within a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create component
     */
    async createComponent(requestParameters: CreateComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectComponent> {
        const response = await this.createComponentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete component
     */
    async deleteComponentRaw(requestParameters: DeleteComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteComponent().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['moveIssuesTo'] != null) {
            queryParameters['moveIssuesTo'] = requestParameters['moveIssuesTo'];
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
            path: `/rest/api/3/component/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete component
     */
    async deleteComponent(requestParameters: DeleteComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteComponentRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a [paginated](#pagination) list of all components in a project, including global (Compass) components when applicable.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Find components for projects
     */
    async findComponentsForProjectsRaw(requestParameters: FindComponentsForProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBean2ComponentJsonBean>> {
        const queryParameters: any = {};

        if (requestParameters['projectIdsOrKeys'] != null) {
            queryParameters['projectIdsOrKeys'] = requestParameters['projectIdsOrKeys'];
        }

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['orderBy'] = requestParameters['orderBy'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
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
            path: `/rest/api/3/component`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of all components in a project, including global (Compass) components when applicable.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Find components for projects
     */
    async findComponentsForProjects(requestParameters: FindComponentsForProjectsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBean2ComponentJsonBean> {
        const response = await this.findComponentsForProjectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
     * Get component
     */
    async getComponentRaw(requestParameters: GetComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectComponent>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getComponent().'
            );
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
            path: `/rest/api/3/component/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
     * Get component
     */
    async getComponent(requestParameters: GetComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectComponent> {
        const response = await this.getComponentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the counts of issues assigned to the component.  This operation can be accessed anonymously.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: `read:jira-work`  *  **Granular**: `read:field:jira`, `read:project.component:jira`  **[Permissions](#permissions) required:** None.
     * Get component issues count
     */
    async getComponentRelatedIssuesRaw(requestParameters: GetComponentRelatedIssuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComponentIssuesCount>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getComponentRelatedIssues().'
            );
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
            path: `/rest/api/3/component/{id}/relatedIssueCounts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the counts of issues assigned to the component.  This operation can be accessed anonymously.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: `read:jira-work`  *  **Granular**: `read:field:jira`, `read:project.component:jira`  **[Permissions](#permissions) required:** None.
     * Get component issues count
     */
    async getComponentRelatedIssues(requestParameters: GetComponentRelatedIssuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComponentIssuesCount> {
        const response = await this.getComponentRelatedIssuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.  If your project uses Compass components, this API will return a paginated list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project components
     */
    async getProjectComponentsRaw(requestParameters: GetProjectComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectComponent>>> {
        if (requestParameters['projectIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'projectIdOrKey',
                'Required parameter "projectIdOrKey" was null or undefined when calling getProjectComponents().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['componentSource'] != null) {
            queryParameters['componentSource'] = requestParameters['componentSource'];
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
            path: `/rest/api/3/project/{projectIdOrKey}/components`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters['projectIdOrKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.  If your project uses Compass components, this API will return a paginated list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project components
     */
    async getProjectComponents(requestParameters: GetProjectComponentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectComponent>> {
        const response = await this.getProjectComponentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.  If your project uses Compass components, this API will return a list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project components paginated
     */
    async getProjectComponentsPaginatedRaw(requestParameters: GetProjectComponentsPaginatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanComponentWithIssueCount>> {
        if (requestParameters['projectIdOrKey'] == null) {
            throw new runtime.RequiredError(
                'projectIdOrKey',
                'Required parameter "projectIdOrKey" was null or undefined when calling getProjectComponentsPaginated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['orderBy'] != null) {
            queryParameters['orderBy'] = requestParameters['orderBy'];
        }

        if (requestParameters['componentSource'] != null) {
            queryParameters['componentSource'] = requestParameters['componentSource'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
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
            path: `/rest/api/3/project/{projectIdOrKey}/component`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters['projectIdOrKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.  If your project uses Compass components, this API will return a list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project components paginated
     */
    async getProjectComponentsPaginated(requestParameters: GetProjectComponentsPaginatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanComponentWithIssueCount> {
        const response = await this.getProjectComponentsPaginatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string (\"\") the component lead is removed.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update component
     */
    async updateComponentRaw(requestParameters: UpdateComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectComponent>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateComponent().'
            );
        }

        if (requestParameters['projectComponent'] == null) {
            throw new runtime.RequiredError(
                'projectComponent',
                'Required parameter "projectComponent" was null or undefined when calling updateComponent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/component/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['projectComponent'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string (\"\") the component lead is removed.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update component
     */
    async updateComponent(requestParameters: UpdateComponentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectComponent> {
        const response = await this.updateComponentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FindComponentsForProjectsOrderByEnum = {
    Description: 'description',
    Description2Desc: '-description',
    Description3Asc: '+description',
    Name: 'name',
    Name2Desc: '-name',
    Name3Asc: '+name'
} as const;
export type FindComponentsForProjectsOrderByEnum = typeof FindComponentsForProjectsOrderByEnum[keyof typeof FindComponentsForProjectsOrderByEnum];
/**
 * @export
 */
export const GetProjectComponentsComponentSourceEnum = {
    Jira: 'jira',
    Compass: 'compass',
    Auto: 'auto'
} as const;
export type GetProjectComponentsComponentSourceEnum = typeof GetProjectComponentsComponentSourceEnum[keyof typeof GetProjectComponentsComponentSourceEnum];
/**
 * @export
 */
export const GetProjectComponentsPaginatedOrderByEnum = {
    Description: 'description',
    Description2Desc: '-description',
    Description3Asc: '+description',
    IssueCount: 'issueCount',
    IssueCount2Desc: '-issueCount',
    IssueCount3Asc: '+issueCount',
    Lead: 'lead',
    Lead2Desc: '-lead',
    Lead3Asc: '+lead',
    Name: 'name',
    Name2Desc: '-name',
    Name3Asc: '+name'
} as const;
export type GetProjectComponentsPaginatedOrderByEnum = typeof GetProjectComponentsPaginatedOrderByEnum[keyof typeof GetProjectComponentsPaginatedOrderByEnum];
/**
 * @export
 */
export const GetProjectComponentsPaginatedComponentSourceEnum = {
    Jira: 'jira',
    Compass: 'compass',
    Auto: 'auto'
} as const;
export type GetProjectComponentsPaginatedComponentSourceEnum = typeof GetProjectComponentsPaginatedComponentSourceEnum[keyof typeof GetProjectComponentsPaginatedComponentSourceEnum];
