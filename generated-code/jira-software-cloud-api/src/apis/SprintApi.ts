/* tslint:disable */
/* eslint-disable */
/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateSprintRequest,
  MoveIssuesToBacklogForBoardRequest,
  SwapSprintRequest,
  UpdateSprintRequest,
} from '../models/index';

export interface CreateSprintOperationRequest {
    createSprintRequest: CreateSprintRequest;
}

export interface DeletePropertyRequest {
    sprintId: string;
    propertyKey: string;
}

export interface DeleteSprintRequest {
    sprintId: number;
}

export interface GetIssuesForSprintRequest {
    sprintId: number;
    startAt?: number;
    maxResults?: number;
    jql?: string;
    validateQuery?: boolean;
    fields?: Array<object>;
    expand?: string;
}

export interface GetPropertiesKeysRequest {
    sprintId: string;
}

export interface GetPropertyRequest {
    sprintId: string;
    propertyKey: string;
}

export interface GetSprintRequest {
    sprintId: number;
}

export interface MoveIssuesToSprintAndRankRequest {
    sprintId: number;
    moveIssuesToBacklogForBoardRequest: MoveIssuesToBacklogForBoardRequest;
}

export interface PartiallyUpdateSprintRequest {
    sprintId: number;
    updateSprintRequest: UpdateSprintRequest;
}

export interface SetPropertyRequest {
    sprintId: string;
    propertyKey: string;
    body: any | null;
}

export interface SwapSprintOperationRequest {
    sprintId: number;
    swapSprintRequest: SwapSprintRequest;
}

export interface UpdateSprintOperationRequest {
    sprintId: number;
    updateSprintRequest: UpdateSprintRequest;
}

/**
 * 
 */
export class SprintApi extends runtime.BaseAPI {

    /**
     * Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional.  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the \"endDate\" set through this call is ignored and instead the last sprint\'s duration is used to fill the form.
     * Create sprint
     */
    async createSprintRaw(requestParameters: CreateSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['createSprintRequest'] == null) {
            throw new runtime.RequiredError(
                'createSprintRequest',
                'Required parameter "createSprintRequest" was null or undefined when calling createSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['createSprintRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional.  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the \"endDate\" set through this call is ignored and instead the last sprint\'s duration is used to fill the form.
     * Create sprint
     */
    async createSprint(requestParameters: CreateSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Removes the property from the sprint identified by the id. Ths user removing the property is required to have permissions to modify the sprint.
     * Delete property
     */
    async deletePropertyRaw(requestParameters: DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling deleteProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling deleteProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["delete:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes the property from the sprint identified by the id. Ths user removing the property is required to have permissions to modify the sprint.
     * Delete property
     */
    async deleteProperty(requestParameters: DeletePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog.
     * Delete sprint
     */
    async deleteSprintRaw(requestParameters: DeleteSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling deleteSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["delete:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog.
     * Delete sprint
     */
    async deleteSprint(requestParameters: DeleteSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to view. By default, the returned issues are ordered by rank.
     * Get issues for sprint
     */
    async getIssuesForSprintRaw(requestParameters: GetIssuesForSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling getIssuesForSprint().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startAt'] != null) {
            queryParameters['startAt'] = requestParameters['startAt'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['jql'] != null) {
            queryParameters['jql'] = requestParameters['jql'];
        }

        if (requestParameters['validateQuery'] != null) {
            queryParameters['validateQuery'] = requestParameters['validateQuery'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['expand'] != null) {
            queryParameters['expand'] = requestParameters['expand'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/issue`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to view. By default, the returned issues are ordered by rank.
     * Get issues for sprint
     */
    async getIssuesForSprint(requestParameters: GetIssuesForSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getIssuesForSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is required to have permissions to view the sprint.
     * Get properties keys
     */
    async getPropertiesKeysRaw(requestParameters: GetPropertiesKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling getPropertiesKeys().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/properties`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is required to have permissions to view the sprint.
     * Get properties keys
     */
    async getPropertiesKeys(requestParameters: GetPropertiesKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getPropertiesKeysRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the value of the property with a given key from the sprint identified by the provided id. The user who retrieves the property is required to have permissions to view the sprint.
     * Get property
     */
    async getPropertyRaw(requestParameters: GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling getProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling getProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns the value of the property with a given key from the sprint identified by the provided id. The user who retrieves the property is required to have permissions to view the sprint.
     * Get property
     */
    async getProperty(requestParameters: GetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getPropertyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the sprint was created on, or view at least one of the issues in the sprint.
     * Get sprint
     */
    async getSprintRaw(requestParameters: GetSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling getSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["read:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the sprint was created on, or view at least one of the issues in the sprint.
     * Get sprint
     */
    async getSprint(requestParameters: GetSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum number of issues that can be moved in one operation is 50.
     * Move issues to sprint and rank
     */
    async moveIssuesToSprintAndRankRaw(requestParameters: MoveIssuesToSprintAndRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling moveIssuesToSprintAndRank().'
            );
        }

        if (requestParameters['moveIssuesToBacklogForBoardRequest'] == null) {
            throw new runtime.RequiredError(
                'moveIssuesToBacklogForBoardRequest',
                'Required parameter "moveIssuesToBacklogForBoardRequest" was null or undefined when calling moveIssuesToSprintAndRank().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/issue`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['moveIssuesToBacklogForBoardRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum number of issues that can be moved in one operation is 50.
     * Move issues to sprint and rank
     */
    async moveIssuesToSprintAndRank(requestParameters: MoveIssuesToSprintAndRankRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.moveIssuesToSprintAndRankRaw(requestParameters, initOverrides);
    }

    /**
     * Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not be updated.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \'active\'. This requires the sprint to be in the \'future\' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \'closed\'. This action requires the sprint to be in the \'active\' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * Partially update sprint
     */
    async partiallyUpdateSprintRaw(requestParameters: PartiallyUpdateSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling partiallyUpdateSprint().'
            );
        }

        if (requestParameters['updateSprintRequest'] == null) {
            throw new runtime.RequiredError(
                'updateSprintRequest',
                'Required parameter "updateSprintRequest" was null or undefined when calling partiallyUpdateSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updateSprintRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not be updated.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \'active\'. This requires the sprint to be in the \'future\' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \'closed\'. This action requires the sprint to be in the \'active\' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * Partially update sprint
     */
    async partiallyUpdateSprint(requestParameters: PartiallyUpdateSprintRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.partiallyUpdateSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Sets the value of the specified sprint\'s property.  You can use this resource to store a custom data against the sprint identified by the id. The user who stores the data is required to have permissions to modify the sprint.
     * Set property
     */
    async setPropertyRaw(requestParameters: SetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling setProperty().'
            );
        }

        if (requestParameters['propertyKey'] == null) {
            throw new runtime.RequiredError(
                'propertyKey',
                'Required parameter "propertyKey" was null or undefined when calling setProperty().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling setProperty().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))).replace(`{${"propertyKey"}}`, encodeURIComponent(String(requestParameters['propertyKey']))),
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
     * Sets the value of the specified sprint\'s property.  You can use this resource to store a custom data against the sprint identified by the id. The user who stores the data is required to have permissions to modify the sprint.
     * Set property
     */
    async setProperty(requestParameters: SetPropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.setPropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Swap the position of the sprint with the second sprint.
     * Swap sprint
     */
    async swapSprintRaw(requestParameters: SwapSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling swapSprint().'
            );
        }

        if (requestParameters['swapSprintRequest'] == null) {
            throw new runtime.RequiredError(
                'swapSprintRequest',
                'Required parameter "swapSprintRequest" was null or undefined when calling swapSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}/swap`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['swapSprintRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Swap the position of the sprint with the second sprint.
     * Swap sprint
     */
    async swapSprint(requestParameters: SwapSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.swapSprintRaw(requestParameters, initOverrides);
    }

    /**
     * Performs a full update of a sprint. A full update means that the result will be exactly the same as the request body. Any fields not present in the request JSON will be set to null.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \'active\'. This requires the sprint to be in the \'future\' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \'closed\'. This action requires the sprint to be in the \'active\' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * Update sprint
     */
    async updateSprintRaw(requestParameters: UpdateSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sprintId'] == null) {
            throw new runtime.RequiredError(
                'sprintId',
                'Required parameter "sprintId" was null or undefined when calling updateSprint().'
            );
        }

        if (requestParameters['updateSprintRequest'] == null) {
            throw new runtime.RequiredError(
                'updateSprintRequest',
                'Required parameter "updateSprintRequest" was null or undefined when calling updateSprint().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["write:sprint:jira-software"]);
        }

        const response = await this.request({
            path: `/rest/agile/1.0/sprint/{sprintId}`.replace(`{${"sprintId"}}`, encodeURIComponent(String(requestParameters['sprintId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['updateSprintRequest'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Performs a full update of a sprint. A full update means that the result will be exactly the same as the request body. Any fields not present in the request JSON will be set to null.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \'active\'. This requires the sprint to be in the \'future\' state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \'closed\'. This action requires the sprint to be in the \'active\' state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.
     * Update sprint
     */
    async updateSprint(requestParameters: UpdateSprintOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateSprintRaw(requestParameters, initOverrides);
    }

}
