import { BaseModel, BaseModelSchema } from '../base';
import OAuthCredentials from './OAuthCredentials';
export declare enum UserStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum UserRole {
    ROOT = "root",
    USER = "user"
}
export interface UserSchema extends BaseModelSchema {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    status?: UserStatus;
    virtual?: boolean;
    credentials?: OAuthCredentials;
}
export default class User extends BaseModel implements UserSchema {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    status?: UserStatus;
    virtual?: boolean;
    credentials?: OAuthCredentials;
    constructor(data: UserSchema);
}
