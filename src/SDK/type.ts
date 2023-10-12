export type OfficeConfig = {
  documentType: DocumentTpye;

  viewMode: "edit" | "read" | "read_with_menu" | "presentation";
  locale?: "en" | "ko";
  watermark?: string;
  extraFonts?: ExtraFont;
  author?: string;
  hideTitleBar?: boolean;
  removeRibbonTabMenus?: string[];
  removeRibbonGroups?: string[];
  removeRibbonMenus?: string[];
  removeContextMenus?: string[];
  removeDefaultFonts?: string[];
  youtubeSearchAPIKey?: string;
  pixabaySearchAPIKey?: string;
  pexelsSearchAPIKey?: string;
};
type DocumentTpye = "sheet" | "slide" | "word" | "hwp";
export type docData = {
  name: string;
  blob: Blob;
};

export type Apis = {
  openDocument: (data: docData) => Promise<void>;
  openNewDocument: () => Promise<void>;
  saveDocument: () => Promise<docData>;
  insertHtmlData: (text: string) => string;
  insertString: (text: string) => string;
  // insertImage,
  // getMarkString,
  // getCaretInfo,
  // getFrameToImageBlob,
  // getCellRange,
  // getFormulaBarFieldText,
  // colseSheetCellEdit
};

export type OfficeAPI = {
  [docType: string]: Apis;
};

type ExtraFont = {
  fontFamily: string;
  fontBlob: Blob;
  fontThumbnail: string;
};
