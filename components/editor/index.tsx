"use client";

import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  toolbarPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  UndoRedo,
  Separator,
  codeBlockPlugin,
  codeMirrorPlugin,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  BlockTypeSelect,
  linkPlugin,
  linkDialogPlugin,
  tablePlugin,
  diffSourcePlugin,
} from "@mdxeditor/editor";
import { basicDark } from "cm6-theme-basic-dark";
import { useTheme } from "next-themes";
import "@mdxeditor/editor/style.css";

interface Props {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
}

const Editor = ({ value, editorRef, fieldChange, ...props }: Props) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? [basicDark] : [];

  return (
    <div className="editor-wrapper">
      <style jsx global>{`
        .editor-wrapper .mdxeditor-root-contenteditable,
        .editor-wrapper .mdxeditor-root-contenteditable *,
        .editor-wrapper [role="textbox"],
        .editor-wrapper [role="textbox"] *,
        .editor-wrapper [contenteditable="true"],
        .editor-wrapper [contenteditable="true"] * {
          color: #0f172a !important;
        }

        .dark .editor-wrapper .mdxeditor-root-contenteditable,
        .dark .editor-wrapper .mdxeditor-root-contenteditable *,
        .dark .editor-wrapper [role="textbox"],
        .dark .editor-wrapper [role="textbox"] *,
        .dark .editor-wrapper [contenteditable="true"],
        .dark .editor-wrapper [contenteditable="true"] * {
          color: #f1f5f9 !important;
        }

        .editor-wrapper a {
          color: var(--primary) !important;
        }

        .editor-wrapper pre,
        .editor-wrapper pre * {
          color: inherit !important;
        }
      `}</style>

      <MDXEditor
        key={resolvedTheme}
        markdown={value}
        ref={editorRef}
        className="markdown-editor dark:bg-dark-400 rounded-1.5 light-border-2 grid w-full border bg-amber-50"
        onChange={fieldChange}
        plugins={[
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              txt: "text",
              html: "HTML",
              sql: "sql",
              python: "python",
              saas: "sass",
              scss: "scss",
              bash: "bash",
              json: "json",
              ts: "typescript",
              tsx: "typescript (react)",
              jsx: "javascript (react)",
            },
            autoLoadLanguageSupport: true,
            codeMirrorExtensions: theme,
          }),
          diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "" }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <InsertTable />
                <InsertThematicBreak />
                <InsertCodeBlock />
                <ConditionalContents
                  options={[
                    {
                      when: (editor) => editor?.editorType === "codeblock",
                      contents: () => <ChangeCodeMirrorLanguage />,
                    },
                  ]}
                />
              </>
            ),
          }),
        ]}
        {...props}
      />
    </div>
  );
};

export default Editor;
