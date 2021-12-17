export interface PayloadSearchInterface {
    query: string | null;
    year: number | null;
    tags: number[] | null | never[];
}
