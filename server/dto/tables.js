/*
    interface IArgs {
        reservedForRequestedTime: boolean;
        table: ITable
    }
*/

export function TablesDTO(tables) {

    return tables.map((table) => TableDTO({table}));
}

export function TableDTO({ reservedForRequestedTime, table }) {

    return ({ ...table, reservedForRequestedTime });
}