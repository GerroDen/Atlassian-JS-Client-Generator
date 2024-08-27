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
  CheckAccessByEmail200Response,
  CheckAccessByEmailRequest,
  CreateBulkUserLookupRequest,
  MultiEntityResultUser,
} from '../models/index';

export interface CheckAccessByEmailOperationRequest {
    checkAccessByEmailRequest: CheckAccessByEmailRequest;
}

export interface CreateBulkUserLookupOperationRequest {
    createBulkUserLookupRequest: CreateBulkUserLookupRequest;
}

export interface InviteByEmailRequest {
    checkAccessByEmailRequest: CheckAccessByEmailRequest;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Returns the list of emails from the input list that do not have access to site.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Check site access for a list of emails
     */
    async checkAccessByEmailRaw(requestParameters: CheckAccessByEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckAccessByEmail200Response>> {
        if (requestParameters['checkAccessByEmailRequest'] == null) {
            throw new runtime.RequiredError(
                'checkAccessByEmailRequest',
                'Required parameter "checkAccessByEmailRequest" was null or undefined when calling checkAccessByEmail().'
            );
        }

        const queryParameters: any = {};

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
            path: `/user/access/check-access-by-email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['checkAccessByEmailRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns the list of emails from the input list that do not have access to site.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Check site access for a list of emails
     */
    async checkAccessByEmail(requestParameters: CheckAccessByEmailOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckAccessByEmail200Response> {
        const response = await this.checkAccessByEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns user details for the ids provided in the request body.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). The user must be able to view user profiles in the Confluence site.
     * Create bulk user lookup using ids
     */
    async createBulkUserLookupRaw(requestParameters: CreateBulkUserLookupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MultiEntityResultUser>> {
        if (requestParameters['createBulkUserLookupRequest'] == null) {
            throw new runtime.RequiredError(
                'createBulkUserLookupRequest',
                'Required parameter "createBulkUserLookupRequest" was null or undefined when calling createBulkUserLookup().'
            );
        }

        const queryParameters: any = {};

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
            path: `/users-bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['createBulkUserLookupRequest'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns user details for the ids provided in the request body.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission). The user must be able to view user profiles in the Confluence site.
     * Create bulk user lookup using ids
     */
    async createBulkUserLookup(requestParameters: CreateBulkUserLookupOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MultiEntityResultUser> {
        const response = await this.createBulkUserLookupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Invite a list of emails to the site.  Ignores all invalid emails and no action is taken for the emails that already have access to the site.  <b>NOTE:</b> This API is asynchronous and may take some time to complete.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Invite a list of emails to the site
     */
    async inviteByEmailRaw(requestParameters: InviteByEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['checkAccessByEmailRequest'] == null) {
            throw new runtime.RequiredError(
                'checkAccessByEmailRequest',
                'Required parameter "checkAccessByEmailRequest" was null or undefined when calling inviteByEmail().'
            );
        }

        const queryParameters: any = {};

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
            path: `/user/access/invite-by-email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['checkAccessByEmailRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Invite a list of emails to the site.  Ignores all invalid emails and no action is taken for the emails that already have access to the site.  <b>NOTE:</b> This API is asynchronous and may take some time to complete.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\'Can use\' global permission).
     * Invite a list of emails to the site
     */
    async inviteByEmail(requestParameters: InviteByEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inviteByEmailRaw(requestParameters, initOverrides);
    }

}
