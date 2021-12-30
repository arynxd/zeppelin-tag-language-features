import * as vscode from "vscode";

export const FILE_ID = "zep";
export const COMPLETION_TOKEN = ".";

export function getCurrentWord(
  document: vscode.TextDocument,
  pos: vscode.Position
): string {
  return document.getText(document.getWordRangeAtPosition(pos));
}
