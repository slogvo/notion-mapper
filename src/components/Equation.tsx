import { EquationBlock } from "../types/equation.types";

export const Equation = ({ block }: { block: EquationBlock }) => (
  <div className="text-center my-5 font-mono">{block.equation.expression}</div>
);
