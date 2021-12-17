export interface ActionType<T> {
    readonly type: string;
    readonly payload?: T;
    readonly error: any;
}
