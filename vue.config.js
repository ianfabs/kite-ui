const MonocoEditorPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new MonocoEditorPlugin({
                // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
                languages: ['javascript', 'css', 'html'],
                features: ['accessibilityHelp', 'bracketMatching', 'caretOperations', 'clipboard', 'codeAction', 'codelens', 'colorDetector', 'comment', 'contextmenu', 'coreCommands', 'cursorUndo', 'dnd', 'find', 'folding', 'fontZoom', 'format', 'hover', 'inPlaceReplace', 'linesOperations', 'multicursor', 'referenceSearch', 'rename', 'smartSelect', 'snippets', 'suggest', 'transpose', 'wordHighlighter', 'wordOperations', 'wordPartOperations']
              })
        ]
      }
}