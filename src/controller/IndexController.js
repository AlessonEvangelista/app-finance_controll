import AuthSpreadSheet from '../Auth/authenticate';
const pageObject = { "title" : "", "valorTotal":"" };

class IndexController {
    async access(req, res) {
        const spread = await AuthSpreadSheet.gAutentication();
        pageObject.title = spread.title;

        // getFullValue()
        const sheet = spread.sheetsByIndex[0];      
        await sheet.loadCells('B2:C10');
        pageObject.valorTotal = sheet.getCellByA1('C10').formattedValue;
        // Closed getFullValue()
        //await this.getFullValue(spread);


        return res.render('index.html', { pageInfo: {"title": pageObject.title, "total": pageObject.valorTotal} });
    }

    async getFullValue(spread) {

        const sheet = spread.sheetsByIndex[0];      
        await sheet.loadCells('B2:C10');
        
        return sheet.getCellByA1('C10').formattedValue;

    } 

}

export default new IndexController();
