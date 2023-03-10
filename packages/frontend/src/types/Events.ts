export enum PageType {
    PAGE = 'page',
    MODAL = 'modal',
}

export enum PageName {
    WELCOME = 'welcome',
    REGISTER = 'register',
    LOGIN = 'login',
    PASSWORD_RECOVERY = 'password_recovery',
    PASSWORD_RESET = 'password_reset',
    SIGNUP = 'signup',
    EXPLORER = 'explorer',
    HOME = 'home',
    EXPLORE_TABLES = 'explore_tables',
    SAVED_QUERIES = 'saved_charts',
    SAVED_QUERY_EXPLORER = 'saved_chart_explorer',
    PROJECT_SETTINGS = 'project_settings',
    PROFILE_SETTINGS = 'profile_settings',
    GENERAL_SETTINGS = 'general_settings',
    PASSWORD_SETTINGS = 'password_settings',
    ORGANIZATION_SETTINGS = 'organization_settings',
    USER_MANAGEMENT_SETTINGS = 'user_management_settings',
    PROJECT_MANAGEMENT_SETTINGS = 'project_management_settings',
    INVITE_MANAGEMENT_SETTINGS = 'invite_management_settings',
    ABOUT_LIGHTDASH = 'about_lightdash',
    CREATE_PROJECT = 'create_project',
    CREATE_PROJECT_SETTINGS = 'create_project_settings',
    SAVED_DASHBOARDS = 'saved_dashboards',
    DASHBOARD = 'DASHBOARD',
    SQL_RUNNER = 'SQL_RUNNER',
    SOCIAL_LOGIN_SETTINGS = 'social_login_settings',
    APPEARANCE = 'appearance_settings',
    ACCESS_TOKENS = 'access_tokens',
    NO_ACCESS = 'no_access',
    NO_PROJECT_ACCESS = 'no_project_access',
    SPACE = 'space',
    SPACES = 'spaces',
    SHARE = 'share',
    USER_ACTIVITY = 'user_activity',
    VERIFY_EMAIL = 'verify_email',
    JOIN_ORGANIZATION = 'join_organization',
}

export enum CategoryName {
    SETTINGS = 'settings',
}

export enum SectionName {
    EMPTY_RESULTS_TABLE = 'empty_results_table',
    EXPLORER_TOP_BUTTONS = 'explorer_top_buttons',
    SIDEBAR = 'sidebar',
    PAGE_CONTENT = 'page_content',
    PAGE_FOOTER = 'page_footer',
    RESULTS_TABLE = 'results_table',
    DASHBOARD_TILE = 'dashboard_tile',
}

export enum EventName {
    REVOKE_INVITES_BUTTON_CLICKED = 'revoke_invites_button.clicked',
    INVITE_BUTTON_CLICKED = 'invite_users_to_organisation_button.clicked',
    RUN_QUERY_BUTTON_CLICKED = 'run_query_button.clicked',
    ADD_COLUMN_BUTTON_CLICKED = 'add_column_button.click',
    CREATE_TABLE_CALCULATION_BUTTON_CLICKED = 'create_table_calculation_button.click',
    EDIT_TABLE_CALCULATION_BUTTON_CLICKED = 'edit_table_calculation_button.click',
    UPDATE_TABLE_CALCULATION_BUTTON_CLICKED = 'update_table_calculation_button.click',
    DELETE_TABLE_CALCULATION_BUTTON_CLICKED = 'delete_table_calculation_button.click',
    CONFIRM_DELETE_TABLE_CALCULATION_BUTTON_CLICKED = 'confirm_delete_table_calculation_button.click',
    UPDATE_PROJECT_BUTTON_CLICKED = 'update_project_button.click',
    CREATE_PROJECT_BUTTON_CLICKED = 'create_project_button.click',
    REFRESH_DBT_CONNECTION_BUTTON_CLICKED = 'refresh_dbt_connection_button.click',
    UPDATE_PROJECT_TABLES_CONFIGURATION_BUTTON_CLICKED = 'update_project_tables_configuration.click',
    UPDATE_DASHBOARD_NAME_CLICKED = 'update_dashboard_name.click',
    DOCUMENTATION_BUTTON_CLICKED = 'documentation_button.click',
    TRY_DEMO_CLICKED = 'try_demo.clicked',
    CREATE_PROJECT_MANUALLY_BUTTON_CLICKED = 'create_project_manually_click.click',
    COPY_CREATE_PROJECT_CODE_BUTTON_CLICKED = 'copy_create_project_code_click.click',
    ONBOARDING_STEP_CLICKED = 'onboarding_step.click',
    SETUP_STEP_CLICKED = 'setup_step.click',
    FORM_STATE_CHANGED = 'form-state.changed',
    ADD_FILTER_CLICKED = 'add_filter.click',
    GO_TO_LINK_CLICKED = 'go_to_link.click',
    ADD_CUSTOM_METRIC_CLICKED = 'add_custom_metric.click',
    REMOVE_CUSTOM_METRIC_CLICKED = 'remove_custom_metric.click',
    NOTIFICATIONS_CLICKED = 'notifications.clicked',
    NOTIFICATIONS_ITEM_CLICKED = 'notifications_item.clicked',
    NOTIFICATIONS_READ_MORE_CLICKED = 'notifications_read_more.clicked',
    CUSTOM_AXIS_RANGE_TOGGLE_CLICKED = 'custom_axis_range_toggle_clicked',
    CREATE_PROJECT_ACCESS_BUTTON_CLICKED = 'create_project_access.clicked',
    SEARCH_RESULT_CLICKED = 'search_result.clicked',
    GLOBAL_SEARCH_OPEN = 'global_search.open',
    GLOBAL_SEARCH_CLOSED = 'global_search.closed',
    CROSS_FILTER_DASHBOARD_APPLIED = 'cross_filtering_apply.click',
    USAGE_ANALYTICS_CLICKED = 'usage_analytics_clicked',
    VIEW_UNDERLYING_DATA_CLICKED = 'view_underlying_data.clicked',
    DRILL_BY_CLICKED = 'drill_by.clicked',
}
