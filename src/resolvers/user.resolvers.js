import getUsers from '../data/user.data';

export default {
  Query: {
    user(parent, args, ctx, info) {
      // fetch all the departments
      const users = getUsers();
      if (!args.id) {
        return users;
      }
      return users.filter((d)=>{
        return d.userId == args.id;
      })
    },
  },
};
