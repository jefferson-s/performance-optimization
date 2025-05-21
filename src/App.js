import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Lazy Loading Example</h1>
      <p>Role a página para ver o carregamento da imagem.</p>

      {/* Espaço vazio para forçar rolagem */}
      <div style={{ height: '1000px', backgroundColor: '#f0f0f0' }}>
        <p>Área inicial sem imagem (Role para baixo)</p>
      </div>

      {/* Imagem com Lazy Loading */}
      <div>
        <h2>Imagem com Lazy Loading:</h2>
        <img 
          src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Placeholder" 
          loading="lazy" 
          width="1200" 
          height="800"
        />
      </div>

      {/* Conteúdo adicional após a imagem */}
      <div style={{ height: '500px', backgroundColor: '#f0f0f0' }}>
        <p>Conteúdo adicional após a imagem</p>
        <img 
          src="https://images.unsplash.com/photo-1600520611035-84157ad4084d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Placeholder" 
          loading="lazy" 
          width="800" 
          height="400"
        />
      </div>
    </div>
  );
}

export default App;
