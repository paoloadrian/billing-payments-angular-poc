import { Observable} from 'rxjs';
import { Bill } from '../../models/bill';

const BILL_LIST: Bill[] = [
    { month: '202001', type: 'WATER', status: true },
    { month: '202001', type: 'ELECTRICITY', status: false },
    { month: '202001', type: 'SEWER', status: true },
    { month: '202002', type: 'WATER', status: true },
    { month: '202002', type: 'ELECTRICITY', status: false },
    { month: '202002', type: 'SEWER', status: false }
];

export const BillServiceMock = {
    billList: BILL_LIST,
    getBills: () => {
        return new Observable<Bill[]>( (observer) => {
            observer.next(
                JSON.parse(JSON.stringify(BILL_LIST))
            );
            observer.complete();
            return {
                unsubscribe() { }
            };
        });
    }
};
