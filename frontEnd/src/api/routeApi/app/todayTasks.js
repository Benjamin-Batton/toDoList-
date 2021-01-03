const todayTasks = {
  name: "today",
  data: [
    {
      method: "get",
      url: "/today",
      controller: "get",
    },
    {
      method: "delete",
      url: "/today/:id",
      controller: "delete",
    },
    {
      method: "post",
      url: "/today",
      controller: "create",
    },
    {
      method: "post",
      url: "/today/:id",
      controller: "update",
    },
  ],
  isMocked: false,
  oneController: "getTasks",
};
module.exports = todayTasks;
