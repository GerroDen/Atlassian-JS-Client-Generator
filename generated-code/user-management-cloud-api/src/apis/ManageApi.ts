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
  NotFoundAccount,
  Unauthorized,
  UsersAccountIdManageGet200Response,
  UsersAccountIdManageGet403Response,
} from '../models';

export interface UsersAccountIdManageGetRequest {
    accountId: string;
    privileges?: Array<UsersAccountIdManageGetPrivilegesEnum>;
}

/**
 * 
 */
export class ManageApi extends runtime.BaseAPI {

    /**
     * Returns the set of permissions you have for managing the specified Atlassian account
     * Get user management permissions
     */
    async usersAccountIdManageGetRaw(requestParameters: UsersAccountIdManageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersAccountIdManageGet200Response>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling usersAccountIdManageGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.privileges) {
            queryParameters['privileges'] = requestParameters.privileges;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{account_id}/manage`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the set of permissions you have for managing the specified Atlassian account
     * Get user management permissions
     */
    async usersAccountIdManageGet(requestParameters: UsersAccountIdManageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersAccountIdManageGet200Response> {
        const response = await this.usersAccountIdManageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const UsersAccountIdManageGetPrivilegesEnum = {
    Profile: 'profile',
    ProfileWrite: 'profile.write',
    ProfileRead: 'profile.read',
    EmailSet: 'email.set',
    LifecycleEnablement: 'lifecycle.enablement',
    LifecycleDelete: 'lifecycle.delete',
    ApiTokenRead: 'apiToken.read',
    ApiTokenDelete: 'apiToken.delete'
} as const;
export type UsersAccountIdManageGetPrivilegesEnum = typeof UsersAccountIdManageGetPrivilegesEnum[keyof typeof UsersAccountIdManageGetPrivilegesEnum];
