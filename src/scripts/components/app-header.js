class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-dark bg-warning">
    <span class="navbar-brand mb-0 h1">Data Karyawan PT. Jatuh Cinta</span>
  </nav>
  `;
  }
}

customElements.define("app-header", AppHeader);
