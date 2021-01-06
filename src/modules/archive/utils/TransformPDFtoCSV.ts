import fs from 'fs';
import path from 'path';

class TransformPDFtoCSV {
  public async transform(textpdf: String, name: String, numberofletter: number): Promise<void> {

    const valor = textpdf.substring(textpdf.indexOf("Fonte: Elaborado pelos autores.")
      , textpdf.indexOf(`${name}`) + numberofletter);

    const quadro = valor.substring(valor.indexOf(`${name}`));

    const csvFolder = path.join('csv', `${name}.csv`);

    fs.writeFile(csvFolder, quadro, function (err) {
      if (err) throw err;
    });
  }
}

export default TransformPDFtoCSV;
