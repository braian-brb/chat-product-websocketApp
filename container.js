//const knex = require("knex");
import knex from 'knex';

class Container {
  constructor(config) {
    this.config = config;
    this.knex = knex(config);
  }
}

export class ContainerMessages extends Container {
  constructor(config) {
    super(config);
  }

  async saveMessage(message) {
    try {
      await this.knex.insert(message).into("messages");
      console.log("messages saved successfully");
    } catch (error) {
      console.log(error);
    } finally {
      //this.knex.destroy();
    }
  }

  async getMessages() {
    try {
      const messages = await this.knex.select().from("messages");
      return messages;
    } catch (error) {
      console.log(error);
    } finally {
      //this.knex.destroy();
    }
  }
}

export class ContainerProducts extends Container {
  constructor(config) {
    super(config);
  }

  async saveProduct(product) {
    try {
      await this.knex.from("products").insert(product);
      console.log("products saved successfully");
    } catch (err) {
      console.log(err);
    } finally {
      //this.knex.destroy();
    }
  }

  async getProducts() {
    try {
      return this.knex.from("products").select();
    } catch (err) {
      console.log(err);
    } finally {
      //this.knex.destroy();
    }
  }
}
