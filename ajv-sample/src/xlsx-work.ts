import * as xlsx from "xlsx";

const main = () => {
    let book = xlsx.readFile("assets/table-data-with-hyperlinks.xlsx")
    //console.log(book.SheetNames)
    let sheet = xlsx.utils.sheet_to_json(book.Sheets["PlainTable"], {header: "A", raw: false, blankrows: true,defval: null})
    // let sheet = xlsx.utils.sheet_to_json(book.Sheets["PlainTable"], {header: 1, raw: false, blankrows: true,defval: null})
    //let sheet = xlsx.utils.sheet_to_csv(book.Sheets["PlainTable"], {blankrows: true})
    const row1:any = sheet[0]
    // console.log(row1.A)
    console.log(sheet)
};

export {main};