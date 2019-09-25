const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id222'},
  {title: 'Post 2', date: new Date(), views: 13, comments: [1, 2, 3], _id: 'id111'}
];

export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000);
    });
  },

  async remove({}, id) {

  },

  async update({}, {id, text}) {

  },

  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 1000);
    });
  },

  async create({}, {title, text}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000);
    });
  },
}
