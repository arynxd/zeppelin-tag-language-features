import * as vscode from "vscode";
import { DocElement, DocParam, DOC_ITEMS } from "./docs";
import {
  createFunctionalCompletionProvider,
  createFunctionalHoverProvider,
} from "./providers";
import { getCurrentWord, FILE_ID, COMPLETION_TOKEN } from "./util";

interface Regex {
  [key: string]: RegExp;
}
const REGEX: Regex = Object.freeze({
  user: /user/g,
  args: /args/g,
  member: /member/g,
});

const COMPLETION_ITEMS: CompletionItems = Object.freeze({
  args: ["0", "1", "2", "3", "4", "5"],
  user: ["username", "id", "discriminator", "bot", "system", "publicFlags"],
  member: ["user", "joinedAt"],
});

interface CompletionItems {
  [key: string]: string[];
}

function doCompletion(document: vscode.TextDocument, pos: vscode.Position) {
  const line = document.lineAt(pos.line).text;
  const position = pos.character;

  for (const [key, regex] of Object.entries(REGEX)) {
    let shouldComplete = false;
    const matches = [...line.matchAll(regex)];

    for (const match of matches) {
      if (match.index == null) {
        continue;
      }

      // check if we are actually completing, len + 1 for period char
      if (match.index <= position && position <= match.index + key.length + 1) {
        shouldComplete = true;
      }
    }

    if (!shouldComplete) {
      continue;
    }

    return COMPLETION_ITEMS[key].map(
      (item) => new vscode.CompletionItem(item, vscode.CompletionItemKind.Field)
    );
  }

  return [];
}

function argToString(arg: DocParam): string {
  return `${arg.name}: ${arg.type}`;
}

function docToString(doc: DocElement, word: string): string {
  return `
    ${doc.description}

    ${word}${
      doc.args.length ? "(" + doc.args.map(argToString).join(", ") + ")" : "()"
    }

    returns: ${doc.return}
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
    docToString(item, word),
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
