import { IRawTableData } from '../interfaces/IRawTableData';
import { PrimaveraParsingCommonEvents } from '../events/primavera-parsing-events';
import { RawDataCommonEvents } from '../events/raw-data-events';
/**
 * This is making the raw data parsed from the import of primavera file (XER), available to other
 * services/components.
 *
 * @export
 * @class RawDataCommonService
 */
export declare class RawDataCommonService {
    private primaveraParsingEvents;
    private rawDataEvents;
    /**
     * This is the property containing the actual data.
     */
    data: Array<IRawTableData>;
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
    constructor(primaveraParsingEvents: PrimaveraParsingCommonEvents, rawDataEvents: RawDataCommonEvents);
    /**
     * Adds a new (empty) table to the list of tables.
     * @param index Table index in the list of tables.
     * @param title Table title.
     */
    private addTable;
    /**
     * Adds the headers to the table at the given index.
     * @param index Table index in the list of tables.
     * @param headers An array of strings containing the the headers of the table at the given index. These are not in a user-friendly
     * format, instead they are as defined
     * [here](https://docs.oracle.com/cd/E38975_01/English/Mapping_and_Schema/Data_Mapping_Docs/OdsFieldMapTable.html).
     * The conversion to a friendlier format conversion happens at a later stage.
     */
    private addHeaders;
    /**
     * Adds a new row to the table at the given index.
     * @param index Table index in the list of tables.
     * @param row The row information in object form i.e. key/value pairs.
     */
    private addRow;
    /**
     * Clears the data, in effect resetting the service to the initial state.
     */
    private clearData;
}
