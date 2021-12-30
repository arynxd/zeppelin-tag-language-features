import * as vscode from "vscode";

type CompletionProviderCallback = (
  document: vscode.TextDocument,
  position: vscode.Position,
  token?: vscode.CancellationToken,
  context?: vscode.CompletionContext
) => vscode.CompletionItem[];

export function createFunctionalCompletionProvider(
  callback: CompletionProviderCallback
): vscode.CompletionItemProvider {
  return {
    provideCompletionItems: (...args) => callback(...args),
  };
}

type HoverProviderCallback = (
  document: vscode.TextDocument,
  position: vscode.Position,
  token?: vscode.CancellationToken,
  context?: vscode.CompletionContext
) => vscode.Hover | undefined;

export function createFunctionalHoverProvider(
  callback: HoverProviderCallback
): vscode.HoverProvider {
  return {
    provideHover: (...args) => callback(...args),
  };
}
