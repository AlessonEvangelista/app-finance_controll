import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';
import env from '../../env.json';

class Autenticacao {
    async gAutentication() {
        const doc = new GoogleSpreadsheet(env.idPlanilha);
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();

        console.log(await doc.loadInfo());
        
        return doc;
    }
}

export default new Autenticacao();