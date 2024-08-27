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
  BulkPermissionGrants,
  BulkPermissionsRequestBean,
  ErrorCollection,
  Permissions,
  PermissionsKeysBean,
  PermittedProjects,
} from '../models/index';

export interface GetBulkPermissionsRequest {
    bulkPermissionsRequestBean: BulkPermissionsRequestBean;
}

export interface GetMyPermissionsRequest {
    projectKey?: string;
    projectId?: string;
    issueKey?: string;
    issueId?: string;
    permissions?: string;
    projectUuid?: string;
    projectConfigurationUuid?: string;
    commentId?: string;
}

export interface GetPermittedProjectsRequest {
    permissionsKeysBean: PermissionsKeysBean;
}

/**
 * 
 */
export class PermissionsApi extends runtime.BaseAPI {

    /**
     * Returns all permissions, including:   *  global permissions.  *  project permissions.  *  global permissions added by plugins.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get all permissions
     */
    async getAllPermissionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permissions>> {
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
            path: `/rest/api/3/permissions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all permissions, including:   *  global permissions.  *  project permissions.  *  global permissions added by plugins.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get all permissions
     */
    async getAllPermissions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permissions> {
        const response = await this.getAllPermissionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns:   *  for a list of global permissions, the global permissions granted to a user.  *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate.  If no account ID is provided, the operation returns details for the logged in user.  Note that:   *  Invalid project and issue IDs are ignored.  *  A maximum of 1000 projects and 1000 issues can be checked.  *  Null values in `globalPermissions`, `projectPermissions`, `projectPermissions.projects`, and `projectPermissions.issues` are ignored.  *  Empty strings in `projectPermissions.permissions` are ignored.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: `read:jira-work`  *  **Granular**: `read:permission:jira`  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn\'t apply to calls made using AP.request() in a browser.
     * Get bulk permissions
     */
    async getBulkPermissionsRaw(requestParameters: GetBulkPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BulkPermissionGrants>> {
        if (requestParameters['bulkPermissionsRequestBean'] == null) {
            throw new runtime.RequiredError(
                'bulkPermissionsRequestBean',
                'Required parameter "bulkPermissionsRequestBean" was null or undefined when calling getBulkPermissions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/permissions/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['bulkPermissionsRequestBean'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns:   *  for a list of global permissions, the global permissions granted to a user.  *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate.  If no account ID is provided, the operation returns details for the logged in user.  Note that:   *  Invalid project and issue IDs are ignored.  *  A maximum of 1000 projects and 1000 issues can be checked.  *  Null values in `globalPermissions`, `projectPermissions`, `projectPermissions.projects`, and `projectPermissions.issues` are ignored.  *  Empty strings in `projectPermissions.permissions` are ignored.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: `read:jira-work`  *  **Granular**: `read:permission:jira`  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn\'t apply to calls made using AP.request() in a browser.
     * Get bulk permissions
     */
    async getBulkPermissions(requestParameters: GetBulkPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BulkPermissionGrants> {
        const response = await this.getBulkPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of permissions indicating which permissions the user has. Details of the user\'s permissions can be obtained in a global, project, issue or comment context.  The user is reported as having a project permission:   *  in the global context, if the user has the project permission in any project.  *  for a project, where the project permission is determined using issue data, if the user meets the permission\'s criteria for any issue in the project. Otherwise, if the user has the project permission in the project.  *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue.  *  for a comment, where the user has both the permission to browse the comment and the project permission for the comment\'s parent issue. Only the BROWSE\\_PROJECTS permission is supported. If a `commentId` is provided whose `permissions` does not equal BROWSE\\_PROJECTS, a 400 error will be returned.  This means that users may be shown as having an issue permission (such as EDIT\\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\\_ISSUES permission for that issue.  For [Jira Service Management project permissions](https://support.atlassian.com/jira-cloud-administration/docs/customize-jira-service-management-permissions/), this will be evaluated similarly to a user in the customer portal. For example, if the BROWSE\\_PROJECTS permission is granted to Service Project Customer - Portal Access, any users with access to the customer portal will have the BROWSE\\_PROJECTS permission.  Global permissions are unaffected by context.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get my permissions
     */
    async getMyPermissionsRaw(requestParameters: GetMyPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permissions>> {
        const queryParameters: any = {};

        if (requestParameters['projectKey'] != null) {
            queryParameters['projectKey'] = requestParameters['projectKey'];
        }

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['issueKey'] != null) {
            queryParameters['issueKey'] = requestParameters['issueKey'];
        }

        if (requestParameters['issueId'] != null) {
            queryParameters['issueId'] = requestParameters['issueId'];
        }

        if (requestParameters['permissions'] != null) {
            queryParameters['permissions'] = requestParameters['permissions'];
        }

        if (requestParameters['projectUuid'] != null) {
            queryParameters['projectUuid'] = requestParameters['projectUuid'];
        }

        if (requestParameters['projectConfigurationUuid'] != null) {
            queryParameters['projectConfigurationUuid'] = requestParameters['projectConfigurationUuid'];
        }

        if (requestParameters['commentId'] != null) {
            queryParameters['commentId'] = requestParameters['commentId'];
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
            path: `/rest/api/3/mypermissions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of permissions indicating which permissions the user has. Details of the user\'s permissions can be obtained in a global, project, issue or comment context.  The user is reported as having a project permission:   *  in the global context, if the user has the project permission in any project.  *  for a project, where the project permission is determined using issue data, if the user meets the permission\'s criteria for any issue in the project. Otherwise, if the user has the project permission in the project.  *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue.  *  for a comment, where the user has both the permission to browse the comment and the project permission for the comment\'s parent issue. Only the BROWSE\\_PROJECTS permission is supported. If a `commentId` is provided whose `permissions` does not equal BROWSE\\_PROJECTS, a 400 error will be returned.  This means that users may be shown as having an issue permission (such as EDIT\\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\\_ISSUES permission for that issue.  For [Jira Service Management project permissions](https://support.atlassian.com/jira-cloud-administration/docs/customize-jira-service-management-permissions/), this will be evaluated similarly to a user in the customer portal. For example, if the BROWSE\\_PROJECTS permission is granted to Service Project Customer - Portal Access, any users with access to the customer portal will have the BROWSE\\_PROJECTS permission.  Global permissions are unaffected by context.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get my permissions
     */
    async getMyPermissions(requestParameters: GetMyPermissionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permissions> {
        const response = await this.getMyPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all the projects where the user is granted a list of project permissions.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get permitted projects
     */
    async getPermittedProjectsRaw(requestParameters: GetPermittedProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermittedProjects>> {
        if (requestParameters['permissionsKeysBean'] == null) {
            throw new runtime.RequiredError(
                'permissionsKeysBean',
                'Required parameter "permissionsKeysBean" was null or undefined when calling getPermittedProjects().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/permissions/project`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['permissionsKeysBean'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all the projects where the user is granted a list of project permissions.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.
     * Get permitted projects
     */
    async getPermittedProjects(requestParameters: GetPermittedProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermittedProjects> {
        const response = await this.getPermittedProjectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
