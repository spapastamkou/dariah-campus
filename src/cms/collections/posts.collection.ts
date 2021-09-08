import type { CmsCollection } from 'netlify-cms-core'

import * as validation from '@/cms/utils/validation'

/**
 * Posts collection.
 */
export const collection: CmsCollection = {
  name: 'posts',
  label: 'Resources',
  label_singular: 'Resource',
  description: '',
  folder: 'content/posts',
  path: '{{slug}}/index',
  format: 'frontmatter',
  extension: 'mdx',
  create: true,
  delete: false,
  slug: '{{slug}}',
  media_folder: 'images',
  public_folder: 'images',
  preview_path: 'resource/posts/{{dirname}}',
  editor: { preview: true },
  sortable_fields: ['commit_date', 'date', 'title', 'commit_author'],
  view_groups: [
    {
      label: 'Year',
      field: 'date',
      pattern: '\\d{4}',
    },
  ],
  fields: [
    {
      name: 'title',
      label: 'Title',
      hint: '',
    },
    {
      name: 'shortTitle',
      label: 'Short title',
      hint: '',
      required: false,
    },
    {
      name: 'lang',
      label: 'Language',
      hint: '',
      widget: 'select',
      options: [
        {
          label: 'English',
          value: 'en',
        },
      ],
      default: 'en',
    },
    {
      name: 'date',
      label: 'Publication date',
      hint: '',
      widget: 'datetime',
      date_format: 'DD/MM/YYYY',
      time_format: false,
      picker_utc: true,
      default: '',
    },
    {
      name: 'version',
      label: 'Version',
      hint: '',
      default: '1.0.0',
    },
    {
      name: 'authors',
      label: 'Authors',
      hint: '',
      widget: 'relation',
      collection: 'people',
      multiple: true,
      value_field: '{{slug}}',
      search_fields: ['firstName', 'lastName'],
      display_fields: ['{{firstName}} {{lastName}}'],
    },
    {
      name: 'editors',
      label: 'Editors',
      hint: '',
      required: false,
      widget: 'relation',
      collection: 'people',
      multiple: true,
      value_field: '{{slug}}',
      search_fields: ['firstName', 'lastName'],
      display_fields: ['{{firstName}} {{lastName}}'],
    },
    {
      name: 'contributors',
      label: 'Contributors',
      hint: '',
      required: false,
      widget: 'relation',
      collection: 'people',
      multiple: true,
      value_field: '{{slug}}',
      search_fields: ['firstName', 'lastName'],
      display_fields: ['{{firstName}} {{lastName}}'],
    },
    {
      name: 'tags',
      label: 'Tags',
      hint: '',
      widget: 'relation',
      collection: 'tags',
      multiple: true,
      value_field: '{{slug}}',
      search_fields: ['name'],
      display_fields: ['name'],
    },
    {
      name: 'categories',
      label: 'Sources',
      hint: '',
      widget: 'relation',
      collection: 'categories',
      multiple: true,
      value_field: '{{slug}}',
      search_fields: ['name'],
      display_fields: ['name'],
      default: ['dariah'],
    },
    {
      name: 'featuredImage',
      label: 'Featured image',
      hint: '',
      required: false,
      widget: 'image',
    },
    {
      name: 'abstract',
      label: 'Abstract',
      hint: '',
      widget: 'text',
    },
    {
      name: 'body',
      label: 'Content',
      hint: '',
      widget: 'markdown',
      editor_components: [
        'image',
        'code-block',
        'Grid',
        'Download',
        'Video',
        'VideoCard',
        'SideNote',
        'ExternalResource',
        'Quiz',
      ],
    },
    {
      name: 'domain',
      label: 'Domain',
      hint: 'Please select the primary scholarly domain of this resource',
      widget: 'select',
      options: [
        {
          label: 'Social Sciences and Humanities',
          value: 'Social Sciences and Humanities',
        },
      ],
      default: 'Social Sciences and Humanities',
    },
    {
      name: 'targetGroup',
      label: 'Target group',
      hint: 'Please indicate the primary audience of your resource',
      widget: 'select',
      options: [
        {
          label: 'Data managers',
          value: 'Data managers',
        },
        {
          label: 'Domain researchers',
          value: 'Domain researchers',
        },
        {
          label: 'Data service engineers',
          value: 'Data service engineers',
        },
        {
          label: 'Data scientists/analysts',
          value: 'Data scientists/analysts',
        },
      ],
      default: 'Domain researchers',
    },
    {
      name: 'type',
      label: 'Content type',
      hint: 'This generates an icon, please select the most appropriate for your resource',
      widget: 'relation',
      collection: 'contentTypes',
      value_field: '{{slug}}',
      search_fields: ['name'],
      display_fields: ['name'],
      default: 'training-module',
    },
    {
      name: 'remote',
      label: 'Remote host',
      hint: '',
      required: false,
      widget: 'object',
      fields: [
        {
          name: 'date',
          label: 'Publication date',
          hint: '',
          required: false,
          widget: 'datetime',
          date_format: 'DD/MM/YYYY',
          time_format: false,
          picker_utc: true,
          default: '',
        },
        {
          name: 'url',
          label: 'URL',
          hint: '',
          required: false,
          pattern: [validation.isUrl, 'Must be a valid URL'],
        },
        {
          name: 'publisher',
          label: 'Publisher',
          hint: '',
          required: false,
        },
      ],
    },
    {
      name: 'licence',
      label: 'Licence',
      hint: '',
      widget: 'relation',
      collection: 'licences',
      value_field: '{{slug}}',
      search_fields: ['name'],
      display_fields: ['name'],
      default: 'ccby-4.0',
    },
    {
      name: 'toc',
      label: 'Show Table of Contents',
      hint: '',
      required: false,
      widget: 'boolean',
      default: false,
    },
  ],
}