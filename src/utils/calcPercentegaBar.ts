interface ICalcPercentegaBarProps {
  value: number;
  totalBars: number;
}

interface IResCalcPercentegeBarProps {
  active_value: string;
  inative_value: string;
}
function calcPercentegaBar({
  value,
  totalBars,
}: ICalcPercentegaBarProps): IResCalcPercentegeBarProps {
  const percent = value;
  const bars = Math.round((percent * totalBars) / 100);

  let active_value = '';
  for (let i = 0; i < bars; i++) {
    active_value = active_value + '|';
  }

  const barsCountInative = totalBars - bars;

  let inative_value = '';
  for (let i = 0; i < barsCountInative; i++) {
    inative_value = inative_value + '|';
  }

  return {
    active_value,
    inative_value,
  };
}

export { calcPercentegaBar };
