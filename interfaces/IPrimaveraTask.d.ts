import { Moment } from 'moment';
export interface IPrimaveraTask {
    id: string;
    name: string;
    code: string;
    startDate: Moment;
    endDate: Moment;
    actualStartDate: Moment;
    actualEndDate: Moment;
    type: 'task' | 'milestone';
}
