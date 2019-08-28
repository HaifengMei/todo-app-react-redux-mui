export const api = {
  fetchTodos() {
    return fetch(
      "https://gist.githubusercontent.com/HaifengMei/af80da237f1f60b74cb0d1dd900abfe1/raw/1007b9a742626ba7f9bcdaf99782f6cd26961a0f/todos.json"
    )
      .then(response => response.json())
      .then(json => json);
  }
};
