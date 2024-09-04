import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                content: fields.mdx({ label: 'Content' }),
            },
        }),
        timelineEvents: collection({
            label: 'Timeline Events',
            slugField: 'title',
            path: 'src/content/timeline-events/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                content: fields.mdx({ label: 'Content' }),
                who: fields.text({ label: 'Who' }),
            },
            columns: ['title', 'date', 'who'],
        })
    },
});