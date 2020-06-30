import AuthSpreadSheet from '../Auth/authenticate';
const gsp = { "gspread" : '' };

class IndexController {
    async access(req, res) {
        const spread = await AuthSpreadSheet.gAutentication();
        gsp.gspread = spread;

        return res.json({
            "title": gsp.gspread.title
        })
    }

}

export default new IndexController();
