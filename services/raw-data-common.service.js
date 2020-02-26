"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is making the raw data parsed from the import of primavera file (XER), available to other
 * services/components.
 *
 * @export
 * @class RawDataCommonService
 */
class RawDataCommonService {
    /**
     * Service constructor.
     * @param PrimaveraParsingCommonEvents The RawDataService subscribes to the following PrimaveraEventsService events:
     *
     * 1. initializing: To clear the data.
     * 2. tableDiscovered: To add a new table.
     * 3. headersDiscovered: To add the table's headers.
     * 4. rowDiscovered: to add a row to a table.
     * 5. taskDiscovered: to update the start/end dates of the project.
     */
    constructor(primaveraParsingEvents, rawDataEvents) {
        this.primaveraParsingEvents = primaveraParsingEvents;
        this.rawDataEvents = rawDataEvents;
        rawDataEvents.initializing.subscribe(_ => this.clearData());
        primaveraParsingEvents.tableDiscovered.subscribe(data => this.addTable(data.tableIndex, data.title));
        primaveraParsingEvents.headersDiscovered.subscribe(data => this.addHeaders(data.tableIndex, data.headers));
        primaveraParsingEvents.rowDiscovered.subscribe(data => this.addRow(data.tableIndex, data.row));
    }
    /**
     * Adds a new (empty) table to the list of tables.
     * @param index Table index in the list of tables.
     * @param title Table title.
     */
    addTable(index, title) {
        this.data[index] = {
            settings: {
                data: [],
                colHeaders: null
            },
            title: title
        };
    }
    /**
     * Adds the headers to the table at the given index.
     * @param index Table index in the list of tables.
     * @param headers An array of strings containing the the headers of the table at the given index. These are not in a user-friendly
     * format, instead they are as defined
     * [here](https://docs.oracle.com/cd/E38975_01/English/Mapping_and_Schema/Data_Mapping_Docs/OdsFieldMapTable.html).
     * The conversion to a friendlier format conversion happens at a later stage.
     */
    addHeaders(index, headers) {
        this.data[index].settings.colHeaders = headers;
    }
    /**
     * Adds a new row to the table at the given index.
     * @param index Table index in the list of tables.
     * @param row The row information in object form i.e. key/value pairs.
     */
    addRow(index, row) {
        this.data[index].settings.data.push(row);
    }
    /**
     * Clears the data, in effect resetting the service to the initial state.
     */
    clearData() {
        this.data = [];
    }
}
exports.RawDataCommonService = RawDataCommonService;
//# sourceMappingURL=raw-data-common.service.js.map