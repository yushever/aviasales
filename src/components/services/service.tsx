export default class GetTickets {
  id = '';

  async getResource(url: string) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getId() {
    const res: { searchId: string } = await this.getResource('https://front-test.dev.aviasales.ru/search');
    this.id = res.searchId;
    return res;
  }

  async getAllTickets() {
    let res;
    try {
      res = await this.getResource(`https://front-test.dev.aviasales.ru/tickets?searchId=${this.id}`);
      return res;
    } catch (err) {
      console.log('Error:', err);
      return { tickets: [], stop: false };
    }
  }
}
