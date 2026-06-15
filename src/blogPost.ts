// define type alias

type BlogPost = {
  title: string;
  author: string;
  content: string;
  publishid: boolean;
  publishidData?: string;
};

// create a blog post

const myPost: BlogPost = {
  title: 'Learn TypeScript',
  author: 'Sohan',
  content: 'TypeScript is a supart',
  publishid: true,
  publishidData: '10 june 2026',
};

function printPost(post: BlogPost) {
  console.log(`Title: ${post.title}`);
  console.log(`Author: ${post.author}`);
  console.log(`Content: ${post.content}`);
  console.log(`Publishid: ${post.publishid}`);

  if (post.publishidData) {
    console.log(`Data: ${post.publishidData}`);
  }
}

printPost(myPost);
