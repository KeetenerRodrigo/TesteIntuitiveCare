import fs from 'fs';
import pdf from 'pdf-parse';
import AdmZip from 'adm-zip';

import AppError from '@shared/errors/AppError';
import TransformPDFtoCSV from '@modules/archive/utils/TransformPDFtoCSV';

class ManipulateArchiveService {
  public async execute(): Promise<void> {
    try {
      const file = fs.readFileSync('Arquivo2.pdf');

      const { text } = await pdf(file).then();

      const transformPDFtoCSV = new TransformPDFtoCSV();

      await transformPDFtoCSV.transform(text, 'Quadro 30', 172);
      await transformPDFtoCSV.transform(text, 'Quadro 31', 237);
      await transformPDFtoCSV.transform(text, 'Quadro 32', 170);

      const admZip = new AdmZip();

      admZip.addLocalFolder('./csv');

      fs.writeFileSync('Teste_Intuitive_Care_Keetener_Rodrigo.zip', admZip.toBuffer());
    } catch (err){
      throw new AppError(err, 400);
    }
  }
}

export default ManipulateArchiveService;
