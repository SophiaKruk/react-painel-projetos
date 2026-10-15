
function StatusBadge({ status }) {
  let classe = "";

  if (status === "Concluído") {
    classe = "status-concluido";
  } else if (status === "Em desenvolvimento") {
    classe = "status-desenvolvimento";
  } else if (status === "Planejamento") {
    classe = "status-planejamento";
  } else {
    classe = "status-padrao";
  }

  return (
    <span className={classe}>
      {status}
    </span>
  );
}

export default StatusBadge;
