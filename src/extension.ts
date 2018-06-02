'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import countTokens from "./parser/countTokens";
import countFors from './parser/countFors';
import Halstead from './metrics/Halstead';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "js-metrics-extension" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    /*let disposable = vscode.commands.registerCommand('extension.halstead', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        
        let text = editor.document.getText();
        console.log("hello world"); 
        let tokens = countTokens(text);
        let fors = countFors(text);
        let halsteadMetrics = new Halstead(tokens);

        let toShow = [
            `volume: ${halsteadMetrics.getVolume()}.`,
            `difficulty: ${halsteadMetrics.getDifficulty()}.`,
            `effort: ${halsteadMetrics.getEffort()}.`,
            `time to implement: ${halsteadMetrics.getTimeToImplement()}.`,
            `delivered bugs: ${halsteadMetrics.getBugsDelivered()}.`
        ];
        console.log("test");
        // Display a message box to the user
        toShow.forEach(element => {
            //vscode.window.showInformationMessage(element);
        });
    });*/

    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        // Create and show a new webview
        console.log("hi");

        const HTMLContent = getWebviewContent(context);

        const panel = vscode.window.createWebviewPanel(
            'catCoding', // Identifies the type of the webview. Used internally
            'Cat Coding', // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the new webview panel in.
            {
                enableScripts: true
            } // Webview options. More on these later.
        );
        console.log("hi");

        panel.webview.html = HTMLContent;
    }));
    // context.subscriptions.push(disposable);
}

function getWebviewContent(context: vscode.ExtensionContext) {
    const viewFolder = 'out/view';
    const HTMLPath = path.resolve(context.extensionPath, viewFolder, 'index.html');
    const regExp = /assets|vizabi|barrankchart|bubblechart|bubblemap|linechart|mountainchart|inline|main/gi;
    console.log(HTMLPath);
    const HTMLContent = fs.readFileSync(HTMLPath, 'utf-8');

    return HTMLContent.replace(regExp, function(x) {
        var onDiskPath = vscode.Uri.file(path.join(context.extensionPath, viewFolder, x));
        return onDiskPath.with({
            scheme: 'vscode-resource'
        });
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
}