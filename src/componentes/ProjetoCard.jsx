
import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque
}) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>

      {destaque && (
        <strong className="projeto-destaque">
          ⭐ Projeto em destaque
        </strong>
      )}

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <p>
        <strong>Responsável:</strong> {responsavel}
      </p>

      <div>
        <strong>Status: </strong>
        <StatusBadge status={status} />
      </div>

      <div className="lista-tecnologias">
        <strong>Tecnologias:</strong>

        <div>
          {tecnologias.map((tecnologia) => (
            <TecnologiaTag
              key={tecnologia}
              nome={tecnologia}
            />
          ))}
        </div>
      </div>

    </article>
  );
}

export default ProjetoCard;
