'use client';

type PrintButtonProps = {
  label?: string;
};

export function PrintButton({ label = 'Save as PDF' }: PrintButtonProps) {
  return (
    <button className="printButton" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
