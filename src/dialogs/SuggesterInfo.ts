type SuggesterInfo = {
  field: string;
  code: string;
  desc: string;
  after: string;
};

export const EXCALIDRAW_AUTOMATE_INFO: SuggesterInfo[] = [
  {
    field: "plugin",
    code: null,
    desc: "The ExcalidrawPlugin object",
    after: "",
  },
  {
    field: "elementsDict",
    code: null,
    desc: "The {} dictionary object, contains the ExcalidrawElements currently edited in Automate indexed by el.id",
    after: '[""]',
  },
  {
    field: "imagesDict",
    code: null,
    desc: "the images files including DataURL, indexed by fileId",
    after: '[""]',
  },
  {
    field: "style.strokeColor",
    code: "[string]",
    desc: "A valid css color. See <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "style.backgroundColor",
    code: "[string]",
    desc: "A valid css color. See <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "style.angle",
    code: "[number]",
    desc: "Rotation of the object in radian",
    after: "",
  },
  {
    field: "style.fillStyle",
    code: "[string]",
    desc: "'hachure' | 'cross-hatch' | 'solid'",
    after: "",
  },
  {
    field: "style.strokeWidth",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "style.strokeStyle",
    code: "[string]",
    desc: "'solid' | 'dashed' | 'dotted'",
    after: "",
  },
  {
    field: "style.roughness",
    code: "[number]",
    desc: "0:Architect\n1:Artist\n2:Cartoonist",
    after: "",
  },
  {
    field: "style.opacity",
    code: "[number]",
    desc: "100: Fully opaque\n0: Fully transparent",
    after: "",
  },
  {
    field: "style.strokeSharpness",
    code: "[string]",
    desc: "'round' | 'sharp'",
    after: "",
  },
  {
    field: "style.fontFamily",
    code: "[number]",
    desc: "1: Virgil, 2:Helvetica, 3:Cascadia, 4:LocalFont",
    after: "",
  },
  {
    field: "style.fontSize",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "style.textAlign",
    code: "[string]",
    desc: "'left' | 'right' | 'center'",
    after: "",
  },
  {
    field: "style.verticalAlign",
    code: "[string]",
    desc: "For future use, has no effect currently; 'top' | 'bottom' | 'middle'",
    after: "",
  },
  {
    field: "style.startArrowHead",
    code: "[string]",
    desc: "'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
  },
  {
    field: "style.endArrowHead",
    code: "[string]",
    desc: "'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
  },
  {
    field: "canvas.theme",
    code: "[string]",
    desc: "'dark' | 'light'",
    after: "",
  },
  {
    field: "canvas.viewBackgroundColor",
    code: "[string]",
    desc: "A valid css color.\nSee <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "canvas.gridSize",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "addToGroup",
    code: "addToGroup(objectIds: []): string;",
    desc: null,
    after: "",
  },
  {
    field: "toCliboard",
    code: "toClipboard(templatePath?: string): void;",
    desc: "Copies current elements using template to clipboard, ready to be pasted into an excalidraw canvas",
    after: "",
  },
  {
    field: "getElements",
    code: "getElements(): ExcalidrawElement[];",
    desc: "Get all elements from ExcalidrawAutomate elementsDict",
    after: "",
  },
  {
    field: "getElement",
    code: "getElement(id: string): ExcalidrawElement;",
    desc: "Get single element from ExcalidrawAutomate elementsDict",
    after: "",
  },
  {
    field: "create",
    code: 'create(params?: {filename?: string, foldername?: string, templatePath?: string, onNewPane?: boolean, frontmatterKeys?: { "excalidraw-plugin"?: "raw" | "parsed", "excalidraw-link-prefix"?: string, "excalidraw-link-brackets"?: boolean, "excalidraw-url-prefix"?: string,},}): Promise<string>;',
    desc: "Create a drawing and save it to filename.\nIf filename is null: default filename as defined in Excalidraw settings.\nIf folder is null: default folder as defined in Excalidraw settings\n",
    after: "",
  },
  {
    field: "createSVG",
    code: "createSVG(templatePath?: string, embedFont?: boolean, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string,): Promise<SVGSVGElement>;",
    desc: "Use ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
  },
  {
    field: "createPNG",
    code: "createPNG(templatePath?: string, scale?: number, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string,): Promise<any>;",
    desc: "Use ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
  },
  {
    field: "wrapText",
    code: "wrapText(text: string, lineLen: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addRect",
    code: "addRect(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addDiamond",
    code: "addDiamond(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addEllipse",
    code: "addEllipse(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addBlob",
    code: "addBlob(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addText",
    code: 'addText(topX: number, topY: number, text: string, formatting?: {wrapAt?: number; width?: number; height?: number; textAlign?: string; box?: boolean | "box" | "blob" | "ellipse" | "diamond"; boxPadding?: number;}, id?: string,): string;',
    desc: "If box is !null, then text will be boxed\nThe function returns the id of the TextElement. If the text element is boxed i.e. it is a sticky note, then the id of the container object",
    after: "",
  },
  {
    field: "addLine",
    code: "addLine(points: [[x: number, y: number]]): string;",
    desc: null,
    after: "",
  },
  {
    field: "addArrow",
    code: "addArrow(points: [[x: number, y: number]], formatting?: { startArrowHead?: string; endArrowHead?: string; startObjectId?: string; endObjectId?: string;},): string;",
    desc: null,
    after: "",
  },
  {
    field: "addImage",
    code: "addImage(topX: number, topY: number, imageFile: TFile): Promise<string>;",
    desc: null,
    after: "",
  },
  {
    field: "addLaTex",
    code: "addLaTex(topX: number, topY: number, tex: string): Promise<string>;",
    desc: null,
    after: "",
  },
  {
    field: "connectObjects",
    code: "connectObjects(objectA: string, connectionA: ConnectionPoint, objectB: string, connectionB: ConnectionPoint, formatting?: {numberOfPoints?: number; startArrowHead?: string; endArrowHead?: string; padding?: number;},): void;",
    desc: 'type ConnectionPoint = "top" | "bottom" | "left" | "right" | null\nWhen null is passed as ConnectionPoint then Excalidraw will automatically decide\nnumberOfPoints is the number of points on the line. Default is 0 i.e. line will only have a start and end point.\nArrowHead: "triangle"|"dot"|"arrow"|"bar"|null',
    after: "",
  },
  {
    field: "clear",
    code: "clear(): void;",
    desc: "Clears elementsDict and imagesDict only",
    after: "",
  },
  {
    field: "reset",
    code: "reset(): void;",
    desc: "clear() + reset all style values to default",
    after: "",
  },
  {
    field: "isExcalidrawFile",
    code: "isExcalidrawFile(f: TFile): boolean;",
    desc: "Returns true if MD file is an Excalidraw file",
    after: "",
  },
  {
    field: "targetView",
    code: "targetView: ExcalidrawView;",
    desc: "The Obsidian view currently edited",
    after: "",
  },
  {
    field: "setView",
    code: 'setView(view: ExcalidrawView | "first" | "active"): ExcalidrawView;',
    desc: null,
    after: "",
  },
  {
    field: "getExcalidrawAPI",
    code: "getExcalidrawAPI(): any;",
    desc: "<a onclick='window.open(\"https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw#ref\")'>Excalidraw API</a>",
    after: "",
  },
  {
    field: "getViewElements",
    code: "getViewElements(): ExcalidrawElement[];",
    desc: "Get elements in View",
    after: "",
  },
  {
    field: "deleteViewElements",
    code: "deleteViewElements(el: ExcalidrawElement[]): boolean;",
    desc: null,
    after: "",
  },
  {
    field: "getViewSelectedElement",
    code: "getViewSelectedElement(): ExcalidrawElement;",
    desc: "Get the selected element in the view, if more are selected, get the first",
    after: "",
  },
  {
    field: "getViewSelectedElements",
    code: "getViewSelectedElements(): ExcalidrawElement[];",
    desc: null,
    after: "",
  },
  {
    field: "getViewFileForImageElement",
    code: "getViewFileForImageElement(el: ExcalidrawElement): TFile | null;",
    desc: "Returns the TFile file handle for the image element",
    after: "",
  },
  {
    field: "copyViewElementsToEAforEditing",
    code: "copyViewElementsToEAforEditing(elements: ExcalidrawElement[]): void;",
    desc: "Copies elements from view to elementsDict for editing",
    after: "",
  },
  {
    field: "viewToggleFullScreen",
    code: "viewToggleFullScreen(forceViewMode?: boolean): void;",
    desc: null,
    after: "",
  },
  {
    field: "connectObjectWithViewSelectedElement",
    code: "connectObjectWithViewSelectedElement(objectA: string, connectionA: ConnectionPoint, connectionB: ConnectionPoint, formatting?: {numberOfPoints?: number; startArrowHead?: string; endArrowHead?: string; padding?: number;},): boolean;",
    desc: "Connect an object to the selected element in the view\nSee tooltip for connectObjects for details",
    after: "",
  },
  {
    field: "addElementsToView",
    code: "addElementsToView(repositionToCursor?: boolean, save?: boolean, newElementsOnTop?: boolean,): Promise<boolean>;",
    desc: "Adds elements from elementsDict to the current view\nrepositionToCursor: default is false\nsave: default is true\nnewElementsOnTop: default is false, i.e. the new elements get to the bottom of the stack\nnewElementsOnTop controls whether elements created with ExcalidrawAutomate are added at the bottom of the stack or the top of the stack of elements already in the view\nNote that elements copied to the view with copyViewElementsToEAforEditing retain their position in the stack of elements in the view even if modified using EA",
    after: "",
  },
  {
    field: "onDropHook",
    code: 'onDropHook(data: {ea: ExcalidrawAutomate, event: React.DragEvent<HTMLDivElement>, draggable: any, type: "file" | "text" | "unknown", payload: {files: TFile[], text: string,}, excalidrawFile: TFile, view: ExcalidrawView, pointerPosition: { x: number, y: number},}): boolean;',
    desc: "If set Excalidraw will call this function onDrop events.\nA return of true will stop the default onDrop processing in Excalidraw.\n\ndraggable is the Obsidian draggable object\nfiles is the array of dropped files\nexcalidrawFile is the file receiving the drop event\nview is the excalidraw view receiving the drop.\npointerPosition is the pointer position on canvas at the time of drop.",
    after: "",
  },
  {
    field: "mostRecentMarkdownSVG",
    code: "mostRecentMarkdownSVG: SVGSVGElement;",
    desc: "Markdown renderer will drop a copy of the most recent SVG here for debugging purposes",
    after: "",
  },
  {
    field: "getEmbeddedFilesLoader",
    code: "getEmbeddedFilesLoader(isDark?: boolean): EmbeddedFilesLoader;",
    desc: "Utility function to generate EmbeddedFilesLoader object",
    after: "",
  },
  {
    field: "getExportSettings",
    code: "getExportSettings(withBackground: boolean, withTheme: boolean,): ExportSettings;",
    desc: "Utility function to generate ExportSettings object",
    after: "",
  },
  {
    field: "getBoundingBox",
    code: "getBoundingBox(elements: ExcalidrawElement[]): {topX: number, topY: number, width: number, height: number,};",
    desc: "Gets the bounding box of elements. The bounding box is the box encapsulating all of the elements completely.",
    after: "",
  },
  {
    field: "getMaximumGroups",
    code: "getMaximumGroups(elements: ExcalidrawElement[]): ExcalidrawElement[][];",
    desc: "Elements grouped by the highest level groups",
    after: "",
  },
  {
    field: "getLargestElement",
    code: "getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;",
    desc: "Gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box",
    after: "",
  },
  {
    field: "intersectElementWithLine",
    code: "intersectElementWithLine(element: ExcalidrawBindableElement, a: readonly [number, number], b: readonly [number, number], gap?: number,): Point[];",
    desc: "If gap is given, the element is inflated by this value.\nReturns 2 or 0 intersection points between line going through `a` and `b` and the `element`, in ascending order of distance from `a`.",
    after: "",
  },
  {
    field: "getLargestElement",
    code: "getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;",
    desc: "Gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box",
    after: "",
  },
  {
    field: "activeScript",
    code: "activeScript: string;",
    desc: "Mandatory to set before calling the get and set ScriptSettings functions. Set automatically by the ScriptEngine\nSee for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "getScriptSettings",
    code: "getScriptSettings(): {};",
    desc: "Returns script settings. Saves settings in plugin settings, under the activeScript key. See for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "setScriptSettings",
    code: "setScriptSettings(settings: any): Promise<void>;",
    desc: "Sets script settings.\nSee for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "openFileInNewOrAdjacentLeaf",
    code: "openFileInNewOrAdjacentLeaf(file: TFile): WorkspaceLeaf;",
    desc: "Open a file in a new workspaceleaf or reuse an existing adjacent leaf depending on Excalidraw Plugin Settings",
    after: "",
  },
  {
    field: "measureText",
    code: "measureText(text: string): { width: number; height: number };",
    desc: "Measures text size based on current style settings",
    after: "",
  },
  {
    field: "verifyMinimumPluginVersion",
    code: "verifyMinimumPluginVersion(requiredVersion: string): boolean;",
    desc: 'Returns true if plugin version is >= than required\nrecommended use:\n<code>if(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.5.20")) {new Notice("message");return;}<code>',
    after: "",
  },
  {
    field: "selectElementsInView",
    code: "selectElementsInView(elements: ExcalidrawElement[]):void;",
    desc: "Elements provided will be set as selected in the targetView.",
    after: "",
  },
  {
    field: "generateElementId",
    code: "generateElementId(): string;",
    desc: "Returns an 8 character long random id",
    after: "",
  },
  {
    field: "cloneElement",
    code: "cloneElement(element: ExcalidrawElement): ExcalidrawElement;",
    desc: "Returns a clone of the element with a new element id",
    after: "",
  },
  {
    field: "moveViewElementToZIndex",
    code: "moveViewElementToZIndex(elementId:number, newZIndex:number): void;",
    desc: "Moves the element to a specific position in the z-index",
    after: "",
  },
  {
    field: "hexStringToRgb",
    code: "hexStringToRgb(color: string):number[];",
    desc: "Converts a HEX color to an RGB number array. #FF0000 to [255,0,0]",
    after: "",
  },
  {
    field: "rgbToHexString",
    code: "rgbToHexString(color: number[]):string;",
    desc: "Converts an RGB number array to a HEX string. [255,0,0] to #FF0000",
    after: "",
  },
  {
    field: "hslToRgb",
    code: "hslToRgb(color: number[]):number[];",
    desc: "Converts an HSL number array to an RGB number array. [0,100,50] to [255,0,0]",
    after: "",
  },
  {
    field: "rgbToHsl",
    code: "rgbToHsl(color:number[]):number[];",
    desc: "Converts an RGB number array to an HSL number array. [255,0,0] to [0,100,50]",
    after: "",
  },
  {
    field: "colorNameToHex",
    code: "colorNameToHex(color:string):string;",
    desc: "Converts a CSS color name to its HEX color equivalent. 'White' to #FFFFFF",
    after: "",
  },
];

export const EXCALIDRAW_SCRIPTENGINE_INFO: SuggesterInfo[] = [
  {
    field: "inputPrompt",
    code: "inputPrompt: (header: string, placeholder?: string, value?: string, buttons?: [{caption:string, action:Function}]);",
    desc:
      "Opens a prompt that asks for an input.\nReturns a string with the input.\nYou need to await the result of inputPrompt.\n" +
      "buttons.action(input: string) => string\nThe button action function will receive the actual input string. If action returns null, input will be unchanged. If action returns a string, input will receive that value when the promise is resolved. " +
      "example:\n<code>let fileType = '';\nconst filename = await utils.inputPrompt (\n  'Filename',\n  '',\n  '',\n,  [\n    {\n      caption: 'Markdown',\n      action: ()=>{fileType='md';return;}\n    },\n    {\n      caption: 'Excalidraw',\n      action: ()=>{fileType='ex';return;}\n    }\n  ]\n);</code>",
    after: "",
  },
  {
    field: "suggester",
    code: "suggester: (displayItems: string[], items: any[], hint?: string, instructions?:Instruction[]);",
    desc: "Opens a suggester. Displays the displayItems and returns the corresponding item from items[]\nYou need to await the result of suggester.\nIf the user cancels (ESC), suggester will return undefined\nHint and instructions are optional\n\n<code>interface Instruction {command: string;purpose: string;}</code>",
    after: "",
  },
];

export const FRONTMATTER_KEYS_INFO: SuggesterInfo[] = [
  {
    field: "plugin",
    code: null,
    desc: "Denotes an excalidraw file. If key is not present, the file will not be recognized as an Excalidarw file. Valid values are 'parsed' and 'raw'",
    after: ": parsed",
  },
  {
    field: "link-prefix",
    code: null,
    desc: "Set custom prefix to denote text element containing a valid internal link. Set to empty string if you do not want to show a prefix",
    after: ': "📍"',
  },
  {
    field: "url-prefix",
    code: null,
    desc: "Set custom prefix to denote text element containing a valid external link. Set to empty string if you do not want to show a prefix",
    after: ': "🌐"',
  },
  {
    field: "link-brackets",
    code: null,
    desc: "Set to true, if you want to display [[square brackets]] around the links in Text Elements",
    after: ": true",
  },
  {
    field: "default-mode",
    code: null,
    desc: "Specifies how Excalidraw should open by default. Valid values are: view|zen",
    after: ": view",
  },
  {
    field: "linkbutton-opacity",
    code: null,
    desc: "The opacity of the blue link button in the top right of the element overriding the respective setting in plugin settings. "+
      "Valid values are between 0 and 1, where 0 means the button is transparent.",
    after: ": 0.5",
  },
  {
    field: "font",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: Virgil|Cascadia|font_file_name.extension",
    after: ": Virgil",
  },
  {
    field: "font-color",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: css-color-name|#HEXcolor|any-other-html-standard-format",
    after: ": SteelBlue",
  },
  {
    field: "border-color",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: css-color-name|#HEXcolor|any-other-html-standard-format",
    after: ": SteelBlue",
  },
  {
    field: "css",
    code: null,
    desc: 'This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this front matter keys to your markdown document. Valid values are: "css-filename|css snippet"',
    after: ': ""',
  },
  {
    field: "export-transparent",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. true == Transparent / false == with background",
    after: ": true",
  },
  {
    field: "export-dark",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. true == Dark mode / false == light mode",
    after: ": true",
  },
  {
    field: "export-svgpadding",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. This only affects export to SVG. Specify the export padding for the image.",
    after: ": 5",
  },
  {
    field: "export-pngscale",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. This only affects export to PNG. Specify the export scale for the image. The typical range is between 0.5 and 5, but you can experiment with other values as well.",
    after: ": 1",
  },
];
