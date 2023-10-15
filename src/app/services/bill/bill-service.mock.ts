import { Observable} from 'rxjs';
import { Bill } from '../../models/bill';

const BILL_LIST: Bill[] = [
    { id: 1, month: '202001', type: 'WATER', status: true },
    { id: 2, month: '202001', type: 'ELECTRICITY', status: false },
    { id: 3, month: '202001', type: 'SEWER', status: true },
    { id: 4, month: '202002', type: 'WATER', status: true },
    { id: 5, month: '202002', type: 'ELECTRICITY', status: false },
    { id: 6, month: '202002', type: 'SEWER', status: false }
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
    },
    payBill: (billId: number) => {
        return new Observable<any>((observer) => {
            observer.next();
            observer.complete();
            return {
                unsubscribe() {}
            }
        });
    }
};
