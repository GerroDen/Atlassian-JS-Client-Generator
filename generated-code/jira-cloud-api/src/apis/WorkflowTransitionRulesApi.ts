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
  ErrorCollection,
  PageBeanWorkflowTransitionRules,
  WorkflowTransitionRulesUpdate,
  WorkflowTransitionRulesUpdateErrors,
  WorkflowsWithTransitionRulesDetails,
} from '../models';

export interface DeleteWorkflowTransitionRuleConfigurationsRequest {
    workflowsWithTransitionRulesDetails: WorkflowsWithTransitionRulesDetails;
}

export interface GetWorkflowTransitionRuleConfigurationsRequest {
    types: GetWorkflowTransitionRuleConfigurationsTypesEnum[];
    startAt?: number;
    maxResults?: number;
    keys?: string[];
    workflowNames?: string[];
    withTags?: string[];
    draft?: boolean;
    expand?: string;
}

export interface UpdateWorkflowTransitionRuleConfigurationsRequest {
    workflowTransitionRulesUpdate: WorkflowTransitionRulesUpdate;
}

/**
 * 
 */
export class WorkflowTransitionRulesApi extends runtime.BaseAPI {

    /**
     * Deletes workflow transition rules from one or more workflows. These rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be deleted.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Delete workflow transition rule configurations
     */
    async deleteWorkflowTransitionRuleConfigurationsRaw(requestParameters: DeleteWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTransitionRulesUpdateErrors>> {
        if (requestParameters.workflowsWithTransitionRulesDetails === null || requestParameters.workflowsWithTransitionRulesDetails === undefined) {
            throw new runtime.RequiredError('workflowsWithTransitionRulesDetails','Required parameter requestParameters.workflowsWithTransitionRulesDetails was null or undefined when calling deleteWorkflowTransitionRuleConfigurations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/workflow/rule/config/delete`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.workflowsWithTransitionRulesDetails,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes workflow transition rules from one or more workflows. These rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be deleted.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Delete workflow transition rule configurations
     */
    async deleteWorkflowTransitionRuleConfigurations(requestParameters: DeleteWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTransitionRulesUpdateErrors> {
        const response = await this.deleteWorkflowTransitionRuleConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:   *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).  *  matching one or more transition rule keys.  Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow is returned all transition rules that match the filters are returned for that workflow.  Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Get workflow transition rule configurations
     */
    async getWorkflowTransitionRuleConfigurationsRaw(requestParameters: GetWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageBeanWorkflowTransitionRules>> {
        if (requestParameters.types === null || requestParameters.types === undefined) {
            throw new runtime.RequiredError('types','Required parameter requestParameters.types was null or undefined when calling getWorkflowTransitionRuleConfigurations.');
        }

        const queryParameters: any = {};

        if (requestParameters.startAt !== undefined) {
            queryParameters['startAt'] = requestParameters.startAt;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        if (requestParameters.types) {
            queryParameters['types'] = requestParameters.types;
        }

        if (requestParameters.keys) {
            queryParameters['keys'] = requestParameters.keys;
        }

        if (requestParameters.workflowNames) {
            queryParameters['workflowNames'] = requestParameters.workflowNames;
        }

        if (requestParameters.withTags) {
            queryParameters['withTags'] = requestParameters.withTags;
        }

        if (requestParameters.draft !== undefined) {
            queryParameters['draft'] = requestParameters.draft;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/workflow/rule/config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:   *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).  *  matching one or more transition rule keys.  Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow is returned all transition rules that match the filters are returned for that workflow.  Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Get workflow transition rule configurations
     */
    async getWorkflowTransitionRuleConfigurations(requestParameters: GetWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageBeanWorkflowTransitionRules> {
        const response = await this.getWorkflowTransitionRuleConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates configuration of workflow transition rules. The following rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be updated.  To assist with app migration, this operation can be used to:   *  Disable a rule.  *  Add a `tag`. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).  Rules are enabled if the `disabled` parameter is not provided.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Update workflow transition rule configurations
     */
    async updateWorkflowTransitionRuleConfigurationsRaw(requestParameters: UpdateWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkflowTransitionRulesUpdateErrors>> {
        if (requestParameters.workflowTransitionRulesUpdate === null || requestParameters.workflowTransitionRulesUpdate === undefined) {
            throw new runtime.RequiredError('workflowTransitionRulesUpdate','Required parameter requestParameters.workflowTransitionRulesUpdate was null or undefined when calling updateWorkflowTransitionRuleConfigurations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/rest/api/3/workflow/rule/config`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.workflowTransitionRulesUpdate,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates configuration of workflow transition rules. The following rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be updated.  To assist with app migration, this operation can be used to:   *  Disable a rule.  *  Add a `tag`. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).  Rules are enabled if the `disabled` parameter is not provided.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.
     * Update workflow transition rule configurations
     */
    async updateWorkflowTransitionRuleConfigurations(requestParameters: UpdateWorkflowTransitionRuleConfigurationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkflowTransitionRulesUpdateErrors> {
        const response = await this.updateWorkflowTransitionRuleConfigurationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetWorkflowTransitionRuleConfigurationsTypesEnum = {
    Postfunction: 'postfunction',
    Condition: 'condition',
    Validator: 'validator'
} as const;
export type GetWorkflowTransitionRuleConfigurationsTypesEnum = typeof GetWorkflowTransitionRuleConfigurationsTypesEnum[keyof typeof GetWorkflowTransitionRuleConfigurationsTypesEnum];