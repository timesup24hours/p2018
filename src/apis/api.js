class Api {
  constructor() {
    this.path = '/api/';
  }

  async get(args) {
    try {
      const { data } = await fetch(`${this.path}/${args.url}`);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async getOne(args) {
    try {
      const { data } = await fetch(`${this.path}/${args.url}/${args.id}`);
      return data;
    } catch (e) {
      throw e;
    }
  }

  async post(args) {
    try {
      const { data } = await fetch(`${this.path}/${args.url}`, {
        method: 'POST',
        body: JSON.stringify(args.data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (e) {
      throw e;
    }
  }

  async put(args) {
    try {
      const { data } = await fetch(`${this.path}/${args.url}/${args.id}`, {
        method: 'PUT',
        body: JSON.stringify(args.data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (e) {
      throw e;
    }
  }

  async deletedTodo(args) {
    try {
      const { data } = await fetch(`${this.path}/${args.url}/${args.id}`, {
        method: 'DLETE',
        body: JSON.stringify(args.data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export default new Api();
