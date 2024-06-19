import { config, fields, collection } from '@keystatic/core';
import { inline } from '../../packages/keystatic/src/content-components';

// const formatting = {
//   headingLevels: [2, 3],
//   blockTypes: true,
//   listTypes: true,
//   inlineMarks: true,
// } as const;

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    // ------------------------------
    // Blog posts
    // ------------------------------
    blog: collection({
      label: 'Blog posts',
      slugField: 'title',
      path: 'src/content/blog/**',
      entryLayout: 'content',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { length: { min: 1 } } },
        }),
        description: fields.text({
          label: 'Description',
          validation: { length: { min: 1 } },
        }),
        pubDate: fields.date({
          label: 'Pub Date',
          validation: {
            isRequired: true,
          },
        }),
        updatedDate: fields.date({
          label: 'Updated Date',
        }),
        heroImage: fields.text({
          label: 'Hero Image',
        }),
        content: fields.mdx({
          label: 'Content',
          components: {
            Footnote: inline({
              label: 'Footnote',
              schema: {
                inlineText: fields.text({
                  label: 'Inline Text',
                  validation: {
                    isRequired: true,
                  },
                }),
                footNoteText: fields.mdx({
                  label: 'Footnote Text',
                }),
              },
            }),
          },
        }),
        // content: fields.document({
        //   label: 'Content',
        //   links: true,
        //   layouts: [[1, 1]],
        //   dividers: true,
        //   tables: true,
        //   formatting,
        // }),
      },
    }),
  },
});
