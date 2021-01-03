const inboxTasks = {
  name: "inbox",
  data: [
    {
      method: "get",
      url: "/inbox",
      controller: "get",
    },
    {
      method: "delete",
      url: "/inbox/:id",
      controller: "delete",
    },
    {
      method: "post",
      url: "/inbox",
      controller: "create",
    },
    {
      method: "post",
      url: "/inbox/:id",
      controller: "update",
    },
  ],
  isMocked: false,
  oneController: "getTasks",
};
module.exports = inboxTasks;
