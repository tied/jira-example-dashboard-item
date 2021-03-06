/// <reference path="../../typings/index.d.ts" />

declare interface AJSStatic {
     $: JQueryStatic;
}

declare const AJS: AJSStatic;

declare module "wrm/context-path" {
     let contextPath: () => string;
     export = contextPath;
}

/**
 * See the table on https://developer.atlassian.com/jiradev/jira-platform/guides/dashboards/guide-building-a-dashboard-item-for-a-jira-p2-add-on/
 */
declare interface DashboardItemAPI {
     /**
      * Check if a dashboard item is configurable and if the current user has permission to edit this dashboard item's
      * configuration.
      * Returns {boolean} true if the current user can edit the gadget.
      */
     isEditable(): boolean;

     /**
      * Helper to extract the correct value to be persisted for a refresh field rendered with .refreshInterval
      * Returns {string} value that should be persisted.
      */
     getRefreshFieldValue(fieldName?: string): string;

     /**
      * Tries to save the passed preferences on the server for this dashboard item. If the user doesn't have permission
      * to edit this dashboard item, no action will be performed.
      */
     savePreferences(preferences: any): void;

     /**
      * Sets the title for the dashboard item.
      */
     setTitle(title: string): void;

     /**
      * Initialise the refreshing of the dashboard item every n minutes,
      * @param preferences.refresh minutes between refreshes
      * @param renderFunction the function to be called to refresh
      */
     initRefresh(preferences: { refresh: string }, renderFunction): void;

     /**
      * Shows the loading bar for the dashboard item.
      */
     showLoadingBar(): void;

     /**
      * Hides the loading bar for the dashboard item.
      */
     hideLoadingBar(): void;

     /**
      * Returns the context for the dashboard item.
      */
     getContext(): JQuery;

     /**
      * Close the edit dialog of the dashboard item.
      */
     closeEdit(): void;

     /**
      * Returns the Id for the dashboard item.
      */
     getGadgetId(): string;

     /**
      * When you add some content dynamically to your dashboard item and it causes the height to increase a scroll will appear.
      * Call this method to resize the content automatically and make the scroll go away.
      */
     resize(): any;

     /**
      *
      * @param event TODO - add more events as discovered
      * @param callback
      */
     once(event: "afterRender", callback: () => void);

}