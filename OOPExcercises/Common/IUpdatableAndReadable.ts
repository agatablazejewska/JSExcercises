export interface IUpdatableAndReadable {
    update<T>(source: T) : void;
    show() : void;
    showAllInfo() : void;
}