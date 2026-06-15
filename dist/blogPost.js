"use strict";
// define type alias
Object.defineProperty(exports, "__esModule", { value: true });
// create a blog post
const myPost = {
    title: 'Learn TypeScript',
    author: 'Sohan',
    content: 'TypeScript is a supart',
    publishid: true,
    publishidData: '10 june 2026',
};
function printPost(post) {
    console.log(`Title: ${post.title}`);
    console.log(`Author: ${post.author}`);
    console.log(`Content: ${post.content}`);
    console.log(`Publishid: ${post.publishid}`);
    if (post.publishidData) {
        console.log(`Data: ${post.publishidData}`);
    }
}
printPost(myPost);
//# sourceMappingURL=blogPost.js.map