/* tslint:disable */
/* eslint-disable */
/**
 * The Confluence Cloud REST API v2
 * This document describes Confluence\'s v2 APIs. This is intended to be an iteration on the existing Confluence Cloud REST API with improvements in both endpoint definitions and performance.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  MultiEntityResultTask,
  PrimaryBodyRepresentation,
  Task,
  UpdateTaskRequest,
} from '../models';

export interface GetTaskByIdRequest {
    id: number;
    bodyFormat?: PrimaryBodyRepresentation;
    serializeIdsAsStrings?: boolean;
}

export interface GetTasksRequest {
    bodyFormat?: PrimaryBodyRepresentation;
    includeBlankTasks?: boolean;
    status?: GetTasksStatusEnum;
    taskId?: Array<number>;
    spaceId?: Array<number>;
    pageId?: Array<number>;
    blogpostId?: Array<number>;
    createdBy?: Array<string>;
    assignedTo?: Array<string>;
    completedBy?: Array<string>;
    createdAtFrom?: number;
    createdAtTo?: number;
    dueAtFrom?: number;
    dueAtTo?: number;
    completedAtFrom?: number;
    completedAtTo?: number;
    cursor?: string;
    limit?: number;
    serializeIdsAsStrings?: boolean;
}

export interface UpdateTaskOperationRequest {
    id: number;
    updateTaskRequest: UpdateTaskRequest;
    serializeIdsAsStrings?: boolean;
}

/**
 * 
 */
export class TaskApi extends runtime.BaseAPI {

    /**
     * Returns a specific task.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the containing page or blog post and its corresponding space.
     * Get task by id
     */
    async getTaskByIdRaw(requestParameters: GetTaskByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Task>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTaskById.');
        }

        const queryParameters: any = {};

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:task:confluence"]);
        }

        const response = await this.request({
            path: `/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a specific task.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the containing page or blog post and its corresponding space.
     * Get task by id
     */
    async getTaskById(requestParameters: GetTaskByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Task> {
        const response = await this.getTaskByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all tasks. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). Only tasks that the user has permission to view will be returned.
     * Get tasks
     */
    async getTasksRaw(requestParameters: GetTasksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultTask>> {
        const queryParameters: any = {};

        if (requestParameters.bodyFormat !== undefined) {
            queryParameters['body-format'] = requestParameters.bodyFormat;
        }

        if (requestParameters.includeBlankTasks !== undefined) {
            queryParameters['include-blank-tasks'] = requestParameters.includeBlankTasks;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.taskId) {
            queryParameters['task-id'] = requestParameters.taskId;
        }

        if (requestParameters.spaceId) {
            queryParameters['space-id'] = requestParameters.spaceId;
        }

        if (requestParameters.pageId) {
            queryParameters['page-id'] = requestParameters.pageId;
        }

        if (requestParameters.blogpostId) {
            queryParameters['blogpost-id'] = requestParameters.blogpostId;
        }

        if (requestParameters.createdBy) {
            queryParameters['created-by'] = requestParameters.createdBy;
        }

        if (requestParameters.assignedTo) {
            queryParameters['assigned-to'] = requestParameters.assignedTo;
        }

        if (requestParameters.completedBy) {
            queryParameters['completed-by'] = requestParameters.completedBy;
        }

        if (requestParameters.createdAtFrom !== undefined) {
            queryParameters['created-at-from'] = requestParameters.createdAtFrom;
        }

        if (requestParameters.createdAtTo !== undefined) {
            queryParameters['created-at-to'] = requestParameters.createdAtTo;
        }

        if (requestParameters.dueAtFrom !== undefined) {
            queryParameters['due-at-from'] = requestParameters.dueAtFrom;
        }

        if (requestParameters.dueAtTo !== undefined) {
            queryParameters['due-at-to'] = requestParameters.dueAtTo;
        }

        if (requestParameters.completedAtFrom !== undefined) {
            queryParameters['completed-at-from'] = requestParameters.completedAtFrom;
        }

        if (requestParameters.completedAtTo !== undefined) {
            queryParameters['completed-at-to'] = requestParameters.completedAtTo;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", ["read:task:confluence"]);
        }

        const response = await this.request({
            path: `/tasks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all tasks. The number of results is limited by the `limit` parameter and additional results (if available) will be available through the `next` URL present in the `Link` response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). Only tasks that the user has permission to view will be returned.
     * Get tasks
     */
    async getTasks(requestParameters: GetTasksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultTask> {
        const response = await this.getTasksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a task by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the containing page or blog post and view its corresponding space.
     * Update task
     */
    async updateTaskRaw(requestParameters: UpdateTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Task>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateTask.');
        }

        if (requestParameters.updateTaskRequest === null || requestParameters.updateTaskRequest === undefined) {
            throw new runtime.RequiredError('updateTaskRequest','Required parameter requestParameters.updateTaskRequest was null or undefined when calling updateTask.');
        }

        const queryParameters: any = {};

        if (requestParameters.serializeIdsAsStrings !== undefined) {
            queryParameters['serialize-ids-as-strings'] = requestParameters.serializeIdsAsStrings;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuthDefinitions", []);
        }

        const response = await this.request({
            path: `/tasks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateTaskRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a task by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the containing page or blog post and view its corresponding space.
     * Update task
     */
    async updateTask(requestParameters: UpdateTaskOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Task> {
        const response = await this.updateTaskRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetTasksStatusEnum = {
    Complete: 'complete',
    Incomplete: 'incomplete'
} as const;
export type GetTasksStatusEnum = typeof GetTasksStatusEnum[keyof typeof GetTasksStatusEnum];
