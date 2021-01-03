const upcomingTasks = {
  name: "upcoming",
  data: [
    {
      method: "get",
      url: "/upcoming",
      controller: "get",
    },
    {
      method: "delete",
      url: "/upcoming/:id",
      controller: "delete",
    },
    {
      method: "post",
      url: "/upcoming",
      controller: "create",
    },
    {
      method: "post",
      url: "/upcoming/:id",
      controller: "update",
    },
  ],
  isMocked: false,
  oneController: "getTasks",
};
module.exports = upcomingTasks;
