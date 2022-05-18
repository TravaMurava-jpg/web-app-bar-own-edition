import { Table } from '../models/models.js'

export const checkIfUnreservedTableExists = async () => {
    const tables = await Table.findAll()
    const table = tables.find((table) => !table.reserved)
    return table?.id
}
