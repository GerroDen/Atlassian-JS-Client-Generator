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
  ActorInputBean,
  ActorsMap,
  ProjectRole,
  ProjectRoleActorsUpdateBean,
} from '../models';

export interface AddActorUsersRequest {
    projectIdOrKey: string;
    id: number;
    actorsMap: ActorsMap;
}

export interface AddProjectRoleActorsToRoleRequest {
    id: number;
    actorInputBean: ActorInputBean;
}

export interface DeleteActorRequest {
    projectIdOrKey: string;
    id: number;
    user?: string;
    group?: string;
    groupId?: string;
}

export interface DeleteProjectRoleActorsFromRoleRequest {
    id: number;
    user?: string;
    groupId?: string;
    group?: string;
}

export interface GetProjectRoleActorsForRoleRequest {
    id: number;
}

export interface SetActorsRequest {
    projectIdOrKey: string;
    id: number;
    projectRoleActorsUpdateBean: ProjectRoleActorsUpdateBean;
}

/**
 * 
 */
export class ProjectRoleActorsApi extends runtime.BaseAPI {

    /**
     * Adds actors to a project role for the project.  To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add actors to project role
     */
    async addActorUsersRaw(requestParameters: AddActorUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling addActorUsers.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addActorUsers.');
        }

        if (requestParameters.actorsMap === null || requestParameters.actorsMap === undefined) {
            throw new runtime.RequiredError('actorsMap','Required parameter requestParameters.actorsMap was null or undefined when calling addActorUsers.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/role/{id}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.actorsMap,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds actors to a project role for the project.  To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add actors to project role
     */
    async addActorUsers(requestParameters: AddActorUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.addActorUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request.  Changing a project role\'s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add default actors to project role
     */
    async addProjectRoleActorsToRoleRaw(requestParameters: AddProjectRoleActorsToRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addProjectRoleActorsToRole.');
        }

        if (requestParameters.actorInputBean === null || requestParameters.actorInputBean === undefined) {
            throw new runtime.RequiredError('actorInputBean','Required parameter requestParameters.actorInputBean was null or undefined when calling addProjectRoleActorsToRole.');
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
            path: `/rest/api/3/role/{id}/actors`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.actorInputBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request.  Changing a project role\'s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add default actors to project role
     */
    async addProjectRoleActorsToRole(requestParameters: AddProjectRoleActorsToRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.addProjectRoleActorsToRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes actors from a project role for the project.  To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-3-role-id-actors-delete).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete actors from project role
     */
    async deleteActorRaw(requestParameters: DeleteActorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling deleteActor.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteActor.');
        }

        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.group !== undefined) {
            queryParameters['group'] = requestParameters.group;
        }

        if (requestParameters.groupId !== undefined) {
            queryParameters['groupId'] = requestParameters.groupId;
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
            path: `/rest/api/3/project/{projectIdOrKey}/role/{id}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes actors from a project role for the project.  To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-3-role-id-actors-delete).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete actors from project role
     */
    async deleteActor(requestParameters: DeleteActorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteActorRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request.  Changing a project role\'s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete default actors from project role
     */
    async deleteProjectRoleActorsFromRoleRaw(requestParameters: DeleteProjectRoleActorsFromRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteProjectRoleActorsFromRole.');
        }

        const queryParameters: any = {};

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.groupId !== undefined) {
            queryParameters['groupId'] = requestParameters.groupId;
        }

        if (requestParameters.group !== undefined) {
            queryParameters['group'] = requestParameters.group;
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
            path: `/rest/api/3/role/{id}/actors`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request.  Changing a project role\'s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete default actors from project role
     */
    async deleteProjectRoleActorsFromRole(requestParameters: DeleteProjectRoleActorsFromRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.deleteProjectRoleActorsFromRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get default actors for project role
     */
    async getProjectRoleActorsForRoleRaw(requestParameters: GetProjectRoleActorsForRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjectRoleActorsForRole.');
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
            path: `/rest/api/3/role/{id}/actors`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get default actors for project role
     */
    async getProjectRoleActorsForRole(requestParameters: GetProjectRoleActorsForRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.getProjectRoleActorsForRoleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the actors for a project role for a project, replacing all existing actors.  To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-3-project-projectIdOrKey-role-id-post).  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set actors for project role
     */
    async setActorsRaw(requestParameters: SetActorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectRole>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling setActors.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling setActors.');
        }

        if (requestParameters.projectRoleActorsUpdateBean === null || requestParameters.projectRoleActorsUpdateBean === undefined) {
            throw new runtime.RequiredError('projectRoleActorsUpdateBean','Required parameter requestParameters.projectRoleActorsUpdateBean was null or undefined when calling setActors.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/role/{id}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.projectRoleActorsUpdateBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Sets the actors for a project role for a project, replacing all existing actors.  To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-3-project-projectIdOrKey-role-id-post).  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set actors for project role
     */
    async setActors(requestParameters: SetActorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectRole> {
        const response = await this.setActorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
