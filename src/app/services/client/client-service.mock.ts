import { Observable} from 'rxjs';
import { Client } from '../../models/client';

const CLIENT_A: Client = { id: 1, name: 'Joseph Carlton' };

const CLIENT_LIST: Client[] = [
    CLIENT_A,
    { id: 2, name: 'Maria Juarez' },
    { id: 3, name: 'Albert Kenny' },
    { id: 4, name: 'Jessica Phillips' },
    { id: 5, name: 'Charles Johnson' }
];

export const ClientServiceMock = {
    clientList: CLIENT_LIST,
    selectedClient: CLIENT_A,
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
    },
    selectClient: () => { },
    getSelectedClient: () => { return CLIENT_A }
};
