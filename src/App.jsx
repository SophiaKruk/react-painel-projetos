
import "./App.css";

import StatusBadge from "./componentes/StatusBadge";
import TecnologiaTag from "./componentes/TecnologiaTag";
import ProjetoCard from "./componentes/ProjetoCard";
import Secao from "./componentes/Secao";
import Resumo from "./componentes/Resumo";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true
  },
  {
    id: 2,
    titulo: "Site de Cursos",
    descricao: "Plataforma para apresentar cursos online.",
    responsavel: "Pedro",
    status: "Em andamento",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false
  },
  {
    id: 3,
    titulo: "Aplicativo de Tarefas",
    descricao: "Organização de tarefas e atividades diárias.",
    responsavel: "Maria",
    status: "Em andamento",
    tecnologias: ["React", "Firebase"],
    destaque: true
  },
  {
    id: 4,
    titulo: "Loja Virtual",
    descricao: "Sistema para venda de produtos pela internet.",
    responsavel: "Lucas",
    status: "Pendente",
    tecnologias: ["React", "Node.js", "MongoDB"],
    destaque: false
  },
  {
    id: 5,
    titulo: "Sistema Escolar",
    descricao: "Cadastro de alunos, notas e turmas.",
    responsavel: "Julia",
    status: "Concluído",
    tecnologias: ["Java", "MySQL"],
    destaque: true
  },
  {
    id: 6,
    titulo: "Portal de Notícias",
    descricao: "Site para publicar notícias e artigos.",
    responsavel: "Gabriel",
    status: "Pendente",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false
  }
];

function App() {
  const total = projetos.length;

  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;

  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em andamento"
  ).length;

  return (
    <>
      <header className="cabecalho">
        <h1>Meus Projetos</h1>
      </header>

      <main className="painel">
        <Resumo
          total={total}
          concluidos={concluidos}
          emDesenvolvimento={emDesenvolvimento}
        />

        <Secao titulo="Projetos da turma">
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              responsavel={projeto.responsavel}
              status={projeto.status}
              tecnologias={projeto.tecnologias}
              destaque={projeto.destaque}
            />
          ))}
        </Secao>

        <Secao titulo="Exemplos de componentes">
          <div className="exemplos">
            <div>
              <h3>Etiquetas de status</h3>
              <StatusBadge status="Concluído" />
              <StatusBadge status="Em andamento" />
              <StatusBadge status="Pendente" />
            </div>

            <div>
              <h3>Etiquetas de tecnologia</h3>
              <TecnologiaTag nome="React" />
              <TecnologiaTag nome="JavaScript" />
              <TecnologiaTag nome="HTML" />
              <TecnologiaTag nome="CSS" />
            </div>
          </div>
        </Secao>
      </main>

      <footer className="rodape">
        Desenvolvido pela turma de Desenvolvimento de Sistemas
      </footer>
    </>
  );
}

export default App;
