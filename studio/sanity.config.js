import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Games and Grub',
  projectId: 'orw8lnqj',
  dataset: 'production',

  plugins: [
    // Singleton: owners open straight into the one "Site Content" document.
    structureTool({
      structure: (S) =>
        S.list()
          .title('Games and Grub')
          .items([
            S.listItem()
              .title('Site Content')
              .id('siteContent')
              .child(S.document().schemaType('siteContent').documentId('siteContent')),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },

  // No "create new" for the singleton — there's only ever one Site Content doc.
  document: {
    newDocumentOptions: (prev) => prev.filter((t) => t.templateId !== 'siteContent'),
  },
})
