import * as vscode from "vscode";
import { DocElement, DocParam, DOC_ITEMS } from "./docs";
import {
  createFunctionalCompletionProvider,
  createFunctionalHoverProvider,
} from "./providers";
import { getCurrentWord, FILE_ID, COMPLETION_TOKEN } from "./util";

const COMPLETION_ITEMS: CompletionItems = Object.freeze({
  args: ["0", "1", "2", "3", "4", "5"],
  user: ["username", "id", "discriminator", "bot", "system", "publicFlags"],
  member: ["user", "joinedAt"],
});

interface CompletionItems {
  [key: string]: string[];
}

function doCompletion(document: vscode.TextDocument, pos: vscode.Position) {
  const word = getCurrentWord(document, pos);

  return (
    COMPLETION_ITEMS[word]?.map(
      (item) => new vscode.CompletionItem(item, vscode.CompletionItemKind.Field)
    ) ?? []
  );
}

function argToString(arg: DocParam): string {
  return `
    \t${arg.name} => ${arg.type}
  `;
}

function docToString(doc: DocElement): string {
  return `
    ${doc.description}

    - arguments: ${
      doc.args.length ? doc.args.map(argToString).join("\n") : "none"
    }
    - returns: ${doc.return}
  `;
}

function doHover(
  document: vscode.TextDocument,
  pos: vscode.Position
): vscode.Hover | undefined {
  const word = getCurrentWord(document, pos);

  const item = DOC_ITEMS[word];

  if (!item) {
    return undefined;
  }

  return new vscode.Hover(
    docToString(item),
    document.getWordRangeAtPosition(pos)
  );
}

export function activate(ctx: vscode.ExtensionContext): void {
  const completion = vscode.languages.registerCompletionItemProvider(
    FILE_ID,
    createFunctionalCompletionProvider((doc, pos) => doCompletion(doc, pos)),
    COMPLETION_TOKEN
  );

  const hover = vscode.languages.registerHoverProvider(
    FILE_ID,
    createFunctionalHoverProvider((doc, pos) => doHover(doc, pos))
  );

  ctx.subscriptions.push(completion, hover);
}
