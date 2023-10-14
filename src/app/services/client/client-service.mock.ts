import { Observable} from 'rxjs';
import { Client } from '../../models/client';

const CLIENT_LIST: Client[] = [
    { id: 1, name: 'Joseph Carlton' },
    { id: 2, name: 'Maria Juarez' },
    { id: 3, name: 'Albert Kenny' },
    { id: 4, name: 'Jessica Phillips' },
    { id: 5, name: 'Charles Johnson' }
];

export const ClientServiceMock = {
    clientList: CLIENT_LIST,
    getClients: () => {
        return new Observable<Client[]>( (observer) => {
            observer.next(
                JSON.parse(JSON.stringify(CLIENT_LIST))
            );
            observer.complete();
            return {
                unsubscribe() { }
            };
        });
    }
};
