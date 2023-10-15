import { Observable} from 'rxjs';
import { Bill } from '../../models/bill';

const BILL_LIST: Bill[] = [
    { id: 1, period: '202001', category: 'WATER', status: true },
    { id: 2, period: '202001', category: 'ELECTRICITY', status: false },
    { id: 3, period: '202001', category: 'SEWER', status: true },
    { id: 4, period: '202002', category: 'WATER', status: true },
    { id: 5, period: '202002', category: 'ELECTRICITY', status: false },
    { id: 6, period: '202002', category: 'SEWER', status: false }
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
