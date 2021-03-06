export interface CRUD<T> {
    create(data : T) : Promise<any>;
    
    find(id : number) : Promise<any>;

    findAll() : Promise<any>;

    update(id : number, data : T) : Promise<any>;

    delete(id : number) : Promise<any>;
}
