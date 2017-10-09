/** Declaration file generated by dts-gen */

export const actionTypes: {
    AUTHENTICATION_INIT_FINISHED: string;
    AUTHENTICATION_INIT_STARTED: string;
    AUTH_UPDATE_ERROR: string;
    AUTH_UPDATE_START: string;
    AUTH_UPDATE_SUCCESS: string;
    EMAIL_UPDATE_ERROR: string;
    EMAIL_UPDATE_START: string;
    EMAIL_UPDATE_SUCCESS: string;
    ERROR: string;
    FILE_DELETE_COMPLETE: string;
    FILE_DELETE_ERROR: string;
    FILE_DELETE_START: string;
    FILE_UPLOAD_COMPLETE: string;
    FILE_UPLOAD_ERROR: string;
    FILE_UPLOAD_PROGRESS: string;
    FILE_UPLOAD_START: string;
    LOGIN: string;
    LOGIN_ERROR: string;
    LOGOUT: string;
    NO_VALUE: string;
    PROFILE_UPDATE_ERROR: string;
    PROFILE_UPDATE_START: string;
    PROFILE_UPDATE_SUCCESS: string;
    SET: string;
    SET_PROFILE: string;
    START: string;
    UNAUTHORIZED_ERROR: string;
    UNSET_LISTENER: string;
};

export const constants: {
    actionTypes: {
        AUTHENTICATION_INIT_FINISHED: string;
        AUTHENTICATION_INIT_STARTED: string;
        AUTH_UPDATE_ERROR: string;
        AUTH_UPDATE_START: string;
        AUTH_UPDATE_SUCCESS: string;
        EMAIL_UPDATE_ERROR: string;
        EMAIL_UPDATE_START: string;
        EMAIL_UPDATE_SUCCESS: string;
        ERROR: string;
        FILE_DELETE_COMPLETE: string;
        FILE_DELETE_ERROR: string;
        FILE_DELETE_START: string;
        FILE_UPLOAD_COMPLETE: string;
        FILE_UPLOAD_ERROR: string;
        FILE_UPLOAD_PROGRESS: string;
        FILE_UPLOAD_START: string;
        LOGIN: string;
        LOGIN_ERROR: string;
        LOGOUT: string;
        NO_VALUE: string;
        PROFILE_UPDATE_ERROR: string;
        PROFILE_UPDATE_START: string;
        PROFILE_UPDATE_SUCCESS: string;
        SET: string;
        SET_PROFILE: string;
        START: string;
        UNAUTHORIZED_ERROR: string;
        UNSET_LISTENER: string;
    };
    defaultConfig: {
        autoPopulateProfile: boolean;
        dispatchOnUnsetListener: boolean;
        enableEmptyAuthChanges: boolean;
        enableLogging: boolean;
        enableRedirectHandling: boolean;
        setProfilePopulateResults: boolean;
        updateProfileOnLogin: boolean;
        userProfile: any;
    };
    defaultInitProps: string[];
    defaultJWTProps: string[];
    metaParams: string[];
    paramSplitChar: string;
    supportedAuthProviders: string[];
};

export function reduxFirestore(fbConfig: any, otherConfig: any, ...args: any[]): any;


export namespace firestoreReducer {
    const prototype: {
    };

}


export namespace reactReduxFirebase {
    const prototype: {
    };

}

export namespace reduxFirestore {
    const prototype: {
    };

}
