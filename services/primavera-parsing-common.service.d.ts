import { PrimaveraParsingCommonEvents } from '../events/primavera-parsing-events';
import { RawDataCommonEvents } from '../events/raw-data-events';
/**
 * This service is responsible for converting the result produced by the (XER -> arrays) parsing process
 * into raw/tabular-friendly and graph-friendly formats and emitting it to the corresponding services.
 */
export declare class PrimaveraParsingCommonService {
    private primaveraEvents;
    private rawDataEvents;
    /**
     * Creates an instance of PrimaveraParsingCommonService.
     *
     * @param {PrimaveraParsingCommonEvents} primaveraEvents This is used for other services/components to trigger the event which tells this
     * service to start processing, and it is also used by this service to emit events that other services/components can
     * subscribe to.
     * @param {RawDataCommonEvents} rawDataEvents
     * @memberof PrimaveraParsingCommonService
     */
    constructor(primaveraEvents: PrimaveraParsingCommonEvents, rawDataEvents: RawDataCommonEvents);
    /**
     * Each row is processed in sequence and the tables/headers/rows are extracted. For examples of a primavera files see
     * [here](https://drive.google.com/drive/folders/1-hNWs8TBskLEMLuJiplfyF7cBJ3iEEHc). For details on the primavera export
     * schema see [here](https://docs.oracle.com/cd/E38975_01/English/Mapping_and_Schema/Data_Mapping_Docs/OdsFieldMapTable.html).
     * @param results The results returned from parsing the primavera file into an array of arrays.
     */
    private parseResults;
    /**
     * Processes a new data row.
     * @param headers The headers row is used to get the keys for the row object to be produced.
     * @param row The row data is used to get the values for the row object to be produced.
     * @param index The index of the table this row belongs to.
     */
    private processDataRow;
    /**
     * Processes the header row for the table at the given index.
     * @param row The row containing the headers as an array of strings.
     * @param index The index of the table these are the headers of.
     */
    private processHeaderRow;
    /**
     * Processes the row corresponding to the start of a table having the given index.
     * @param index The index of the table.
     * @param row The row corresponding to the table. This is where the table title is stored as the entry at index 1.
     */
    private processTableRow;
}
