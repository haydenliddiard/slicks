import React from 'react';
import S, { documentTypeListItems } from '@sanity/desk-tool/structure-builder';

// build custom sidebar

export default function sidebar() {
    return S.list().title(`Slick's Slices`).items([
        // create new sub item
        S.listItem()
        .title('Home Page').icon(() => <strong>😭</strong>)
        .child(
            S.editor()
            .schemaType('storeSettings')
            // make a new document id, so we dont have a random string
            .documentId('downtown')
        ),
        // add in the rest of the document items
        ...documentTypeListItems().filter(item => item.getId() !== 'storeSettings'),
    ])
}
