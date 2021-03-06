// tslint:disable:max-line-length

export const appJsonSchema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Rocket.Chat App',
    description: 'A Rocket.Chat App declaration for usage inside of Rocket.Chat.',
    type: 'object',
    properties: {
        id: {
            description: "The App's unique identifier in uuid v4 format. This is optional, although recommended, however if you are going to publish on the App store, you will be assigned one.",
            type: 'string',
            pattern: '^[0-9a-fA-f]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
            minLength: 36,
            maxLength: 36,
        },
        name: {
            description: 'The public visible name of this App.',
            type: 'string',
        },
        nameSlug: {
            description: "A url friendly slugged version of your App's name.",
            type: 'string',
            pattern: '^([a-z]|\\-)+$',
            minLength: 3,
        },
        version: {
            description: 'The version of this App which will be used for display publicly and letting users know there is an update. This uses the semver format.',
            type: 'string',
            pattern: '\\bv?(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)(?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?\\b',
            minLength: 5,
        },
        description: {
            description: 'A description of this App, used to explain what this App does and provides for the user.',
            type: 'string',
        },
        requiredApiVersion: {
            description: "The required version of the App's API which this App depends on. This uses the semver format.",
            type: 'string',
            pattern: '\\bv?(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)(?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?\\b',
            minLength: 5,
        },
        author: {
            type: 'object',
            properties: {
                name: {
                    description: "The author's name who created this App.",
                    type: 'string',
                },
                support: {
                    description: 'The place where people can get support for this App, whether email or website.',
                    type: 'string',
                },
                homepage: {
                    description: "The homepage for this App, it can be a Github or the author's website.",
                    type: 'string',
                    format: 'uri',
                },
            },
            required: ['name', 'support'],
        },
        classFile: {
            type: 'string',
            description: 'The name of the file which contains your App TypeScript source code.',
            pattern: '^.*\\.(ts)$',
        },
        iconFile: {
            type: 'string',
            description: 'The name of the file to use as the icon.',
            pattern: '^.*\\.(png|jpg|jpeg|gif)$',
        },
        assetsFolder: {
            type: 'string',
            description: 'The name of the folder which contains all of your resources, it should not start with a period.',
        },
    },
    required: [
        'id',
        'name',
        'nameSlug',
        'version',
        'description',
        'requiredApiVersion',
        'author',
        'classFile',
        'iconFile',
    ],
};
