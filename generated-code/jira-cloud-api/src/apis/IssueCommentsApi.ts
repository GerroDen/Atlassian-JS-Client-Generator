/* tslint:disable */
/* eslint-disable */
/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Comment,
  IssueCommentListRequestBean,
  PageBeanComment,
  PageOfComments,
} from '../models';

export interface AddCommentRequest {
    issueIdOrKey: string;
    requestBody: { [key: string]: any; };
    expand?: string;
}

export interface DeleteCommentRequest {
    issueIdOrKey: string;
    id: string;
}

export interface GetCommentRequest {
    issueIdOrKey: string;
    id: string;
    expand?: string;
}

export interface GetCommentsRequest {
    issueIdOrKey: string;
    startAt?: number;
    maxResults?: number;
    orderBy?: GetCommentsOrderByEnum;
    expand?: string;
}

export interface GetCommentsByIdsRequest {
    issueCommentListRequestBean: IssueCommentListRequestBean;
    expand?: string;
}

export interface UpdateCommentRequest {
    issueIdOrKey: string;
    id: string;
    requestBody: { [key: string]: any; };
    notifyUsers?: boolean;
    overrideEditableFlag?: boolean;
    expand?: string;
}

/**
 * 
 */
export class IssueCommentsApi extends runtime.BaseAPI {

    /**
     * Adds a comment to an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Add comment
     */
    async addCommentRaw(requestParameters: AddCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling addComment.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling addComment.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/comment`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a comment to an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
     * Add comment
     */
    async addComment(requestParameters: AddCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Comment> {
        const response = await this.addCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a comment.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Delete comment
     */
    async deleteCommentRaw(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling deleteComment.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/comment/{id}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a comment.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Delete comment
     */
    async deleteComment(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCommentRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Get comment
     */
    async getCommentRaw(requestParameters: GetCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling getComment.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getComment.');
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
            path: `/rest/api/3/issue/{issueIdOrKey}/comment/{id}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Get comment
     */
    async getComment(requestParameters: GetCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Comment> {
        const response = await this.getCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all comments for an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.
     * Get comments
     */
    async getCommentsRaw(requestParameters: GetCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageOfComments>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling getComments.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

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
            path: `/rest/api/3/issue/{issueIdOrKey}/comment`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns all comments for an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.
     * Get comments
     */
    async getComments(requestParameters: GetCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageOfComments> {
        const response = await this.getCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of comments specified by a list of comment IDs.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are returned where the user:   *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comments by IDs
     */
    async getCommentsByIdsRaw(requestParameters: GetCommentsByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanComment>> {
        if (requestParameters.issueCommentListRequestBean === null || requestParameters.issueCommentListRequestBean === undefined) {
            throw new runtime.RequiredError('issueCommentListRequestBean','Required parameter requestParameters.issueCommentListRequestBean was null or undefined when calling getCommentsByIds.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

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
            path: `/rest/api/3/comment/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.issueCommentListRequestBean,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of comments specified by a list of comment IDs.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are returned where the user:   *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
     * Get comments by IDs
     */
    async getCommentsByIds(requestParameters: GetCommentsByIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanComment> {
        const response = await this.getCommentsByIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Update comment
     */
    async updateCommentRaw(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.issueIdOrKey === null || requestParameters.issueIdOrKey === undefined) {
            throw new runtime.RequiredError('issueIdOrKey','Required parameter requestParameters.issueIdOrKey was null or undefined when calling updateComment.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateComment.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateComment.');
        }

        const queryParameters: any = {};

        if (requestParameters.notifyUsers !== undefined) {
            queryParameters['notifyUsers'] = requestParameters.notifyUsers;
        }

        if (requestParameters.overrideEditableFlag !== undefined) {
            queryParameters['overrideEditableFlag'] = requestParameters.overrideEditableFlag;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:jira-work"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/issue/{issueIdOrKey}/comment/{id}`.replace(`{${"issueIdOrKey"}}`, encodeURIComponent(String(requestParameters.issueIdOrKey))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
     * Update comment
     */
    async updateComment(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Comment> {
        const response = await this.updateCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetCommentsOrderByEnum = {
    Created: 'created',
    CreatedDesc: '-created',
    CreatedAsc: '+created'
} as const;
export type GetCommentsOrderByEnum = typeof GetCommentsOrderByEnum[keyof typeof GetCommentsOrderByEnum];
