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
  EntityProperty,
  PropertyKeys,
} from '../models';

export interface DeleteProjectPropertyRequest {
    projectIdOrKey: string;
    propertyKey: string;
}

export interface GetProjectPropertyRequest {
    projectIdOrKey: string;
    propertyKey: string;
}

export interface GetProjectPropertyKeysRequest {
    projectIdOrKey: string;
}

export interface SetProjectPropertyRequest {
    projectIdOrKey: string;
    propertyKey: string;
    body: any | null;
}

/**
 * 
 */
export class ProjectPropertiesApi extends runtime.BaseAPI {

    /**
     * Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     * Delete project property
     */
    async deleteProjectPropertyRaw(requestParameters: DeleteProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling deleteProjectProperty.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling deleteProjectProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["manage:jira-project"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     * Delete project property
     */
    async deleteProjectProperty(requestParameters: DeleteProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProjectPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     * Get project property
     */
    async getProjectPropertyRaw(requestParameters: GetProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityProperty>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getProjectProperty.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling getProjectProperty.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
     * Get project property
     */
    async getProjectProperty(requestParameters: GetProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityProperty> {
        const response = await this.getProjectPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project property keys
     */
    async getProjectPropertyKeysRaw(requestParameters: GetProjectPropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PropertyKeys>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling getProjectPropertyKeys.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/properties`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
     * Get project property keys
     */
    async getProjectPropertyKeys(requestParameters: GetProjectPropertyKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PropertyKeys> {
        const response = await this.getProjectPropertyKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
     * Set project property
     */
    async setProjectPropertyRaw(requestParameters: SetProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectIdOrKey === null || requestParameters.projectIdOrKey === undefined) {
            throw new runtime.RequiredError('projectIdOrKey','Required parameter requestParameters.projectIdOrKey was null or undefined when calling setProjectProperty.');
        }

        if (requestParameters.propertyKey === null || requestParameters.propertyKey === undefined) {
            throw new runtime.RequiredError('propertyKey','Required parameter requestParameters.propertyKey was null or undefined when calling setProjectProperty.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling setProjectProperty.');
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
            path: `/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}`.replace(`{${"projectIdOrKey"}}`, encodeURIComponent(String(requestParameters.projectIdOrKey))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters.propertyKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
     * Set project property
     */
    async setProjectProperty(requestParameters: SetProjectPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setProjectPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
