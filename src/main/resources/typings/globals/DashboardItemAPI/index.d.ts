// Generated by typings
// Source: typings/custom/DashboardItemAPI.d.ts
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
    getRefreshFieldValue(fieldName: string): string;

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
     * Trigger a refresh of the dashboard item.
     */
    initRefresh(preferences, callback): void;

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

    once(event: string, callback: () => void);

    gadget: Gadget;
}

// TODO lots more stuff on this
declare interface Gadget {
    amdModule: string;
    configurable: boolean;
    context: any;
    gadgetUrl: string;
    id: string;
    isMaximizable: true;
    layoutManager: any;
    loaded: boolean;
    minimized: boolean;
    moduleAPI: DashboardItemAPI;
    publicInterface: any;
    securityToken: any;
    title: string;
    userPrefs: any;
    webResourceKey: any;
}