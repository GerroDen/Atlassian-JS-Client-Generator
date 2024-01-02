/* tslint:disable */
/* eslint-disable */
/**
 * IDv2: User management
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConflictLifecycleErrors,
  NotFoundAccount,
  ResultMessage,
  Unauthorized,
  UsersAccountIdManageApiTokensGet403Response,
  UsersAccountIdManageLifecycleDisablePostRequest,
} from '../models';

export interface UsersAccountIdManageLifecycleCancelDeletePostRequest {
    accountId: string;
}

export interface UsersAccountIdManageLifecycleDeletePostRequest {
    accountId: string;
}

export interface UsersAccountIdManageLifecycleDisablePostOperationRequest {
    accountId: string;
    usersAccountIdManageLifecycleDisablePostRequest: UsersAccountIdManageLifecycleDisablePostRequest;
}

export interface UsersAccountIdManageLifecycleEnablePostRequest {
    accountId: string;
}

/**
 * 
 */
export class LifecycleApi extends runtime.BaseAPI {

    /**
     * This API will:  - Cancel the scheduled deletion of the specified managed account.  - Restore and activate the user’s account.    Specifications:  - You can cancel the deletion within the 14-day grace period of deleting a managed account. After that the account is permanently deleted.    The permission to make use of this resource is exposed by the `lifecycle.delete` privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 
     * Cancel delete account
     */
    async usersAccountIdManageLifecycleCancelDeletePostRaw(requestParameters: UsersAccountIdManageLifecycleCancelDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultMessage>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageLifecycleCancelDeletePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/lifecycle/cancel-delete`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * This API will:  - Cancel the scheduled deletion of the specified managed account.  - Restore and activate the user’s account.    Specifications:  - You can cancel the deletion within the 14-day grace period of deleting a managed account. After that the account is permanently deleted.    The permission to make use of this resource is exposed by the `lifecycle.delete` privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 
     * Cancel delete account
     */
    async usersAccountIdManageLifecycleCancelDeletePost(requestParameters: UsersAccountIdManageLifecycleCancelDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultMessage> {
        const response = await this.usersAccountIdManageLifecycleCancelDeletePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API will: - Delete a managed account from Atlassian Administration. - Withdraw complete access to all products and services listed in Atlassian Administration. - Remove reference to the account from all lists under Directory in Atlassian Administration.  Specifications: - Deleting an account is permanent. If you think you’ll need the account again, we recommend you [deactivate](https://support.atlassian.com/user-management/docs/deactivate-a-managed-account/) it instead. - Before you permanently delete the account, you’ll have a 14-day grace period, during which the account will appear as temporarily deactivated.  Learn more about [deleting a managed account](https://support.atlassian.com/user-management/docs/delete-a-managed-account/).  Learn the fastest way to get the paramaters and delete account with a detailed [tutorial](https://developer.atlassian.com/cloud/admin/user-management/delete-managed-account/#delete-account).   The permission to make use of this resource is exposed by the `lifecycle.delete` privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 
     * Delete account
     */
    async usersAccountIdManageLifecycleDeletePostRaw(requestParameters: UsersAccountIdManageLifecycleDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResultMessage>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageLifecycleDeletePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/lifecycle/delete`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * This API will: - Delete a managed account from Atlassian Administration. - Withdraw complete access to all products and services listed in Atlassian Administration. - Remove reference to the account from all lists under Directory in Atlassian Administration.  Specifications: - Deleting an account is permanent. If you think you’ll need the account again, we recommend you [deactivate](https://support.atlassian.com/user-management/docs/deactivate-a-managed-account/) it instead. - Before you permanently delete the account, you’ll have a 14-day grace period, during which the account will appear as temporarily deactivated.  Learn more about [deleting a managed account](https://support.atlassian.com/user-management/docs/delete-a-managed-account/).  Learn the fastest way to get the paramaters and delete account with a detailed [tutorial](https://developer.atlassian.com/cloud/admin/user-management/delete-managed-account/#delete-account).   The permission to make use of this resource is exposed by the `lifecycle.delete` privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 
     * Delete account
     */
    async usersAccountIdManageLifecycleDeletePost(requestParameters: UsersAccountIdManageLifecycleDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResultMessage> {
        const response = await this.usersAccountIdManageLifecycleDeletePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  Deactivate the specified user account. The permission to make use of this resource is exposed by the `lifecycle.enablement` privilege. You can optionally set a message associated with the block. If none is supplied, a default message will be used. 
     * Deactivate a user
     */
    async usersAccountIdManageLifecycleDisablePostRaw(requestParameters: UsersAccountIdManageLifecycleDisablePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageLifecycleDisablePost.');
        }

        if (requestParameters.usersAccountIdManageLifecycleDisablePostRequest === null || requestParameters.usersAccountIdManageLifecycleDisablePostRequest === undefined) {
            throw new runtime.RequiredError('usersAccountIdManageLifecycleDisablePostRequest','Required parameter requestParameters.usersAccountIdManageLifecycleDisablePostRequest was null or undefined when calling usersAccountIdManageLifecycleDisablePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/lifecycle/disable`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.usersAccountIdManageLifecycleDisablePostRequest,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     *  Deactivate the specified user account. The permission to make use of this resource is exposed by the `lifecycle.enablement` privilege. You can optionally set a message associated with the block. If none is supplied, a default message will be used. 
     * Deactivate a user
     */
    async usersAccountIdManageLifecycleDisablePost(requestParameters: UsersAccountIdManageLifecycleDisablePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersAccountIdManageLifecycleDisablePostRaw(requestParameters, initOverrides);
    }

    /**
     * Activates the specified user account. The permission to make use of this resource is exposed by the `lifecycle.enablement` privilege.  User accounts that were deactivated due to US export controls cannot be reactivated using this API. If you believe the account was incorrectly blocked, please contact [Atlassian Support](https://support.atlassian.com/contact).  User accounts that have been deleted need the deletion to be canceled before reactivating. 
     * Activate a user
     */
    async usersAccountIdManageLifecycleEnablePostRaw(requestParameters: UsersAccountIdManageLifecycleEnablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageLifecycleEnablePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage/lifecycle/enable`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Activates the specified user account. The permission to make use of this resource is exposed by the `lifecycle.enablement` privilege.  User accounts that were deactivated due to US export controls cannot be reactivated using this API. If you believe the account was incorrectly blocked, please contact [Atlassian Support](https://support.atlassian.com/contact).  User accounts that have been deleted need the deletion to be canceled before reactivating. 
     * Activate a user
     */
    async usersAccountIdManageLifecycleEnablePost(requestParameters: UsersAccountIdManageLifecycleEnablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersAccountIdManageLifecycleEnablePostRaw(requestParameters, initOverrides);
    }

}