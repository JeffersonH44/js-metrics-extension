'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import countTokens from "./parser/countTokens";
import Halstead from './metrics/Halstead';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "js-metrics-extension" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.halstead', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        
        let text = editor.document.getText();
        let tokens = countTokens(text);
        let halsteadMetrics = new Halstead(tokens);

        let toShow = [
            `volume: ${halsteadMetrics.getVolume()}.`,
            `difficulty: ${halsteadMetrics.getDifficulty()}.`,
            `effort: ${halsteadMetrics.getEffort()}.`,
            `time to implement: ${halsteadMetrics.getTimeToImplement()}.`,
            `delivered bugs: ${halsteadMetrics.getBugsDelivered()}.`
        ];

        // Display a message box to the user
        toShow.forEach(element => {
            vscode.window.showInformationMessage(element);
        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}