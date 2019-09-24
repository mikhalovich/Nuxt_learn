export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '222'},
          {title: 'Post 2', date: new Date(), views: 13, comments: [1, 2, 3], _id: '111'}
        ])
      }, 1000);
    })
  },

  async remove({}, id) {

  },
}
