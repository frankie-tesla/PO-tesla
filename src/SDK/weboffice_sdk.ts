import { OfficeConfig, Apis, docData } from "./type";

class WebOffice {
  instance: Apis | null;
  config: OfficeConfig;
  containerId: string;
  constructor(config: OfficeConfig, containerId: string) {
    this.config = config;
    this.containerId = containerId;
    this.instance = null;
  }

  async getInstance() {
    const API = await window.PolarisWebOffice(this.containerId, this.config);
    this.instance = API[this.config.documentType];
    return this.instance;
  }

  async openDocument({ name, blob }: docData) {
    if (!this.instance) {
      const webofficeAPI = await this.getInstance();
      return webofficeAPI.openDocument({ name: name, blob: blob });
    } else {
      return this.instance.openDocument({ name: name, blob: blob });
    }
  }
  async openNewDocument() {
    if (!this.instance) {
      const webofficeAPI = await this.getInstance();
      return webofficeAPI.openNewDocument();
    } else {
      return this.instance.openNewDocument();
    }
  }
  async saveDocument() {
    if (!this.instance) {
      const webofficeAPI = await this.getInstance();
      return webofficeAPI.saveDocument();
    } else {
      return this.instance.saveDocument();
    }
  }
  async insertTextData(text: string) {
    if (!this.instance) {
      const webofficeAPI = await this.getInstance();
      return webofficeAPI.insertHtmlData(text);
    } else {
      return this.instance.insertHtmlData(text);
    }
  }
  async insertString(text: string) {
    if (!this.instance) {
      const webofficeAPI = await this.getInstance();
      return webofficeAPI.insertString(text);
    } else {
      return this.instance.insertString(text);
    }
  }
  //   async InsertPicture(blob:Blob) {
  //     return this.instance.insertImage(blob);
  //   }
  //   getMarkString() {
  //     return this.instance.getMarkString();
  //   }
  //   getCaretInfo() {
  //     return this.instance.getCaretInfo();
  //   }
  //   getFrameToImage() {
  //     return this.instance.getFrameToImageBlob();
  //   }
  //   getCellRange() {
  //     return this.instance.getCellRange();
  //   }
  //   getFormulaBarFieldText() {
  //     return this.instance.getFormulaBarFieldText();
  //   }
  //   colseSheetCellEdit() {
  //     return this.instance.colseSheetCellEdit();
  //   }
}

export default WebOffice;
