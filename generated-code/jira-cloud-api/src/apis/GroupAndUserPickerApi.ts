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
  FoundUsersAndGroups,
} from '../models/index';

export interface FindUsersAndGroupsRequest {
    query: string;
    maxResults?: number;
    showAvatar?: boolean;
    fieldId?: string;
    projectId?: Array<string>;
    issueTypeId?: Array<string>;
    avatarSize?: FindUsersAndGroupsAvatarSizeEnum;
    caseInsensitive?: boolean;
    excludeConnectAddons?: boolean;
}

/**
 * 
 */
export class GroupAndUserPickerApi extends runtime.BaseAPI {

    /**
     * Returns a list of users and groups matching a string. The string is used:   *  for users, to find a case-insensitive match with display name and e-mail address. Note that if a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.  *  for groups, to find a case-sensitive match with group name.  For example, if the string *tin* is used, records with the display name *Tina*, email address *sarah@tinplatetraining.com*, and the group *accounting* would be returned.  Optionally, the search can be refined to:   *  the projects and issue types associated with a custom field, such as a user picker. The search can then be further refined to return only users and groups that have permission to view specific:           *  projects.      *  issue types.          If multiple projects or issue types are specified, they must be a subset of those enabled for the custom field or no results are returned. For example, if a field is enabled for projects A, B, and C then the search could be limited to projects B and C. However, if the search is limited to projects B and D, nothing is returned.  *  not return Connect app users and groups.  *  return groups that have a case-insensitive match with the query.  The primary use case for this resource is to populate a picker field suggestion list with users or groups. To this end, the returned object includes an `html` field for each list. This field highlights the matched query term in the item name with the HTML strong tag. Also, each list is wrapped in a response object that contains a header for use in a picker, specifically *Showing X of Y matching groups*.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/yodKLg).
     * Find users and groups
     */
    async findUsersAndGroupsRaw(requestParameters: FindUsersAndGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FoundUsersAndGroups>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling findUsersAndGroups().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['maxResults'] != null) {
            queryParameters['maxResults'] = requestParameters['maxResults'];
        }

        if (requestParameters['showAvatar'] != null) {
            queryParameters['showAvatar'] = requestParameters['showAvatar'];
        }

        if (requestParameters['fieldId'] != null) {
            queryParameters['fieldId'] = requestParameters['fieldId'];
        }

        if (requestParameters['projectId'] != null) {
            queryParameters['projectId'] = requestParameters['projectId'];
        }

        if (requestParameters['issueTypeId'] != null) {
            queryParameters['issueTypeId'] = requestParameters['issueTypeId'];
        }

        if (requestParameters['avatarSize'] != null) {
            queryParameters['avatarSize'] = requestParameters['avatarSize'];
        }

        if (requestParameters['caseInsensitive'] != null) {
            queryParameters['caseInsensitive'] = requestParameters['caseInsensitive'];
        }

        if (requestParameters['excludeConnectAddons'] != null) {
            queryParameters['excludeConnectAddons'] = requestParameters['excludeConnectAddons'];
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
            path: `/rest/api/3/groupuserpicker`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a list of users and groups matching a string. The string is used:   *  for users, to find a case-insensitive match with display name and e-mail address. Note that if a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.  *  for groups, to find a case-sensitive match with group name.  For example, if the string *tin* is used, records with the display name *Tina*, email address *sarah@tinplatetraining.com*, and the group *accounting* would be returned.  Optionally, the search can be refined to:   *  the projects and issue types associated with a custom field, such as a user picker. The search can then be further refined to return only users and groups that have permission to view specific:           *  projects.      *  issue types.          If multiple projects or issue types are specified, they must be a subset of those enabled for the custom field or no results are returned. For example, if a field is enabled for projects A, B, and C then the search could be limited to projects B and C. However, if the search is limited to projects B and D, nothing is returned.  *  not return Connect app users and groups.  *  return groups that have a case-insensitive match with the query.  The primary use case for this resource is to populate a picker field suggestion list with users or groups. To this end, the returned object includes an `html` field for each list. This field highlights the matched query term in the item name with the HTML strong tag. Also, each list is wrapped in a response object that contains a header for use in a picker, specifically *Showing X of Y matching groups*.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/yodKLg).
     * Find users and groups
     */
    async findUsersAndGroups(requestParameters: FindUsersAndGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FoundUsersAndGroups> {
        const response = await this.findUsersAndGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const FindUsersAndGroupsAvatarSizeEnum = {
    Xsmall: 'xsmall',
    Xsmall2x: 'xsmall@2x',
    Xsmall3x: 'xsmall@3x',
    Small: 'small',
    Small2x: 'small@2x',
    Small3x: 'small@3x',
    Medium: 'medium',
    Medium2x: 'medium@2x',
    Medium3x: 'medium@3x',
    Large: 'large',
    Large2x: 'large@2x',
    Large3x: 'large@3x',
    Xlarge: 'xlarge',
    Xlarge2x: 'xlarge@2x',
    Xlarge3x: 'xlarge@3x',
    Xxlarge: 'xxlarge',
    Xxlarge2x: 'xxlarge@2x',
    Xxlarge3x: 'xxlarge@3x',
    Xxxlarge: 'xxxlarge',
    Xxxlarge2x: 'xxxlarge@2x',
    Xxxlarge3x: 'xxxlarge@3x'
} as const;
export type FindUsersAndGroupsAvatarSizeEnum = typeof FindUsersAndGroupsAvatarSizeEnum[keyof typeof FindUsersAndGroupsAvatarSizeEnum];
