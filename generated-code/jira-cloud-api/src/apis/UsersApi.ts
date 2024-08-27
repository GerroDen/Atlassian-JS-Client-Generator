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
  ColumnItem,
  GroupName,
  NewUserDetails,
  PageBeanUser,
  UnrestrictedUserEmail,
  User,
  UserColumnRequestBody,
  UserMigrationBean,
} from '../models/index';

export interface BulkGetUsersRequest {
    accountId: Array<string>;
    startAt?: number;
    maxResults?: number;
    username?: Array<string>;
    key?: Array<string>;
}

export interface BulkGetUsersMigrationRequest {
    startAt?: number;
    maxResults?: number;
    username?: Array<string>;
    key?: Array<string>;
}

export interface CreateUserRequest {
    newUserDetails: Omit<NewUserDetails, 'self'>;
}

export interface GetAllUsersRequest {
    startAt?: number;
    maxResults?: number;
}

export interface GetAllUsersDefaultRequest {
    startAt?: number;
    maxResults?: number;
}

export interface GetUserRequest {
    accountId?: string;
    username?: string;
    key?: string;
    expand?: string;
}

export interface GetUserDefaultColumnsRequest {
    accountId?: string;
    username?: string;
}

export interface GetUserEmailRequest {
    accountId: string;
}

export interface GetUserEmailBulkRequest {
    accountId: Array<string>;
}

export interface GetUserGroupsRequest {
    accountId: string;
    username?: string;
    key?: string;
}

export interface RemoveUserRequest {
    accountId: string;
    username?: string;
    key?: string;
}

export interface ResetUserColumnsRequest {
    accountId?: string;
    username?: string;
}

export interface SetUserColumnsRequest {
    userColumnRequestBody: UserColumnRequestBody;
    accountId?: string;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Returns a [paginated](#pagination) list of the users specified by one or more account IDs.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Bulk get users
     */
    async bulkGetUsersRaw(requestParameters: BulkGetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanUser>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling bulkGetUsers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/bulk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of the users specified by one or more account IDs.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Bulk get users
     */
    async bulkGetUsers(requestParameters: BulkGetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanUser> {
        const response = await this.bulkGetUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get account IDs for users
     */
    async bulkGetUsersMigrationRaw(requestParameters: BulkGetUsersMigrationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserMigrationBean>>> {
        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/bulk/migration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get account IDs for users
     */
    async bulkGetUsersMigration(requestParameters: BulkGetUsersMigrationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserMigrationBean>> {
        const response = await this.bulkGetUsersMigrationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.  If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters['newUserDetails'] == null) {
            throw new runtime.RequiredError(
                'newUserDetails',
                'Required parameter "newUserDetails" was null or undefined when calling createUser().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['newUserDetails'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.  If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.createUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\' preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all users
     */
    async getAllUsersRaw(requestParameters: GetAllUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/users/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\' preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all users
     */
    async getAllUsers(requestParameters: GetAllUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getAllUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\' preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all users default
     */
    async getAllUsersDefaultRaw(requestParameters: GetAllUsersDefaultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\' preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get all users default
     */
    async getAllUsersDefault(requestParameters: GetAllUsersDefaultRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getAllUsersDefaultRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user.  Privacy controls are applied to the response based on the user\'s preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get user
     */
    async getUserRaw(requestParameters: GetUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user.  Privacy controls are applied to the response based on the user\'s preferences. This could mean, for example, that the user\'s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get user
     */
    async getUser(requestParameters: GetUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user\'s details are returned.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.  *  Permission to access Jira, to get the calling user\'s column details.
     * Get user default columns
     */
    async getUserDefaultColumnsRaw(requestParameters: GetUserDefaultColumnsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ColumnItem>>> {
        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/columns`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user\'s details are returned.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.  *  Permission to access Jira, to get the calling user\'s column details.
     * Get user default columns
     */
    async getUserDefaultColumns(requestParameters: GetUserDefaultColumnsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ColumnItem>> {
        const response = await this.getUserDefaultColumnsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user\'s email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
     * Get user email
     */
    async getUserEmailRaw(requestParameters: GetUserEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnrestrictedUserEmail>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getUserEmail().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/email`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user\'s email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
     * Get user email
     */
    async getUserEmail(requestParameters: GetUserEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnrestrictedUserEmail> {
        const response = await this.getUserEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a user\'s email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
     * Get user email bulk
     */
    async getUserEmailBulkRaw(requestParameters: GetUserEmailBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnrestrictedUserEmail>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getUserEmailBulk().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/email/bulk`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a user\'s email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
     * Get user email bulk
     */
    async getUserEmailBulk(requestParameters: GetUserEmailBulkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnrestrictedUserEmail> {
        const response = await this.getUserEmailBulkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the groups to which a user belongs.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get user groups
     */
    async getUserGroupsRaw(requestParameters: GetUserGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GroupName>>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling getUserGroups().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:jira-user"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the groups to which a user belongs.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Get user groups
     */
    async getUserGroups(requestParameters: GetUserGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GroupName>> {
        const response = await this.getUserGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a user. If the operation completes successfully then the user is removed from Jira\'s user base. This operation does not delete the user\'s Atlassian account.  **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     * Delete user
     */
    async removeUserRaw(requestParameters: RemoveUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountId'] == null) {
            throw new runtime.RequiredError(
                'accountId',
                'Required parameter "accountId" was null or undefined when calling removeUser().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        if (requestParameters['key'] != null) {
            queryParameters['key'] = requestParameters['key'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a user. If the operation completes successfully then the user is removed from Jira\'s user base. This operation does not delete the user\'s Atlassian account.  **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
     * Delete user
     */
    async removeUser(requestParameters: RemoveUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeUserRaw(requestParameters, initOverrides);
    }

    /**
     * Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user\'s default columns are reset.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\'s columns.
     * Reset user default columns
     */
    async resetUserColumnsRaw(requestParameters: ResetUserColumnsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        if (requestParameters['username'] != null) {
            queryParameters['username'] = requestParameters['username'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/columns`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user\'s default columns are reset.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\'s columns.
     * Reset user default columns
     */
    async resetUserColumns(requestParameters: ResetUserColumnsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resetUserColumnsRaw(requestParameters, initOverrides);
    }

    /**
     * Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user\'s default columns are set. If no column details are sent, then all default columns are removed.  The parameters for this resource are expressed as HTML form data. For example, in curl:  `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5\'`  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\'s columns.
     * Set user default columns
     */
    async setUserColumnsRaw(requestParameters: SetUserColumnsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['userColumnRequestBody'] == null) {
            throw new runtime.RequiredError(
                'userColumnRequestBody',
                'Required parameter "userColumnRequestBody" was null or undefined when calling setUserColumns().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['accountId'] != null) {
            queryParameters['accountId'] = requestParameters['accountId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'multipart/form-data';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/user/columns`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['userColumnRequestBody'],
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user\'s default columns are set. If no column details are sent, then all default columns are removed.  The parameters for this resource are expressed as HTML form data. For example, in curl:  `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5\'`  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\'s columns.
     * Set user default columns
     */
    async setUserColumns(requestParameters: SetUserColumnsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setUserColumnsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
