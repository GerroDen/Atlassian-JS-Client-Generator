/* tslint:disable */
/* eslint-disable */
/**
 * Bamboo
 * This is the reference document for the Atlassian Bamboo REST API. The REST API is for developers who want to:    - integrate Bamboo with other applications;   - create scripts that interact with Bamboo; or   - develop plugins that enhance the Bamboo UI, using REST to interact with the backend.    You can read more about developing Bamboo plugins in the [Bamboo Developer Documentation](https://developer.atlassian.com/bamboo/server/docs/latest/).
 *
 * The version of the OpenAPI document: 9.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RestErrorCollection,
  RestQueuedDeployment,
  RestQueuedDeployments,
  VersionPreview,
} from '../models';

export interface GetBuildQueueRequest {
    expand?: string;
}

export interface GetPossibleResultsRequest {
    planKey: string;
    deploymentProjectId?: string;
}

export interface GetVersionNameRequest {
    deploymentProjectId: number;
    resultKey?: string;
}

export interface GetVersionPreviewRequest {
    previousVersionId?: string;
    deploymentProjectId?: string;
    planKey?: string;
    resultKey?: string;
    buildNumber?: string;
}

export interface GetVersionPreview1Request {
    previousVersionId?: string;
    versionId?: string;
    deploymentProjectId?: string;
    versionName?: string;
}

export interface RemoveDeploymentFromQueueRequest {
    deploymentResultId: number;
}

export interface StartDeploymentRequest {
    versionId: string;
    environmentId: string;
    verboseLogging?: string;
}

/**
 * 
 */
export class DeploymentApi extends runtime.BaseAPI {

    /**
     * Provide list of deployment results scheduled for execution and waiting in queue.
     */
    async getBuildQueueRaw(requestParameters: GetBuildQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestQueuedDeployments>> {
        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/queue/deployment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Provide list of deployment results scheduled for execution and waiting in queue.
     */
    async getBuildQueue(requestParameters: GetBuildQueueRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestQueuedDeployments> {
        const response = await this.getBuildQueueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get possible deployment results.
     */
    async getPossibleResultsRaw(requestParameters: GetPossibleResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.planKey === null || requestParameters.planKey === undefined) {
            throw new runtime.RequiredError('planKey','Required parameter requestParameters.planKey was null or undefined when calling getPossibleResults.');
        }

        const queryParameters: any = {};

        if (requestParameters.deploymentProjectId !== undefined) {
            queryParameters['deploymentProjectId'] = requestParameters.deploymentProjectId;
        }

        if (requestParameters.planKey !== undefined) {
            queryParameters['planKey'] = requestParameters.planKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/deploy/preview/possibleResults`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get possible deployment results.
     */
    async getPossibleResults(requestParameters: GetPossibleResultsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getPossibleResultsRaw(requestParameters, initOverrides);
    }

    /**
     * Get version name.
     */
    async getVersionNameRaw(requestParameters: GetVersionNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.deploymentProjectId === null || requestParameters.deploymentProjectId === undefined) {
            throw new runtime.RequiredError('deploymentProjectId','Required parameter requestParameters.deploymentProjectId was null or undefined when calling getVersionName.');
        }

        const queryParameters: any = {};

        if (requestParameters.resultKey !== undefined) {
            queryParameters['resultKey'] = requestParameters.resultKey;
        }

        if (requestParameters.deploymentProjectId !== undefined) {
            queryParameters['deploymentProjectId'] = requestParameters.deploymentProjectId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/deploy/preview/versionName`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Get version name.
     */
    async getVersionName(requestParameters: GetVersionNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getVersionNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a preview of the deployment version.
     */
    async getVersionPreviewRaw(requestParameters: GetVersionPreviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionPreview>> {
        const queryParameters: any = {};

        if (requestParameters.previousVersionId !== undefined) {
            queryParameters['previousVersionId'] = requestParameters.previousVersionId;
        }

        if (requestParameters.deploymentProjectId !== undefined) {
            queryParameters['deploymentProjectId'] = requestParameters.deploymentProjectId;
        }

        if (requestParameters.planKey !== undefined) {
            queryParameters['planKey'] = requestParameters.planKey;
        }

        if (requestParameters.resultKey !== undefined) {
            queryParameters['resultKey'] = requestParameters.resultKey;
        }

        if (requestParameters.buildNumber !== undefined) {
            queryParameters['buildNumber'] = requestParameters.buildNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/deploy/preview/result`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a preview of the deployment version.
     */
    async getVersionPreview(requestParameters: GetVersionPreviewRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionPreview> {
        const response = await this.getVersionPreviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a preview of the deployment version.
     */
    async getVersionPreview1Raw(requestParameters: GetVersionPreview1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionPreview>> {
        const queryParameters: any = {};

        if (requestParameters.previousVersionId !== undefined) {
            queryParameters['previousVersionId'] = requestParameters.previousVersionId;
        }

        if (requestParameters.versionId !== undefined) {
            queryParameters['versionId'] = requestParameters.versionId;
        }

        if (requestParameters.deploymentProjectId !== undefined) {
            queryParameters['deploymentProjectId'] = requestParameters.deploymentProjectId;
        }

        if (requestParameters.versionName !== undefined) {
            queryParameters['versionName'] = requestParameters.versionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/deploy/preview/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a preview of the deployment version.
     */
    async getVersionPreview1(requestParameters: GetVersionPreview1Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionPreview> {
        const response = await this.getVersionPreview1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove deployment result from queue.
     */
    async removeDeploymentFromQueueRaw(requestParameters: RemoveDeploymentFromQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deploymentResultId === null || requestParameters.deploymentResultId === undefined) {
            throw new runtime.RequiredError('deploymentResultId','Required parameter requestParameters.deploymentResultId was null or undefined when calling removeDeploymentFromQueue.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/queue/deployment/{deploymentResultId}`.replace(`{${"deploymentResultId"}}`, encodeURIComponent(String(requestParameters.deploymentResultId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove deployment result from queue.
     */
    async removeDeploymentFromQueue(requestParameters: RemoveDeploymentFromQueueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeDeploymentFromQueueRaw(requestParameters, initOverrides);
    }

    /**
     * Trigger deployment for deployment environment and version.
     */
    async startDeploymentRaw(requestParameters: StartDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RestQueuedDeployment>> {
        if (requestParameters.versionId === null || requestParameters.versionId === undefined) {
            throw new runtime.RequiredError('versionId','Required parameter requestParameters.versionId was null or undefined when calling startDeployment.');
        }

        if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
            throw new runtime.RequiredError('environmentId','Required parameter requestParameters.environmentId was null or undefined when calling startDeployment.');
        }

        const queryParameters: any = {};

        if (requestParameters.versionId !== undefined) {
            queryParameters['versionId'] = requestParameters.versionId;
        }

        if (requestParameters.environmentId !== undefined) {
            queryParameters['environmentId'] = requestParameters.environmentId;
        }

        if (requestParameters.verboseLogging !== undefined) {
            queryParameters['verboseLogging'] = requestParameters.verboseLogging;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/latest/queue/deployment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Trigger deployment for deployment environment and version.
     */
    async startDeployment(requestParameters: StartDeploymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RestQueuedDeployment> {
        const response = await this.startDeploymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
