type BadgeProps = {
  purpose: "Active" | "Funded";
};

export default function Badge({ purpose }: BadgeProps) {
  return (
    <span
      data-cy={`funding-status-badge-${purpose}`}
      className={`absolute top-4 left-4 z-10 font-semibold tracking-wide py-1 px-3 rounded-full uppercase text-sm text-white ${
        purpose === "Active" ? "bg-royalGoldenYellow" : "bg-royalGreen"
      }`}
    >
      {purpose}
    </span>
  );
}
