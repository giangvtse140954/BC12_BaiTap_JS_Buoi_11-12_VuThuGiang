function UserService() {}

UserService.prototype.getUsers = function () {
  return axios({
    url: 'https://60f444843cb0870017a8a1b4.mockapi.io/nguoiDung',
    method: 'GET',
  });
};
