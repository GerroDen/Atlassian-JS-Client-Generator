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
  AddNotificationsDetails,
  CreateNotificationSchemeDetails,
  ErrorCollection,
  NotificationScheme,
  NotificationSchemeId,
  PageBeanNotificationScheme,
  PageBeanNotificationSchemeAndProjectMappingJsonBean,
  UpdateNotificationSchemeDetails,
} from '../models';

export interface AddNotificationsRequest {
    id: string;
    requestBody: { [key: string]: any; };
}

export interface CreateNotificationSchemeRequest {
    requestBody: { [key: string]: any; };
}

export interface DeleteNotificationSchemeRequest {
    notificationSchemeId: string;
}

export interface GetNotificationSchemeRequest {
    id: number;
    expand?: string;
}

export interface GetNotificationSchemeToProjectMappingsRequest {
    startAt?: string;
    maxResults?: string;
    notificationSchemeId?: Array<string>;
    projectId?: Array<string>;
}

export interface GetNotificationSchemesRequest {
    startAt?: string;
    maxResults?: string;
    id?: Array<string>;
    projectId?: Array<string>;
    onlyDefault?: boolean;
    expand?: string;
}

export interface RemoveNotificationFromNotificationSchemeRequest {
    notificationSchemeId: string;
    notificationId: string;
}

export interface UpdateNotificationSchemeRequest {
    id: string;
    requestBody: { [key: string]: any; };
}

/**
 * 
 */
export class IssueNotificationSchemesApi extends runtime.BaseAPI {

    /**
     * Adds notifications to a notification scheme. You can add up to 1000 notifications per request.  *Deprecated: The notification type `EmailAddress` is no longer supported in Cloud. Refer to the [changelog](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1031) for more details.*  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add notifications to notification scheme
     */
    async addNotificationsRaw(requestParameters: AddNotificationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addNotifications.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling addNotifications.');
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
            path: `/rest/api/3/notificationscheme/{id}/notification`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Adds notifications to a notification scheme. You can add up to 1000 notifications per request.  *Deprecated: The notification type `EmailAddress` is no longer supported in Cloud. Refer to the [changelog](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1031) for more details.*  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Add notifications to notification scheme
     */
    async addNotifications(requestParameters: AddNotificationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.addNotificationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a notification scheme with notifications. You can create up to 1000 notifications per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create notification scheme
     */
    async createNotificationSchemeRaw(requestParameters: CreateNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NotificationSchemeId>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createNotificationScheme.');
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
            path: `/rest/api/3/notificationscheme`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates a notification scheme with notifications. You can create up to 1000 notifications per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Create notification scheme
     */
    async createNotificationScheme(requestParameters: CreateNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NotificationSchemeId> {
        const response = await this.createNotificationSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete notification scheme
     */
    async deleteNotificationSchemeRaw(requestParameters: DeleteNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.notificationSchemeId === null || requestParameters.notificationSchemeId === undefined) {
            throw new runtime.RequiredError('notificationSchemeId','Required parameter requestParameters.notificationSchemeId was null or undefined when calling deleteNotificationScheme.');
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
            path: `/rest/api/3/notificationscheme/{notificationSchemeId}`.replace(`{${"notificationSchemeId"}}`, encodeURIComponent(String(requestParameters.notificationSchemeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Delete notification scheme
     */
    async deleteNotificationScheme(requestParameters: DeleteNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteNotificationSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with the notification scheme.
     * Get notification scheme
     */
    async getNotificationSchemeRaw(requestParameters: GetNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NotificationScheme>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getNotificationScheme.');
        }

        const queryParameters: any = {};

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
            path: `/rest/api/3/notificationscheme/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with the notification scheme.
     * Get notification scheme
     */
    async getNotificationScheme(requestParameters: GetNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NotificationScheme> {
        const response = await this.getNotificationSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) mapping of project that have notification scheme assigned. You can provide either one or multiple notification scheme IDs or project IDs to filter by. If you don\'t provide any, this will return a list of all mappings. Note that only company-managed (classic) projects are supported. This is because team-managed projects don\'t have a concept of a default notification scheme. The mappings are ordered by projectId.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get projects using notification schemes paginated
     */
    async getNotificationSchemeToProjectMappingsRaw(requestParameters: GetNotificationSchemeToProjectMappingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanNotificationSchemeAndProjectMappingJsonBean>> {
        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.notificationSchemeId) {
            queryParameters['notificationSchemeId'] = requestParameters.notificationSchemeId;
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
            path: `/rest/api/3/notificationscheme/project`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) mapping of project that have notification scheme assigned. You can provide either one or multiple notification scheme IDs or project IDs to filter by. If you don\'t provide any, this will return a list of all mappings. Note that only company-managed (classic) projects are supported. This is because team-managed projects don\'t have a concept of a default notification scheme. The mappings are ordered by projectId.  **[Permissions](#permissions) required:** Permission to access Jira.
     * Get projects using notification schemes paginated
     */
    async getNotificationSchemeToProjectMappings(requestParameters: GetNotificationSchemeToProjectMappingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanNotificationSchemeAndProjectMappingJsonBean> {
        const response = await this.getNotificationSchemeToProjectMappingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by the display name.  *Note that you should allow for events without recipients to appear in responses.*  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with a notification scheme for it to be returned.
     * Get notification schemes paginated
     */
    async getNotificationSchemesRaw(requestParameters: GetNotificationSchemesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanNotificationScheme>> {
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

        if (requestParameters.projectId) {
            queryParameters['projectId'] = requestParameters.projectId;
        }

        if (requestParameters.onlyDefault !== undefined) {
            queryParameters['onlyDefault'] = requestParameters.onlyDefault;
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
            path: `/rest/api/3/notificationscheme`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by the display name.  *Note that you should allow for events without recipients to appear in responses.*  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with a notification scheme for it to be returned.
     * Get notification schemes paginated
     */
    async getNotificationSchemes(requestParameters: GetNotificationSchemesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanNotificationScheme> {
        const response = await this.getNotificationSchemesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes a notification from a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Remove notification from notification scheme
     */
    async removeNotificationFromNotificationSchemeRaw(requestParameters: RemoveNotificationFromNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.notificationSchemeId === null || requestParameters.notificationSchemeId === undefined) {
            throw new runtime.RequiredError('notificationSchemeId','Required parameter requestParameters.notificationSchemeId was null or undefined when calling removeNotificationFromNotificationScheme.');
        }

        if (requestParameters.notificationId === null || requestParameters.notificationId === undefined) {
            throw new runtime.RequiredError('notificationId','Required parameter requestParameters.notificationId was null or undefined when calling removeNotificationFromNotificationScheme.');
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
            path: `/rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId}`.replace(`{${"notificationSchemeId"}}`, encodeURIComponent(String(requestParameters.notificationSchemeId))).replace(`{${"notificationId"}}`, encodeURIComponent(String(requestParameters.notificationId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Removes a notification from a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Remove notification from notification scheme
     */
    async removeNotificationFromNotificationScheme(requestParameters: RemoveNotificationFromNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.removeNotificationFromNotificationSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update notification scheme
     */
    async updateNotificationSchemeRaw(requestParameters: UpdateNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateNotificationScheme.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateNotificationScheme.');
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
            path: `/rest/api/3/notificationscheme/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updates a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
     * Update notification scheme
     */
    async updateNotificationScheme(requestParameters: UpdateNotificationSchemeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateNotificationSchemeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
