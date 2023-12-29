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
  PermissionGrant,
  PermissionGrants,
  PermissionScheme,
  PermissionSchemes,
} from '../models';

export interface CreatePermissionGrantRequest {
    schemeId: number;
    requestBody: { [key: string]: any; };
    expand?: string;
}

export interface CreatePermissionSchemeRequest {
    requestBody: { [key: string]: any; };
    expand?: string;
}

export interface DeletePermissionSchemeRequest {
    schemeId: number;
}

export interface DeletePermissionSchemeEntityRequest {
    schemeId: number;
    permissionId: number;
}

export interface GetAllPermissionSchemesRequest {
    expand?: string;
}

export interface GetPermissionSchemeRequest {
    schemeId: number;
    expand?: string;
}

export interface GetPermissionSchemeGrantRequest {
    schemeId: number;
    permissionId: number;
    expand?: string;
}

export interface GetPermissionSchemeGrantsRequest {
    schemeId: number;
    expand?: string;
}

export interface UpdatePermissionSchemeRequest {
    schemeId: number;
    requestBody: { [key: string]: any; };
    expand?: string;
}

/**
 * 
 */
export class PermissionSchemesApi extends runtime.BaseAPI {

    /**
     * Creates a permission grant in a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create permission grant
     */
    async createPermissionGrantRaw(requestParameters: CreatePermissionGrantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionGrant>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling createPermissionGrant.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createPermissionGrant.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/rest/api/3/permissionscheme/{schemeId}/permission`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a permission grant in a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create permission grant
     */
    async createPermissionGrant(requestParameters: CreatePermissionGrantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionGrant> {
        const response = await this.createPermissionGrantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create permission scheme
     */
    async createPermissionSchemeRaw(requestParameters: CreatePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionScheme>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createPermissionScheme.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/rest/api/3/permissionscheme`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create permission scheme
     */
    async createPermissionScheme(requestParameters: CreatePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionScheme> {
        const response = await this.createPermissionSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete permission scheme
     */
    async deletePermissionSchemeRaw(requestParameters: DeletePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling deletePermissionScheme.');
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
            path: `/rest/api/3/permissionscheme/{schemeId}`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a permission scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete permission scheme
     */
    async deletePermissionScheme(requestParameters: DeletePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePermissionSchemeRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a permission grant from a permission scheme. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete permission scheme grant
     */
    async deletePermissionSchemeEntityRaw(requestParameters: DeletePermissionSchemeEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling deletePermissionSchemeEntity.');
        }

        if (requestParameters.permissionId === null || requestParameters.permissionId === undefined) {
            throw new runtime.RequiredError('permissionId','Required parameter requestParameters.permissionId was null or undefined when calling deletePermissionSchemeEntity.');
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
            path: `/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))).replace(`{${"permissionId"}}`, encodeURIComponent(String(requestParameters.permissionId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a permission grant from a permission scheme. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete permission scheme grant
     */
    async deletePermissionSchemeEntity(requestParameters: DeletePermissionSchemeEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePermissionSchemeEntityRaw(requestParameters, initOverrides);
    }

    /**
     * Returns all permission schemes.  ### About permission schemes and grants ###  A permission scheme is a collection of permission grants. A permission grant consists of a `holder` and a `permission`.  #### Holder object ####  The `holder` object contains information about the user or group being granted the permission. For example, the *Administer projects* permission is granted to a group named *Teams in space administrators*. In this case, the type is `\"type\": \"group\"`, and the parameter is the group name, `\"parameter\": \"Teams in space administrators\"` and the value is group ID, `\"value\": \"ca85fac0-d974-40ca-a615-7af99c48d24f\"`.  The `holder` object is defined by the following properties:   *  `type` Identifies the user or group (see the list of types below).  *  `parameter` As a group\'s name can change, use of `value` is recommended. The value of this property depends on the `type`. For example, if the `type` is a group, then you need to specify the group name.  *  `value` The value of this property depends on the `type`. If the `type` is a group, then you need to specify the group ID. For other `type` it has the same value as `parameter`  The following `types` are available. The expected values for `parameter` and `value` are given in parentheses (some types may not have a `parameter` or `value`):   *  `anyone` Grant for anonymous users.  *  `applicationRole` Grant for users with access to the specified application (application name, application name). See [Update product access settings](https://confluence.atlassian.com/x/3YxjL) for more information.  *  `assignee` Grant for the user currently assigned to an issue.  *  `group` Grant for the specified group (`parameter` : group name, `value` : group ID).  *  `groupCustomField` Grant for a user in the group selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  *  `projectLead` Grant for a project lead.  *  `projectRole` Grant for the specified project role (`parameter` :project role ID, `value` : project role ID).  *  `reporter` Grant for the user who reported the issue.  *  `sd.customer.portal.only` Jira Service Desk only. Grants customers permission to access the customer portal but not Jira. See [Customizing Jira Service Desk permissions](https://confluence.atlassian.com/x/24dKLg) for more information.  *  `user` Grant for the specified user (`parameter` : user ID - historically this was the userkey but that is deprecated and the account ID should be used, `value` : user ID).  *  `userCustomField` Grant for a user selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  #### Built-in permissions ####  The [built-in Jira permissions](https://confluence.atlassian.com/x/yodKLg) are listed below. Apps can also define custom permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information.  **Project permissions**   *  `ADMINISTER_PROJECTS`  *  `BROWSE_PROJECTS`  *  `MANAGE_SPRINTS_PERMISSION` (Jira Software only)  *  `SERVICEDESK_AGENT` (Jira Service Desk only)  *  `VIEW_DEV_TOOLS` (Jira Software only)  *  `VIEW_READONLY_WORKFLOW`  **Issue permissions**   *  `ASSIGNABLE_USER`  *  `ASSIGN_ISSUES`  *  `CLOSE_ISSUES`  *  `CREATE_ISSUES`  *  `DELETE_ISSUES`  *  `EDIT_ISSUES`  *  `LINK_ISSUES`  *  `MODIFY_REPORTER`  *  `MOVE_ISSUES`  *  `RESOLVE_ISSUES`  *  `SCHEDULE_ISSUES`  *  `SET_ISSUE_SECURITY`  *  `TRANSITION_ISSUES`  **Voters and watchers permissions**   *  `MANAGE_WATCHERS`  *  `VIEW_VOTERS_AND_WATCHERS`  **Comments permissions**   *  `ADD_COMMENTS`  *  `DELETE_ALL_COMMENTS`  *  `DELETE_OWN_COMMENTS`  *  `EDIT_ALL_COMMENTS`  *  `EDIT_OWN_COMMENTS`  **Attachments permissions**   *  `CREATE_ATTACHMENTS`  *  `DELETE_ALL_ATTACHMENTS`  *  `DELETE_OWN_ATTACHMENTS`  **Time tracking permissions**   *  `DELETE_ALL_WORKLOGS`  *  `DELETE_OWN_WORKLOGS`  *  `EDIT_ALL_WORKLOGS`  *  `EDIT_OWN_WORKLOGS`  *  `WORK_ON_ISSUES`  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get all permission schemes
     */
    async getAllPermissionSchemesRaw(requestParameters: GetAllPermissionSchemesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionSchemes>> {
        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
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
            path: `/rest/api/3/permissionscheme`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all permission schemes.  ### About permission schemes and grants ###  A permission scheme is a collection of permission grants. A permission grant consists of a `holder` and a `permission`.  #### Holder object ####  The `holder` object contains information about the user or group being granted the permission. For example, the *Administer projects* permission is granted to a group named *Teams in space administrators*. In this case, the type is `\"type\": \"group\"`, and the parameter is the group name, `\"parameter\": \"Teams in space administrators\"` and the value is group ID, `\"value\": \"ca85fac0-d974-40ca-a615-7af99c48d24f\"`.  The `holder` object is defined by the following properties:   *  `type` Identifies the user or group (see the list of types below).  *  `parameter` As a group\'s name can change, use of `value` is recommended. The value of this property depends on the `type`. For example, if the `type` is a group, then you need to specify the group name.  *  `value` The value of this property depends on the `type`. If the `type` is a group, then you need to specify the group ID. For other `type` it has the same value as `parameter`  The following `types` are available. The expected values for `parameter` and `value` are given in parentheses (some types may not have a `parameter` or `value`):   *  `anyone` Grant for anonymous users.  *  `applicationRole` Grant for users with access to the specified application (application name, application name). See [Update product access settings](https://confluence.atlassian.com/x/3YxjL) for more information.  *  `assignee` Grant for the user currently assigned to an issue.  *  `group` Grant for the specified group (`parameter` : group name, `value` : group ID).  *  `groupCustomField` Grant for a user in the group selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  *  `projectLead` Grant for a project lead.  *  `projectRole` Grant for the specified project role (`parameter` :project role ID, `value` : project role ID).  *  `reporter` Grant for the user who reported the issue.  *  `sd.customer.portal.only` Jira Service Desk only. Grants customers permission to access the customer portal but not Jira. See [Customizing Jira Service Desk permissions](https://confluence.atlassian.com/x/24dKLg) for more information.  *  `user` Grant for the specified user (`parameter` : user ID - historically this was the userkey but that is deprecated and the account ID should be used, `value` : user ID).  *  `userCustomField` Grant for a user selected in the specified custom field (`parameter` : custom field ID, `value` : custom field ID).  #### Built-in permissions ####  The [built-in Jira permissions](https://confluence.atlassian.com/x/yodKLg) are listed below. Apps can also define custom permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information.  **Project permissions**   *  `ADMINISTER_PROJECTS`  *  `BROWSE_PROJECTS`  *  `MANAGE_SPRINTS_PERMISSION` (Jira Software only)  *  `SERVICEDESK_AGENT` (Jira Service Desk only)  *  `VIEW_DEV_TOOLS` (Jira Software only)  *  `VIEW_READONLY_WORKFLOW`  **Issue permissions**   *  `ASSIGNABLE_USER`  *  `ASSIGN_ISSUES`  *  `CLOSE_ISSUES`  *  `CREATE_ISSUES`  *  `DELETE_ISSUES`  *  `EDIT_ISSUES`  *  `LINK_ISSUES`  *  `MODIFY_REPORTER`  *  `MOVE_ISSUES`  *  `RESOLVE_ISSUES`  *  `SCHEDULE_ISSUES`  *  `SET_ISSUE_SECURITY`  *  `TRANSITION_ISSUES`  **Voters and watchers permissions**   *  `MANAGE_WATCHERS`  *  `VIEW_VOTERS_AND_WATCHERS`  **Comments permissions**   *  `ADD_COMMENTS`  *  `DELETE_ALL_COMMENTS`  *  `DELETE_OWN_COMMENTS`  *  `EDIT_ALL_COMMENTS`  *  `EDIT_OWN_COMMENTS`  **Attachments permissions**   *  `CREATE_ATTACHMENTS`  *  `DELETE_ALL_ATTACHMENTS`  *  `DELETE_OWN_ATTACHMENTS`  **Time tracking permissions**   *  `DELETE_ALL_WORKLOGS`  *  `DELETE_OWN_WORKLOGS`  *  `EDIT_ALL_WORKLOGS`  *  `EDIT_OWN_WORKLOGS`  *  `WORK_ON_ISSUES`  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get all permission schemes
     */
    async getAllPermissionSchemes(requestParameters: GetAllPermissionSchemesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionSchemes> {
        const response = await this.getAllPermissionSchemesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme
     */
    async getPermissionSchemeRaw(requestParameters: GetPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionScheme>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling getPermissionScheme.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
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
            path: `/rest/api/3/permissionscheme/{schemeId}`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme
     */
    async getPermissionScheme(requestParameters: GetPermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionScheme> {
        const response = await this.getPermissionSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a permission grant.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme grant
     */
    async getPermissionSchemeGrantRaw(requestParameters: GetPermissionSchemeGrantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionGrant>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling getPermissionSchemeGrant.');
        }

        if (requestParameters.permissionId === null || requestParameters.permissionId === undefined) {
            throw new runtime.RequiredError('permissionId','Required parameter requestParameters.permissionId was null or undefined when calling getPermissionSchemeGrant.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
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
            path: `/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))).replace(`{${"permissionId"}}`, encodeURIComponent(String(requestParameters.permissionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a permission grant.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme grant
     */
    async getPermissionSchemeGrant(requestParameters: GetPermissionSchemeGrantRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionGrant> {
        const response = await this.getPermissionSchemeGrantRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all permission grants for a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme grants
     */
    async getPermissionSchemeGrantsRaw(requestParameters: GetPermissionSchemeGrantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionGrants>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling getPermissionSchemeGrants.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
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
            path: `/rest/api/3/permissionscheme/{schemeId}/permission`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all permission grants for a permission scheme.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get permission scheme grants
     */
    async getPermissionSchemeGrants(requestParameters: GetPermissionSchemeGrantsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionGrants> {
        const response = await this.getPermissionSchemeGrantsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a permission scheme. Below are some important things to note when using this resource:   *  If a permissions list is present in the request, then it is set in the permission scheme, overwriting *all existing* grants.  *  If you want to update only the name and description, then do not send a permissions list in the request.  *  Sending an empty list will remove all permission grants from the permission scheme.  If you want to add or delete a permission grant instead of updating the whole list, see [Create permission grant](#api-rest-api-3-permissionscheme-schemeId-permission-post) or [Delete permission scheme entity](#api-rest-api-3-permissionscheme-schemeId-permission-permissionId-delete).  See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update permission scheme
     */
    async updatePermissionSchemeRaw(requestParameters: UpdatePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionScheme>> {
        if (requestParameters.schemeId === null || requestParameters.schemeId === undefined) {
            throw new runtime.RequiredError('schemeId','Required parameter requestParameters.schemeId was null or undefined when calling updatePermissionScheme.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updatePermissionScheme.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/rest/api/3/permissionscheme/{schemeId}`.replace(`{${"schemeId"}}`, encodeURIComponent(String(requestParameters.schemeId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a permission scheme. Below are some important things to note when using this resource:   *  If a permissions list is present in the request, then it is set in the permission scheme, overwriting *all existing* grants.  *  If you want to update only the name and description, then do not send a permissions list in the request.  *  Sending an empty list will remove all permission grants from the permission scheme.  If you want to add or delete a permission grant instead of updating the whole list, see [Create permission grant](#api-rest-api-3-permissionscheme-schemeId-permission-post) or [Delete permission scheme entity](#api-rest-api-3-permissionscheme-schemeId-permission-permissionId-delete).  See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update permission scheme
     */
    async updatePermissionScheme(requestParameters: UpdatePermissionSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionScheme> {
        const response = await this.updatePermissionSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
