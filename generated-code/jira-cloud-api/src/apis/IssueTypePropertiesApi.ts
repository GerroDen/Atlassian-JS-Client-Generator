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
  EntityProperty,
  PropertyKeys,
} from '../models/index';

export interface DeleteIssueTypePropertyRequest {
    issueTypeId: string;
    propertyKey: string;
}

export interface GetIssueTypePropertyRequest {
    issueTypeId: string;
    propertyKey: string;
}

export interface GetIssueTypePropertyKeysRequest {
    issueTypeId: string;
}

export interface SetIssueTypePropertyRequest {
    issueTypeId: string;
    propertyKey: string;
    body: any | null;
}

/**
 * 
 */
export class IssueTypePropertiesApi extends runtime.BaseAPI {

    /**
     * Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue type property
     */
    async deleteIssueTypePropertyRaw(requestParameters: DeleteIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['issueTypeId'] == null) {
            throw new runtime.RequiredError(
                'issueTypeId',
                'Required parameter "issueTypeId" was null or undefined when calling deleteIssueTypeProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling deleteIssueTypeProperty().'
            );
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
            path: `/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}`.replace(`{${"issueTypeId"}}`, encodeURIComponent(String(requestParameters['issueTypeId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete issue type property
     */
    async deleteIssueTypeProperty(requestParameters: DeleteIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteIssueTypePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.
     * Get issue type property
     */
    async getIssueTypePropertyRaw(requestParameters: GetIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityProperty>> {
        if (requestParameters['issueTypeId'] == null) {
            throw new runtime.RequiredError(
                'issueTypeId',
                'Required parameter "issueTypeId" was null or undefined when calling getIssueTypeProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling getIssueTypeProperty().'
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
            path: `/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}`.replace(`{${"issueTypeId"}}`, encodeURIComponent(String(requestParameters['issueTypeId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.
     * Get issue type property
     */
    async getIssueTypeProperty(requestParameters: GetIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
        const response = await this.getIssueTypePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.
     * Get issue type property keys
     */
    async getIssueTypePropertyKeysRaw(requestParameters: GetIssueTypePropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyKeys>> {
        if (requestParameters['issueTypeId'] == null) {
            throw new runtime.RequiredError(
                'issueTypeId',
                'Required parameter "issueTypeId" was null or undefined when calling getIssueTypePropertyKeys().'
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
            path: `/rest/api/3/issuetype/{issueTypeId}/properties`.replace(`{${"issueTypeId"}}`, encodeURIComponent(String(requestParameters['issueTypeId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.
     * Get issue type property keys
     */
    async getIssueTypePropertyKeys(requestParameters: GetIssueTypePropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
        const response = await this.getIssueTypePropertyKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set issue type property
     */
    async setIssueTypePropertyRaw(requestParameters: SetIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['issueTypeId'] == null) {
            throw new runtime.RequiredError(
                'issueTypeId',
                'Required parameter "issueTypeId" was null or undefined when calling setIssueTypeProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling setIssueTypeProperty().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling setIssueTypeProperty().'
            );
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
            path: `/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}`.replace(`{${"issueTypeId"}}`, encodeURIComponent(String(requestParameters['issueTypeId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Set issue type property
     */
    async setIssueTypeProperty(requestParameters: SetIssueTypePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setIssueTypePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
