import {StatusEnum} from '@enums/Status.enum';

export interface StateType<T, A> {
    items: T | [];
    filteredItems?: T | [] | null;
    filterParams?: A | {};
    status: StatusEnum;
}
