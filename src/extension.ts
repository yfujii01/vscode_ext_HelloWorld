'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
require('date-utils');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        
        // ============================================
        // 日付を出力 
        // ============================================
        // var str = 'aaaHello Worldaaa!';
        var dt = new Date();
        var y = dt.getFullYear();
        var m = ("00" + (dt.getMonth()+1)).slice(-2);
        var d = ("00" + dt.getDate()).slice(-2);
        var result = y + "/" + m + "/" + d;
        // Display a message box to the user
        vscode.window.showInformationMessage(result);
    });

    let disposable2 = vscode.commands.registerCommand('extension.sayCount', () => {
        // The code you place here will be executed every time your command is executed
        
        // ============================================
        // 選択した文字数をボップアップ
        // ============================================
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);

        // Display a message box to the user
        vscode.window.showInformationMessage('Selected characters: ' + text.length);
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {
}