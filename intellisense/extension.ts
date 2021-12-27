import * as vscode from "vscode";

const FILE_ID = "zep";
const COMPLETION_TOKEN = ".";

const REGEX = Object.freeze({
  user: /user/g,
  args: /args/g,
  member: /member/g
});

const COMPLETION_ITEMS = Object.freeze({
  args: ["0", "1", "2", "3", "4", "5"],
  user: ["username", "id", "discriminator", "bot", "system", "publicFlags"],
  member: ["user", "joinedAt"]
});

type KeyType = "args" | "user" | "member";

function doCompletion(
  document: vscode.TextDocument,
  pos: vscode.Position,
  key: KeyType
) {
  const line = document.lineAt(pos.line).text;
  const position = pos.character;
  let shouldComplete = false;

  // there may be multiple matches within a line
  const matches = [...line.matchAll(REGEX[key])];

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
    return [];
  }

  return COMPLETION_ITEMS[key].map(
    (item) => new vscode.CompletionItem(item, vscode.CompletionItemKind.Field)
  );
}

type ProviderCallback = (
  document: vscode.TextDocument,
  position: vscode.Position,
  token?: vscode.CancellationToken,
  context?: vscode.CompletionContext
) => vscode.CompletionItem[];

function createFunctionalProvider(
  callback: ProviderCallback
): vscode.CompletionItemProvider {
  return {
    provideCompletionItems: (...args) => callback(...args),
  };
}

export function activate(ctx: vscode.ExtensionContext): void {
  const subscriptions = Object.keys(COMPLETION_ITEMS).map((item) =>
    vscode.languages.registerCompletionItemProvider(
      FILE_ID,
      createFunctionalProvider((doc, pos) =>
        doCompletion(doc, pos, item as KeyType)
      ),
      COMPLETION_TOKEN
    )
  );

  ctx.subscriptions.push(...subscriptions);
}
