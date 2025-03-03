export const blogs = {
    name: 'blogs',
    type: 'document',
    title: 'blogs',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of Blog Article',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Your Article',
        options: {
          source: 'title',
        },
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
      }
      
      ,
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small Description',
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
  };