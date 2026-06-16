interface User {
  id: number;
  username: string;
  email: string;
}

// step 2

interface Author extends User {
  bip: string;
  posts: string[];
}

type Status = 'active' | 'inactive' | 'banned';

const author1: Author = {
  id: 125,
  username: 'sohan',
  email: 'islammdsohan603@gamil.com',
  bip: 'my name isla ',
  posts: ['sohamy df', 'sohferfel', 'sdfh'],
};

console.log(author1);
