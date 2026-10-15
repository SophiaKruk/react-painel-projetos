
function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <section className="resumo">
      <div className="resumo-card">
        <h3>Total de projetos</h3>
        <p>{total}</p>
      </div>

      <div className="resumo-card">
        <h3>Projetos concluídos</h3>
        <p>{concluidos}</p>
      </div>

      <div className="resumo-card">
        <h3>Em desenvolvimento</h3>
        <p>{emDesenvolvimento}</p>
      </div>
    </section>
  );
}

export default Resumo;
